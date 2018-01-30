import { Navigation } from 'react-native-navigation';
import Home from './Home';
import Tours from './Tours';
import Food from './Food';
import Hotel from './Hotel';
import DetailView from './DetailView';
import HotelView from './HotelView';
import FoodView from './FoodView';
import SlideshowView from './SlideshowView';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.Home', () => Home);
  Navigation.registerComponent('example.Food', () => Food);
  Navigation.registerComponent('example.Hotel', () => Hotel);
  Navigation.registerComponent('example.Tours', () => Tours);
  Navigation.registerComponent('example.DetailView', () => DetailView);
  Navigation.registerComponent('example.HotelView', () => HotelView);
  Navigation.registerComponent('example.FoodView', () => FoodView);
  Navigation.registerComponent('example.SlideshowView', () => SlideshowView);
}