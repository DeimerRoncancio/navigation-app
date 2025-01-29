import { Slot } from 'expo-router';
import './global.css';
import { Platform, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';

const isAndroid = Platform.OS === 'android';
if (isAndroid) NavigationBar.setBackgroundColorAsync('transparent');

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
      <StatusBar style="dark" />
    </GestureHandlerRootView>
  );
}
