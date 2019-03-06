import { Navigation } from 'react-native-navigation';
import News from './components/News';
import Personal from './components/Personal';
import Video from './components/Video';
import InitScreen from './InitScreen';

export function registerScreens() {
  Navigation.registerComponent('InitScreen', () => InitScreen);
  Navigation.registerComponent('News', () => News);
  Navigation.registerComponent('Personal', () => Personal);
  Navigation.registerComponent('Video', () => Video);
}
