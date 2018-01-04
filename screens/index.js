import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import Tours from './Tours';
import Food from './Food';
import Hotel from './Hotel';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('example.Food', () => Food);
  Navigation.registerComponent('example.Hotel', () => Hotel);
  Navigation.registerComponent('example.Tours', () => Tours);
}