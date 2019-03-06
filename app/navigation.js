import { Navigation } from 'react-native-navigation';
import mainTabs from './components/AppNavigator/mainTabs';

const startApp = () => Navigation.setRoot({
  root: {
    sideMenu: {
      center: {
        bottomTabs: mainTabs,
      },
    },
  },
});

export default startApp;
