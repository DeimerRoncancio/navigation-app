import { Slot } from 'expo-router';
import './global.css';
import { Platform } from 'react-native';

import * as NavigationBar from 'expo-navigation-bar';

const isAndroid = Platform.OS === 'android';
if (isAndroid) NavigationBar.setBackgroundColorAsync('transparent');

export default function RootLayout() {
  return (
  <Slot />
);
}
