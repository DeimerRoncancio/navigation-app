import { Slot } from 'expo-router';
import './global.css';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
      <Slot />
  )
}
