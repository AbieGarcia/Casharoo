import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { IonPage, IonContent, IonFooter, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import {
  obtenerUsuario,
  crearInversion,
  obtenerInversionActiva,
  verificarYActualizarInversion,
  obtenerUltimaInversionCompletada,
  marcarInversionComoVista
} from '../../services/userRegister';
import './Inversion.css';

interface Plan {
  id: string;
  nombre: string;
  riesgo: number;
  tasa: number;
  color: string;
  descripcion: string;
}

interface HistorialAño {
  año: number;
  capital: number;
  exito: boolean | null;
  fecha?: any;
}

interface InversionData {
  id?: string;
  plan: Plan;
  capitalInicial: number;
  capitalActual: number;
  añosTotales: number;
  añosCompletados: number;
  historial: HistorialAño[];
  fechaInicio?: any;
  ultimaEvaluacion?: any;
  proximaEvaluacion?: any;
  estado?: string;
}

const Inversion: React.FC = () => {
  const history = useHistory();
  const [usuario, setUsuario] = useState<any>(null);
  const [inversion, setInversion] = useState<InversionData | null>(null);
  const [inversionCompletada, setInversionCompletada] = useState<InversionData | null>(null);
  const [planSeleccionado, setPlanSeleccionado] = useState<Plan | null>(null);
  const [capital, setCapital] = useState<string>('');
  const [años, setAños] = useState<number>(5);
  const [tiempoRestante, setTiempoRestante] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [mostrarModalCompletada, setMostrarModalCompletada] = useState(false);

  const planes: Plan[] = [
    {
      id: 'firme',
      nombre: 'Banco Firme',
      riesgo: 5,
      tasa: 5,
      color: '#3B82F6',
      descripcion: 'Bajo Riesgo',
    },
    {
      id: 'horizonte',
      nombre: 'Banco Horizonte',
      riesgo: 20,
      tasa: 7,
      color: '#FCD34D',
      descripcion: 'Riesgo Medio',
    },
    {
      id: 'volcan',
      nombre: 'Banco Volcán',
      riesgo: 40,
      tasa: 11,
      color: '#EF4444',
      descripcion: 'Alto Riesgo',
    }
  ];

  useEffect(() => {
    cargarDatos();
  }, []);

  useEffect(() => {
    if (inversion && inversion.estado === 'activa') {
      actualizarTiempoRestante();
      const interval = setInterval(actualizarTiempoRestante, 1000);
      return () => clearInterval(interval);
    }
  }, [inversion]);

  useEffect(() => {
    if (inversion && inversion.estado === 'activa') {
      const interval = setInterval(() => {
        console.log('Verificando actualización automática...');
        cargarDatos();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [inversion]);

  const cargarDatos = async () => {
    try {
      setLoading(true);
      const usuarioId = localStorage.getItem("usuarioId");

      if (!usuarioId) {
        history.replace('/login');
        return;
      }

      const datosUsuario = await obtenerUsuario(usuarioId);
      setUsuario(datosUsuario);

      const inversionActualizada = await verificarYActualizarInversion(usuarioId);

      if (inversionActualizada) {
        const inversionProcesada = procesarInversion(inversionActualizada);
        setInversion(inversionProcesada);

        if (inversionActualizada.completada) {
          setInversionCompletada(inversionProcesada);
          setMostrarModalCompletada(true);
        }
      } else {
        const ultimaCompletada = await obtenerUltimaInversionCompletada(usuarioId);
        if (ultimaCompletada && !ultimaCompletada.vista) {
          const inversionProcesada = procesarInversion(ultimaCompletada);
          setInversionCompletada(inversionProcesada);
          setMostrarModalCompletada(true);
        }
      }
    } catch (err) {
      console.error('Error al cargar datos:', err);
      setError('Error al cargar datos');
    } finally {
      setLoading(false);
    }
  };

  const procesarInversion = (inv: any): InversionData => {
    return {
      ...inv,
      historial: inv.historial.map((h: any) => ({
        año: h.año,
        capital: h.capital,
        exito: h.exito,
        fecha: h.fecha
      }))
    };
  };

  const actualizarTiempoRestante = () => {
    if (!inversion || !inversion.proximaEvaluacion) return;

    const ahora = new Date();
    const proxima = inversion.proximaEvaluacion.toDate ? inversion.proximaEvaluacion.toDate() : new Date(inversion.proximaEvaluacion);
    const diferencia = proxima.getTime() - ahora.getTime();

    if (diferencia <= 0) {
      setTiempoRestante('Actualizando...');
      cargarDatos();
      return;
    }

    const segundos = Math.floor(diferencia / 1000);
    const minutos = Math.floor(segundos / 60);
    const segsRestantes = segundos % 60;

    setTiempoRestante(`${minutos}m ${segsRestantes}s`);
  };

  const handleComenzarInversion = async () => {
    if (!planSeleccionado || !capital || !años) {
      setError('Por favor completa todos los campos');
      return;
    }

    const capitalNum = parseFloat(capital);

    if (capitalNum <= 0) {
      setError('El capital debe ser mayor a 0');
      return;
    }

    if (capitalNum > (usuario.dinero || 0)) {
      setError('No tienes suficientes Piggy Pesos');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const usuarioId = localStorage.getItem("usuarioId");
      const resultado = await crearInversion(usuarioId!, planSeleccionado, capitalNum, años);

      if (resultado.success) {
        await cargarDatos();
        setPlanSeleccionado(null);
        setCapital('');
        setAños(5);
      } else {
        setError(resultado.error || 'Error al crear inversión');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Error al crear inversión');
    } finally {
      setLoading(false);
    }
  };

  const handleCerrarModalCompletada = async () => {
    setMostrarModalCompletada(false);

    if (inversionCompletada && inversionCompletada.id) {
      await marcarInversionComoVista(inversionCompletada.id);
    }

    setInversionCompletada(null);
    setInversion(null);

    const usuarioId = localStorage.getItem("usuarioId");
    const datosUsuario = await obtenerUsuario(usuarioId);
    setUsuario(datosUsuario);
  };

  if (loading && !inversion) {
    return (
      <IonPage>
        <IonContent className="ion-padding">
          <h1>Cargando...</h1>
        </IonContent>
      </IonPage>
    );
  }

  const hayInversionActiva = inversion && inversion.estado === 'activa';
  const porcentajeCompletado = inversion ? (inversion.añosCompletados / inversion.añosTotales) * 100 : 0;
  const ganancia = inversion ? inversion.capitalActual - inversion.capitalInicial : 0;
  const porcentajeGanancia = inversion ? ((ganancia / inversion.capitalInicial) * 100).toFixed(1) : '0';

  return (
    <IonPage>
      <IonContent className="inversion-content">
        <div className="inversion-container">
          <div className="inversion-header">
            <h1 className="inversion-header-title">Simulador de Inversiones</h1>
          </div>
          {!hayInversionActiva && (
            <div className="inversion-sin-inversion-section">
              <h2 className="inversion-section-title">
                Selecciona tu Plan de Inversión
              </h2>

              {error && (
                <div style={{
                  padding: '15px',
                  background: '#FEE2E2',
                  border: '2px solid #EF4444',
                  borderRadius: '10px',
                  color: '#B91C1C',
                  marginBottom: '20px',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}>
                  {error}
                </div>
              )}

              <div className="inversion-planes-grid">
                {planes.map(plan => (
                  <div
                    key={plan.id}
                    onClick={() => setPlanSeleccionado(plan)}
                    className={`inversion-plan-card ${planSeleccionado?.id === plan.id
                      ? ''
                      : 'inversion-plan-card-inactive'
                      }`}
                    style={{
                      ...(planSeleccionado?.id === plan.id && {
                        border: `3px solid ${plan.color}`,
                        background: `${plan.color}15`,
                        boxShadow: `0 4px 12px ${plan.color}40`
                      })
                    }}
                  >
                    <div className="inversion-plan-card-header">
                      <div className="inversion-plan-card-header-content">
                        <div>
                          <h3
                            className="inversion-plan-card-title"
                            style={{ color: plan.color }}
                          >
                            {plan.nombre}
                          </h3>
                          <p className="inversion-plan-card-description">{plan.descripcion}</p>
                        </div>
                      </div>
                    </div>

                    <div className="inversion-plan-card-stats">
                      <div>
                        <div className="inversion-plan-card-stat-label">Probabilidad de Fracaso</div>
                        <div
                          className="inversion-plan-card-stat-value"
                          style={{ color: plan.color }}
                        >
                          {plan.riesgo}%
                        </div>
                      </div>
                      <div>
                        <div className="inversion-plan-card-stat-label">Tasa de Interés</div>
                        <div
                          className="inversion-plan-card-stat-value"
                          style={{ color: plan.color }}
                        >
                          {plan.tasa}%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {planSeleccionado && (
                <div className="inversion-config-form">
                  <h3 className="inversion-config-form-title">
                    Configura tu Inversión
                  </h3>

                  <div className="inversion-config-form-field">
                    <label className="inversion-config-form-label">
                      Capital a Invertir (Piggy Pesos)
                    </label>
                    <input
                      type="number"
                      value={capital}
                      onChange={(e) => setCapital(e.target.value)}
                      placeholder="Ej: 1000"
                      className="inversion-config-form-input"
                    />
                    <p className="inversion-config-form-hint">
                      Disponible: {usuario?.dinero || 0} PP
                    </p>
                    <p className="inversion-config-form-warning">
                      Esta cantidad se restará de tu cuenta al comenzar
                    </p>
                  </div>

                  <div className="inversion-config-form-duration-field">
                    <label className="inversion-config-form-label">
                      Duración (Años)
                    </label>
                    <div className="inversion-years-spinner">
                      <button
                        className="inversion-spinner-button"
                        onClick={() => setAños(Math.max(1, años - 1))}
                        style={{ borderColor: planSeleccionado.color }}
                      >
                        ▼
                      </button>
                      <div
                        className="inversion-years-display"
                        style={{
                          color: planSeleccionado.color,
                          borderColor: planSeleccionado.color
                        }}
                      >
                        {años}
                      </div>
                      <button
                        className="inversion-spinner-button"
                        onClick={() => setAños(Math.min(15, años + 1))}
                        style={{ borderColor: planSeleccionado.color }}
                      >
                        ▲
                      </button>
                    </div>
                    <p className="inversion-config-form-hint">
                      Cada año = 2 horas
                    </p>
                  </div>

                  <button
                    className={`inversion-config-form-submit-button ${capital && años && !loading
                      ? 'inversion-config-form-submit-button-enabled'
                      : 'inversion-config-form-submit-button-disabled'
                      }`}
                    disabled={!capital || !años || loading}
                    onClick={handleComenzarInversion}
                  >
                    {loading ? 'Creando...' : 'Comenzar Inversión'}
                  </button>
                </div>
              )}
            </div>
          )}

          {hayInversionActiva && inversion && (
            <div className="inversion-activa-section">
              <div
                className="inversion-activa-header"
                style={{
                  background: `linear-gradient(135deg, ${inversion.plan.color}20 0%, ${inversion.plan.color}10 100%)`,
                  border: `2px solid ${inversion.plan.color}`
                }}
              >
                <div className="inversion-activa-header-info">
                  <div>
                    <h2
                      className="inversion-activa-header-title"
                      style={{ color: inversion.plan.color }}
                    >
                      {inversion.plan.nombre}
                    </h2>
                    <p className="inversion-activa-header-subtitle">
                      Riesgo: {inversion.plan.riesgo}% | Tasa: {inversion.plan.tasa}%
                    </p>
                  </div>
                </div>

                <div className="inversion-capital-actual-card">
                  <div className="inversion-capital-actual-label">Capital Actual</div>
                  <div
                    className="inversion-capital-actual-amount"
                    style={{ color: inversion.plan.color }}
                  >
                    {inversion.capitalActual} PP
                  </div>
                  <div className={`inversion-capital-actual-ganancia ${ganancia >= 0
                    ? 'inversion-capital-actual-ganancia-positiva'
                    : 'inversion-capital-actual-ganancia-negativa'
                    }`}>
                    {ganancia >= 0 ? '+' : ''}{ganancia} PP ({porcentajeGanancia}%)
                  </div>
                </div>

                <div className="inversion-progreso-container">
                  <div className="inversion-progreso-header">
                    <span className="inversion-progreso-label">
                      Año {inversion.añosCompletados} de {inversion.añosTotales}
                    </span>
                    <span
                      className="inversion-progreso-percentage"
                      style={{ color: inversion.plan.color }}
                    >
                      {Math.round(porcentajeCompletado)}%
                    </span>
                  </div>
                  <div className="inversion-progreso-bar-container">
                    <div
                      className="inversion-progreso-bar-fill"
                      style={{
                        width: `${porcentajeCompletado}%`,
                        background: `linear-gradient(90deg, ${inversion.plan.color} 0%, ${inversion.plan.color}CC 100%)`
                      }}
                    />
                  </div>
                </div>

                <div className="inversion-tiempo-restante-card">
                  <div className="inversion-tiempo-restante-label">
                    Próximo año en:
                  </div>
                  <div
                    className="inversion-tiempo-restante-value"
                    style={{ color: inversion.plan.color }}
                  >
                    {tiempoRestante || 'Calculando...'}
                  </div>
                </div>
              </div>

              <div className="inversion-grafica-card">
                <h3 className="inversion-grafica-title">
                  Crecimiento del Capital
                </h3>

                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={inversion.historial}>
                    <XAxis
                      dataKey="año"
                      tick={(props: any) => {
                        const { x, y, payload } = props;
                        const año = inversion.historial[payload.value];
                        const completado = payload.value <= inversion.añosCompletados;
                        const color = !completado ? '#94A3B8' :
                          año?.exito === null ? '#6B7280' :
                            año?.exito ? '#22C55E' : '#EF4444';

                        return (
                          <g transform={`translate(${x},${y})`}>
                            <text
                              x={0}
                              y={0}
                              dy={16}
                              textAnchor="middle"
                              fill={color}
                              fontSize={14}
                              fontWeight="bold"
                            >
                              {payload.value}
                            </text>
                            {completado && payload.value > 0 && (
                              <text
                                x={0}
                                y={20}
                                dy={16}
                                textAnchor="middle"
                                fill={color}
                                fontSize={16}
                              >
                                {año.exito ? '✓' : '✗'}
                              </text>
                            )}
                          </g>
                        );
                      }}
                    />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        background: '#FFFFFF',
                        border: `2px solid ${inversion.plan.color}`,
                        borderRadius: '8px',
                        padding: '10px'
                      }}
                      formatter={(value: any) => [`${value} PP`, 'Capital']}
                    />
                    <Line
                      type="monotone"
                      dataKey="capital"
                      stroke={inversion.plan.color}
                      strokeWidth={3}
                      dot={{ fill: inversion.plan.color, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="inversion-historial-card">
                <h3 className="inversion-historial-title">
                  Historial por Año
                </h3>

                {inversion.historial.slice(1).map((año, index) => {
                  const completado = año.año <= inversion.añosCompletados;
                  const itemClass = !completado
                    ? 'inversion-historial-item-pendiente'
                    : año.exito
                      ? 'inversion-historial-item-exito'
                      : 'inversion-historial-item-fracaso';

                  return (
                    <div
                      key={año.año}
                      className={`inversion-historial-item ${itemClass}`}
                    >
                      <div className="inversion-historial-item-header">
                        <div>
                          <span className="inversion-historial-item-year">
                            Año {año.año}
                          </span>
                          {completado && (
                            <span className="inversion-historial-item-icon">
                              {año.exito ? '✅' : '❌'}
                            </span>
                          )}
                        </div>
                        <div
                          className={`inversion-historial-item-capital ${!completado ? 'inversion-historial-item-capital-pendiente' : ''
                            }`}
                          style={{
                            ...(completado && { color: inversion.plan.color })
                          }}
                        >
                          {completado ? `${año.capital} PP` : 'Pendiente'}
                        </div>
                      </div>
                      {completado && (
                        <div className="inversion-historial-item-detail">
                          {año.exito
                            ? `Ganaste +${año.capital - inversion.historial[index].capital} PP`
                            : 'Sin cambios este año'}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {mostrarModalCompletada && inversionCompletada && (
          <div className="inversion-modal-overlay" onClick={handleCerrarModalCompletada}>
            <div className="inversion-modal-content" onClick={(e) => e.stopPropagation()}>
              <h1 className="inversion-modal-title">
                ¡Inversión Completada!
              </h1>

              <p className="inversion-modal-subtitle">
                Tu inversión ha finalizado exitosamente
              </p>

              <div className="inversion-modal-stats">
                <div className="inversion-modal-stat-row">
                  <span>Capital Inicial:</span>
                  <strong>{inversionCompletada.capitalInicial} PP</strong>
                </div>

                <div className="inversion-modal-stat-row">
                  <span>Capital Final:</span>
                  <strong>{inversionCompletada.capitalActual} PP</strong>
                </div>

                <div className="inversion-modal-ganancia-box">
                  <div className="inversion-modal-ganancia-label">
                    Ganancia Total:
                  </div>
                  <div className={`inversion-modal-ganancia-amount ${inversionCompletada.capitalActual >= inversionCompletada.capitalInicial
                    ? 'positiva'
                    : 'negativa'
                    }`}>
                    {inversionCompletada.capitalActual >= inversionCompletada.capitalInicial ? '+' : ''}
                    {inversionCompletada.capitalActual - inversionCompletada.capitalInicial} PP
                  </div>
                  <div className="inversion-modal-ganancia-percent">
                    ({(((inversionCompletada.capitalActual - inversionCompletada.capitalInicial) / inversionCompletada.capitalInicial) * 100).toFixed(1)}%)
                  </div>
                </div>
              </div>

              <div className="inversion-modal-added-box">
                Se han sumado <strong>{inversionCompletada.capitalActual} PP</strong> a tu cuenta
              </div>

              <button
                onClick={handleCerrarModalCompletada}
                className="inversion-modal-button"
              >
                Entendido
              </button>
            </div>
          </div>
        )}
      </IonContent>

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

export default Inversion;