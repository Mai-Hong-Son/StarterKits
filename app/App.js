/** @format */
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './route';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'InitScreen',
      },
    },
  });
});
