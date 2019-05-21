import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';

Navigation.registerComponent("exploring.AuthScreen", () => AuthScreen );
Navigation.registerComponent("exploring.SharePlaceScreen", () => SharePlaceScreen );
Navigation.registerComponent("exploring.FindPlaceScreen", () => FindPlaceScreen );

Navigation.startSingleScreenApp({
  screen: {
    screen: "exploring.AuthScreen",
    title: "Login"
  }
});
