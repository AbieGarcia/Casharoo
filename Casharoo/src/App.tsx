import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

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
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Inicio2 from './pages/Inicio2';
import Crear_Meta from './pages/Crear_Meta';
import Ahorro from './pages/Ahorro';
import MenuInicial from './pages/MenuInicial';
import Registro from './pages/Registro';
import Info_Extra_Ahorro from './pages/Info_Extra_Ahorro';
import Info_Intro_Ahorro from './pages/Info_Intro_Ahorro';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/oli">
          <Home />
        </Route>
        <Route exact path="/menu">
          <MenuInicial />
        </Route>
        <Route exact path="/registro">
          <Registro />
        </Route>
        <Route exact path="/">
          <Redirect to="/oli" />
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
        <Route exact path="/info-extra-ahorro">
          <Info_Extra_Ahorro />
        </Route>
        <Route exact path="/info-intro-ahorro">
          <Info_Intro_Ahorro />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
