import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail'
import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponent("locator.AuthScreen", () => AuthScreen, store, Provider );
Navigation.registerComponent("locator.SharePlaceScreen", () => SharePlaceScreen, store, Provider );
Navigation.registerComponent("locator.FindPlaceScreen", () => FindPlaceScreen, store, Provider );
Navigation.registerComponent("locator.PlaceDetailScreen", () => PlaceDetailScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: "locator.AuthScreen",
    title: "Login"
  }
});
