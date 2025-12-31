import { IonContent, IonHeader, IonPage, IonButton, IonFooter, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Info_Extra_Ahorro.css';

import { useHistory } from 'react-router-dom';


const Info_Extra_Ahorro: React.FC = () => {
  const history = useHistory();

  const [showTip, setShowTip] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap" rel="stylesheet"></link>
      </IonHeader>
      <IonContent>
        <body className='bodyExtra_rosa'>

          <header className='headerExtra'>
            <IonButton className='regresar-info-ahorro' onClick={() => history.goBack()}>
              <img src="..\..\assets\Arrow 1.png"></img>
            </IonButton>
            <p className='text-cap1-extra'>Cap 1. Ahorro</p>
          </header>



          <div className='Erect1'>
            <p>El ahorro es un hábito esencial que te acompañará toda tu vida.</p>
            <img className='imgCap' src="..\..\assets\Piggy bank.png"></img>
          </div>



          <div className='rect2'>
            <img className='imgCap' src="..\..\assets\Jar.png"></img>
            <p>Es recomendable empezar este hábito desde joven para que en un futuro ya lo tengas integrado a tu día a día.</p>
          </div>



          <div className='title'>
            <p>Conceptos importantes</p>
          </div>
          <div className='rect3'>
            <div className='liItem'>
              <img className='check' src='..\..\assets\checkmark.png'></img>
              <p>Meta</p>
            </div>
            <div className='liItem'>
              <img className='check' src='..\..\assets\checkmark.png'></img>
              <p>Ingresos</p>
            </div>
            <div className='liItem'>
              <img className='check' src='..\..\assets\checkmark.png'></img>
              <p>Egresos</p>
            </div>
            <div className='liItem'>
              <img className='check' src='..\..\assets\checkmark.png'></img>
              <p>Lapsos</p>
            </div>
          </div>



          <div className='title'>
            <p>Tipos de metas</p>
          </div>
          <div className='Erect4'>
            <p>Pueden ser de corto (menos de un año), mediano(entre 1 a 5 años) o largo plazo (más de 5 años)</p>
            <img className='imgCap' src='..\..\assets\meta.png'></img>
          </div>
          <ul>
            <li>Lo más probable es que empieces solo con metas de corto plazo, para poder comprar cosas que necesitas o quieres para divertirte o tener dinero para salir con tus amigos.
            </li>
            <li>Usualmente las metas de mediano y largo plazo se usan para poder conseguir cosas más ambiciosas como un carro, una casa o planear nuestro retiro. </li>
          </ul>



          <div className='title'>
            <p>¿Cómo organizar mis metas?</p>
          </div>
          <p id='txt'>Es muy útil registrar tus ingresos, egresos y dinero a guardar para poder cumplir una meta de ahorro cada cierto tiempo dependiendo tu plazo (diario, semanal, mensual). Te recomendamos usar esta tabla:</p>
          <p id='txtEjemplo' >Ejemplo:</p>
          <tr><th>Ingreso de esta semana: $100</th></tr>
          <table>
            <tr>
              <th>Gastos</th>
              <th>¿Cuánto dinero tengo para gastar en esto?</th>
            </tr>
            <tr>
              <td>Lunch</td>
              <td>$25</td>
            </tr>
            <tr>
              <td>Material escolar</td>
              <td>$25</td>
            </tr>
            <tr>
              <td>Alcancía</td>
              <td>$20</td>
            </tr>
            <tr>
              <td>Meta de ahorro: monopatín</td>
              <td>$30</td>
            </tr>
          </table>


          <div className="piggy-tip-container">
            <button className="piggy-tip-header" onClick={() => setShowTip(!showTip)}>
              <span className="piggy-icon">🐷</span>
              <span className="piggy-title">Piggy Tip</span>
              <span className={`arrow ${showTip ? 'open' : ''}`}>⌄</span>
            </button>

            {showTip && (
              <div className="piggy-tip-card">
                <p className="piggy-question">¿Sabías que…?</p>
                <p>
                  Muchos expertos recomiendan la <strong>regla 50/30/20</strong> para organizar el dinero:
                </p>
                <ul>
                  <li><strong>50%</strong> para necesidades básicas</li>
                  <li><strong>30%</strong> para gustos</li>
                  <li><strong>20%</strong> para ahorro o imprevistos</li>
                </ul>
              </div>
            )}
          </div>


        </body>
      </IonContent>
    </IonPage >
  );
};

export default Info_Extra_Ahorro;


