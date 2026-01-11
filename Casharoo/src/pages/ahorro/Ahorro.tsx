import { IonContent, IonHeader, IonPage, IonButton, IonFooter, IonToolbar, useIonViewWillEnter, useIonViewDidEnter, IonInput } from '@ionic/react';
import './Ahorro.css';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { obtenerUsuario, aportarAMeta, eliminarMeta } from '../../services/userRegister';

interface Meta {
  nombre: string;
  dinero: number;
  dineroAhorrado?: number;
  aportePorPlazo: number;
  color: number;
  icono: number;
  plazo: number;
}

const Ahorro: React.FC = () => {
  const history = useHistory();
  
  const [usuario, setUsuario] = useState<any>(null);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);
  const [metaSeleccionada, setMetaSeleccionada] = useState<{ index: number; meta: Meta } | null>(null);
  const [montoAporte, setMontoAporte] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const irACrearMeta = () => {
    history.push('/crear-meta');
  };

  const cargarUsuario = async () => {
    const usuarioId = localStorage.getItem("usuarioId");
    if (usuarioId) {
      const datosUsuario = await obtenerUsuario(usuarioId);
      setUsuario(datosUsuario);
      console.log("Metas del usuario:", datosUsuario.metas);
    }
  };

  useIonViewDidEnter(() => {
    cargarUsuario();
  }, []);

  useIonViewWillEnter(() => {
    cargarUsuario();
  }, []);

  useEffect(() => {
    cargarUsuario();
  }, []);

  const abrirDetallesMeta = (index: number, meta: Meta) => {
    setMetaSeleccionada({ index, meta });
    setMontoAporte('');
    setMostrarDetalles(true);
  };

  const cerrarDetalles = () => {
    setMostrarDetalles(false);
    setMetaSeleccionada(null);
  };

  const handleAporte = async () => {
    if (metaSeleccionada?.meta.plazo === 4) {
      if (!montoAporte || isNaN(parseFloat(montoAporte))) {
        alert('Por favor ingresa una cantidad válida');
        return;
      }
      if (parseFloat(montoAporte) <= 0) {
        alert('La cantidad debe ser mayor a 0');
        return;
      }
    } else {
      if (!metaSeleccionada?.meta.aportePorPlazo || metaSeleccionada.meta.aportePorPlazo <= 0) {
        alert('El aporte por plazo no es válido');
        return;
      }
    }

    setLoading(true);
    try {
      const usuarioId = localStorage.getItem("usuarioId");
      const cantidadAaportar = metaSeleccionada?.meta.plazo === 4 
        ? parseFloat(montoAporte) 
        : metaSeleccionada?.meta.aportePorPlazo || 0;

      const resultado = await aportarAMeta(usuarioId, metaSeleccionada!.index, cantidadAaportar);

      if (resultado.success) {
        await cargarUsuario();
        cerrarDetalles();
      } else {
        alert(`❌ Error: ${resultado.error}`);
      }
    } catch (error) {
      console.error('Error al aportar:', error);
      alert('Error al realizar el aporte');
    } finally {
      setLoading(false);
    }
  };

  const handleEliminarMeta = async () => {
    if (!metaSeleccionada || !confirm('¿Estás seguro de que quieres eliminar esta meta?')) {
      return;
    }

    setLoading(true);
    try {
      const usuarioId = localStorage.getItem("usuarioId");
      const resultado = await eliminarMeta(usuarioId, metaSeleccionada.index);

      if (resultado.success) {
        alert('Meta eliminada correctamente');
        await cargarUsuario();
        cerrarDetalles();
      } else {
        alert(` Error: ${resultado.error}`);
      }
    } catch (error) {
      console.error('Error al eliminar:', error);
      alert('Error al eliminar la meta');
    } finally {
      setLoading(false);
    }
  };

  const calcularDetalles = (meta: Meta) => {
    const montoActual = meta.dineroAhorrado || 0;
    const montoFaltante = Math.max(0, meta.dinero - montoActual);
    const dineroPorPlazo = meta.aportePorPlazo || 0;
    const periodosRestantes = dineroPorPlazo > 0 ? Math.ceil(montoFaltante / dineroPorPlazo) : 0;
    return { montoActual, montoFaltante, dineroPorPlazo, periodosRestantes };
  };

  const getTextoPlazo = (plazo: number) => {
    switch (plazo) {
      case 1:
        return 'Semanal';
      case 2:
        return 'Mensual';
      case 3:
        return 'Anual';
      case 4:
        return 'Sin plazo';
      default:
        return 'Sin plazo';
    }
  };

  const getPorcentajeProgreso = (meta: Meta) => {
    const montoActual = meta.dineroAhorrado || 0;
    if (!meta.dinero || meta.dinero === 0) return 0;
    return Math.min(100, (montoActual / meta.dinero) * 100);
  };

  const getUnidadTiempo = (plazo: number) => {
    switch (plazo) {
      case 1:
        return 'semana(s)';
      case 2:
        return 'mes(es)';
      case 3:
        return 'año(s)';
      default:
        return '';
    }
  };

  if (!usuario) {
    return (
      <IonPage>
        <IonContent className="ion-padding">
          <h1>Cargando ahorros del usuario...</h1>
        </IonContent>
      </IonPage>
    );
  }

  const metas = usuario.metas || [];

  return (
    <IonPage>
      <IonContent className='ahorro-contenido'>
        <IonHeader>
          <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap" rel="stylesheet"></link>
        </IonHeader>

        <div className='ahorro-header-rect'>
          <p className='ahorro-header-titulo'>Ahorros</p>
        </div>

        <div className='ahorro-metas-lista'>
          {metas.length > 0 ? (
            metas.map((meta: Meta, index: number) => {
              const porcentaje = getPorcentajeProgreso(meta);
              const colorMeta = 
                meta.color === 1
                  ? '#07DAFF'
                  : meta.color === 2
                  ? '#ff6f9f'
                  : meta.color === 3
                  ? '#FFFC44'
                  : meta.color === 4
                  ? '#30DD39'
                  : '#fff';

              return (
                <div
                  key={index}
                  onClick={() => abrirDetallesMeta(index, meta)}
                  className='ahorro-meta-card'
                  style={{ backgroundColor: colorMeta }}
                >
                  <div className='ahorro-meta-icono-contenedor'>
                    <img
                      className='ahorro-meta-icono'
                      src={
                        meta.icono === 1
                          ? '../../assets/Candy.png'
                          : meta.icono === 2
                          ? '../../assets/Flower.png'
                          : meta.icono === 3
                          ? '../../assets/Shoes.png'
                          : '../../assets/Golden retriever.png'
                      }
                      alt={meta.nombre}
                    />
                  </div>

                  <div className='ahorro-meta-info'>
                    <p className='ahorro-meta-nombre'>{meta.nombre}</p>
                    <p className='ahorro-meta-plazo'>{getTextoPlazo(meta.plazo)}</p>
                  </div>

                  <div className='ahorro-meta-barra-contenedor'>
                    <div className='ahorro-meta-barra-fondo'>
                      <div
                        className='ahorro-meta-barra-relleno'
                        style={{
                          width: `${porcentaje}%`,
                          backgroundColor: colorMeta
                        }}
                      ></div>
                    </div>
                    <p className='ahorro-meta-porcentaje'>{Math.round(porcentaje)}%</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className='ahorro-sin-metas'>
              <h2>No tienes metas creadas aún.</h2>
            </div>
          )}
        </div>

        <IonButton className='ahorro-boton-crear' onClick={irACrearMeta}>
          <p className='ahorro-boton-crear-texto'>+</p>
        </IonButton>
      </IonContent>

      {mostrarDetalles && metaSeleccionada && (
        <div className='ahorro-overlay-activo' onClick={cerrarDetalles}>
          <div className='ahorro-detalles-contenedor' onClick={(e) => e.stopPropagation()}>
            <div className='ahorro-detalles-header'>
              <button className='ahorro-detalles-cerrar-btn' onClick={cerrarDetalles}>✕</button>
              <h2 className='ahorro-detalles-titulo'>{metaSeleccionada.meta.nombre}</h2>
              <div style={{ width: '40px' }}></div>
            </div>

            <div className='ahorro-detalles-body'>
              <div className='ahorro-detalles-icono-grande'>
                <img
                  src={
                    metaSeleccionada.meta.icono === 1
                      ? '../../assets/Candy.png'
                      : metaSeleccionada.meta.icono === 2
                      ? '../../assets/Flower.png'
                      : metaSeleccionada.meta.icono === 3
                      ? '../../assets/Shoes.png'
                      : '../../assets/Golden retriever.png'
                  }
                  alt={metaSeleccionada.meta.nombre}
                />
              </div>

              <div className='ahorro-detalles-seccion'>
                <h3>Progreso</h3>
                <div className='ahorro-detalles-barra-contenedor'>
                  <div className='ahorro-detalles-barra-fondo'>
                    <div
                      className='ahorro-detalles-barra-relleno'
                      style={{
                        width: `${getPorcentajeProgreso(metaSeleccionada.meta)}%`
                      }}
                    ></div>
                  </div>
                  <p className='ahorro-detalles-porcentaje'>
                    {Math.round(getPorcentajeProgreso(metaSeleccionada.meta))}% Completado
                  </p>
                </div>
              </div>

              <div className='ahorro-detalles-seccion'>
                <h3>Dinero</h3>
                {(() => {
                  const detalles = calcularDetalles(metaSeleccionada.meta);
                  return (
                    <>
                      <div className='ahorro-detalles-dinero'>
                        <span className='ahorro-detalles-dinero-label'>Ahorrado:</span>
                        <span className='ahorro-detalles-dinero-valor'>${detalles.montoActual}</span>
                      </div>
                      <div className='ahorro-detalles-dinero'>
                        <span className='ahorro-detalles-dinero-label'>Te falta:</span>
                        <span className='ahorro-detalles-dinero-valor'>${detalles.montoFaltante}</span>
                      </div>
                      <div className='ahorro-detalles-dinero'>
                        <span className='ahorro-detalles-dinero-label'>Meta Total:</span>
                        <span className='ahorro-detalles-dinero-valor'>${metaSeleccionada.meta.dinero}</span>
                      </div>
                    </>
                  );
                })()}
              </div>

              {metaSeleccionada.meta.plazo !== 4 && (
                <div className='ahorro-detalles-seccion'>
                  <h3>Tiempo Restante</h3>
                  <p className='ahorro-detalles-plazo-texto'>
                    Te faltan aproximadamente{' '}
                    <strong>
                      {(() => {
                        const detalles = calcularDetalles(metaSeleccionada.meta);
                        const unidad = getUnidadTiempo(metaSeleccionada.meta.plazo);
                        return `${detalles.periodosRestantes} ${unidad}`;
                      })()}
                    </strong>
                  </p>
                </div>
              )}

              {metaSeleccionada.meta.plazo !== 4 && (
                <div className='ahorro-detalles-aporte-fijo'>
                  <h4>Aporte: ${metaSeleccionada.meta.aportePorPlazo} {getTextoPlazo(metaSeleccionada.meta.plazo).toLowerCase()}</h4>
                </div>
              )}
            </div>

            <div className='ahorro-detalles-footer'>
              {metaSeleccionada.meta.plazo === 4 && (
                <div className='ahorro-detalles-input-group'>
                  <label className='ahorro-detalles-input-label'>Cantidad a Aportar:</label>
                  <IonInput
                    type="number"
                    placeholder="Ingresa cantidad"
                    value={montoAporte}
                    onIonInput={(e: any) => setMontoAporte(e.target.value)}
                    className='ahorro-detalles-input'
                  />
                </div>
              )}

              <IonButton
                className='ahorro-detalles-btn ahorro-detalles-btn-aportar'
                disabled={loading}
                onClick={handleAporte}
              >
                {loading ? 'Procesando...' : metaSeleccionada.meta.plazo === 4 ? 'Agregar Aporte' : 'Registrar Aporte'}
              </IonButton>

              <IonButton
                className='ahorro-detalles-btn ahorro-detalles-btn-eliminar'
                disabled={loading}
                onClick={handleEliminarMeta}
              >
                {loading ? 'Eliminando...' : 'Eliminar Meta'}
              </IonButton>

              <IonButton
                className='ahorro-detalles-btn ahorro-detalles-btn-cerrar'
                onClick={cerrarDetalles}
              >
                Cerrar
              </IonButton>
            </div>
          </div>
        </div>
      )}

      <IonFooter>
        <IonToolbar>
          {usuario && usuario.capitulos && usuario.capitulos[0]?.completed ? (
            <>
              <IonButton className='btnMenu1' onClick={() => history.push('/mapa')}>
                <img src="../../assets/home.png" alt="Inicio" />
              </IonButton>
              <IonButton className='btnMenu1' onClick={() => history.push('/info-extra')}>
                <img src="../../assets/info.png" alt="Información" />
              </IonButton>
              <IonButton className='btnMenu1' onClick={() => history.push('/ahorro')}>
                <img src="../../assets/ahorro.png" alt="Ahorro" />
              </IonButton>
              <IonButton className='btnMenu1' onClick={() => history.push('/inversion')}>
                <img src="../../assets/invest.png" alt="Inversión" />
              </IonButton>
              <IonButton className='btnMenu1' onClick={() => history.push('/perfil')}>
                <img src="../../assets/perfil.png" alt="Perfil" />
              </IonButton>
            </>
          ) : (
            <>
              <IonButton className='btnMenu' onClick={() => history.push('/mapa')}>
                <img src="../../assets/home.png" alt="Inicio" />
              </IonButton>
              <IonButton className='btnMenu' onClick={() => history.push('/info-extra')}>
                <img src="../../assets/info.png" alt="Información" />
              </IonButton>
              <IonButton className='btnMenu' onClick={() => history.push('/perfil')}>
                <img src="../../assets/perfil.png" alt="Perfil" />
              </IonButton>
            </>
          )}
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Ahorro;


