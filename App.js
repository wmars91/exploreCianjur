import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'example.FirstTabScreen', // this is a registered name for a screen
      icon: require('./img/Home.png'),
      title: 'Explore Cianjur'
    },
    {
      label: 'Inbox',
      screen: 'example.SecondTabScreen',
      icon: require('./img/Inbox.png'),
      title: 'Inbox'
    }
  ]
});