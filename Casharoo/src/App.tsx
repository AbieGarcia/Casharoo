import { Redirect, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
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
import Inicio2 from './pages/Inicio2';
import Crear_Meta from './pages/Crear_Meta';
import Ahorro from './pages/Ahorro';
import MenuInicial from './pages/MenuInicial';
import Registro from './pages/Registro';
import Cap1 from './pages/Cap1';
import Juego1 from './pages/Juego1';
import Login from './pages/Login';
import Info_Extra_Ahorro from './pages/Info_Extra_Ahorro';
import Info_Intro_Ahorro from './pages/Info_Intro_Ahorro';
import Info from './pages/Info';
import Perfil from './pages/Perfil';
import Mapa from './pages/Mapa';
import Juego2 from './pages/Juego2';
import Cap2 from './pages/Cap2';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/menu">
          <MenuInicial />
        </Route>
        <Route exact path="/registro">
          <Registro />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/info">
          <Info />
        </Route>
        <Route exact path="/perfil">
          <Perfil />
        </Route>
        <Route exact path="/mapa">
          <Mapa />
        </Route>
        <Route exact path="/">
          <Redirect to="/menu" />
        </Route>
        <Route exact path="/inicio2">
          <Inicio2 />
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
        <Route exact path="/Juego1">
          <Juego1 />
        </Route>
        <Route exact path="/info-extra-ahorro">
          <Info_Extra_Ahorro />
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
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
