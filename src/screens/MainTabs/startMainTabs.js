import { Navigation } from 'react-native-navigation';

const startTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: "exploring.FindPlaceScreen",
        label: "Find Place",
        title: "Find Place"
      },
      {
        screen: "exploring.SharePlaceScreen",
        label: "Share Place",
        title: "Share Place"
      }
    ]
  });
};

export default startTabs;
