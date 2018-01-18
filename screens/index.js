import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import Tours from './Tours';
import Food from './Food';
import Hotel from './Hotel';
import ToursView from './ToursView';
import HotelView from './HotelView';
import FoodView from './FoodView';
import SlideshowView from './SlideshowView';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('example.Food', () => Food);
  Navigation.registerComponent('example.Hotel', () => Hotel);
  Navigation.registerComponent('example.Tours', () => Tours);
  Navigation.registerComponent('example.ToursView', () => ToursView);
  Navigation.registerComponent('example.HotelView', () => HotelView);
  Navigation.registerComponent('example.FoodView', () => FoodView);
  Navigation.registerComponent('example.SlideshowView', () => SlideshowView);
}