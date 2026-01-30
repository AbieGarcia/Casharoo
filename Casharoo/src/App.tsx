import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */

/* Theme variables */
import './theme/variables.css';
import Crear_Meta from './pages/ahorro/Crear_Meta';
import Ahorro from './pages/ahorro/Ahorro';
import Inicio from './pages/Inicio';
import Registro from './pages/user/Registro';
import Cap1 from './pages/capitulos/Ahorro_cap1/Cap1';
import Juego1 from './pages/capitulos/Ahorro_cap1/Juego1';
import Login from './pages/user/Login';
import Info_Extra_Ahorro from './pages/capitulos/Ahorro_cap1/Info_Extra_Ahorro';
import Info_Extra_Bancos from './pages/capitulos/Bancos_cap2/Info_Extra_Bancos';
import Info_Extra_Inversiones from './pages/capitulos/Inversiones_cap3/Info_Extra_Inversiones';
import Info_Extra_FVerdes from './pages/capitulos/FVerdes_cap4/Info_Extra_FVerdes';
import Info_Extra_Debito from './pages/capitulos/Debito_cap5/Info_Extra_Debito';
import Info_Extra_Credito from './pages/capitulos/Credito_cap6/Info_Extra_Credito';
import Info_Extra_Impuestos from './pages/capitulos/Impuestos_cap7/Info_Extra_Impuestos';
import Info_Extra_Pension from './pages/capitulos/Retiro_cap8/Info_Extra_Pension';
import Info_Intro_Ahorro from './pages/capitulos/Ahorro_cap1/Info_Intro_Ahorro';
import Perfil from './pages/user/Perfil';
import Mapa from './pages/Mapa';
import Juego2 from './pages/capitulos/Bancos_cap2/Juego2';
import Cap2 from './pages/capitulos/Bancos_cap2/Cap2';
import Cap3 from './pages/capitulos/Inversiones_cap3/Cap3';
import Juego3 from './pages/capitulos/Inversiones_cap3/Juego3';
import Cap4 from './pages/capitulos/FVerdes_cap4/Cap4';
import Juego4 from './pages/capitulos/FVerdes_cap4/Juego4';
import Cap6 from './pages/capitulos/Credito_cap6/Cap6';
import Cap7 from './pages/capitulos/Impuestos_cap7/Cap7';
import Cap8 from './pages/capitulos/Retiro_cap8/Cap8';

import Juego7 from './pages/capitulos/Impuestos_cap7/Juego7';

import Juego6 from './pages/capitulos/Credito_cap6/Juego6';
import Juego5 from './pages/capitulos/Debito_cap5/Juego5';
import Cap5 from './pages/capitulos/Debito_cap5/Cap5';
import Info_Extra from './pages/infoExtra/Info_Extra';
import Inversion from './pages/inversion/Inversion';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/inicio">
          <Inicio />
        </Route>
        <Route exact path="/registro">
          <Registro />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/perfil">
          <Perfil />
        </Route>
        <Route exact path="/mapa">
          <Mapa />
        </Route>
        <Route exact path="/inversion">
          <Inversion />
        </Route>
        <Route exact path="/ahorro">
          <Ahorro />
        </Route>
        <Route exact path="/crear-meta">
          <Crear_Meta />
        </Route>
        <Route exact path="/cap1">
          <Cap1 />
        </Route>
        <Route exact path="/juego1">
          <Juego1 />
        </Route>
        <Route exact path="/info-extra">
          <Info_Extra />
        </Route>
        <Route exact path="/info-extra/ahorro">
          <Info_Extra_Ahorro />
        </Route>
        <Route exact path="/info-extra/bancos">
          <Info_Extra_Bancos />
        </Route>
        <Route exact path="/info-extra/inversiones">
          <Info_Extra_Inversiones />
        </Route>
        <Route exact path="/info-extra/fverdes">
          <Info_Extra_FVerdes />
        </Route>
        <Route exact path="/info-extra/debito">
          <Info_Extra_Debito />
        </Route>
        <Route exact path="/info-extra/credito">
          <Info_Extra_Credito />
        </Route>
        <Route exact path="/info-extra/impuestos">
          <Info_Extra_Impuestos />
        </Route>
        <Route exact path="/info-extra/pension">
          <Info_Extra_Pension />
        </Route>
        <Route exact path="/info-intro-ahorro">
          <Info_Intro_Ahorro />
        </Route>
        <Route exact path="/Juego2">
          <Juego2 />
        </Route>
        <Route exact path="/Cap2">
          <Cap2 />
        </Route>
        <Route exact path="/Cap3">
          <Cap3 />
        </Route>
        <Route exact path="/Juego3">
          <Juego3 />
        </Route>

        <Route exact path="/Juego7">
          <Juego7 />
        </Route>

        <Route exact path="/Cap4">
          <Cap4 />
        </Route>
        <Route exact path="/Juego4">
          <Juego4 />
        </Route>
        <Route exact path="/Cap6">
          <Cap6 />
        </Route>
        <Route exact path="/Cap7">
          <Cap7 />
        </Route>

        <Route exact path="/Cap8">
          <Cap8 />
        </Route>
        <Route exact path="/Juego6">
          <Juego6 />
        </Route>
        <Route exact path="/Cap5">
          <Cap5 />
        </Route>
        <Route exact path="/Juego6">
          <Juego6 />
        </Route>
        <Route exact path="/Juego5">
          <Juego5 />
        </Route>
      </IonRouterOutlet >
    </IonReactRouter >
  </IonApp >
);

export default App;
