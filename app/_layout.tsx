import { Slot } from 'expo-router';
import './global.css';
import { Platform, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import * as NavigationBar from 'expo-navigation-bar';

const isAndroid = Platform.OS === 'android';
if (isAndroid) NavigationBar.setBackgroundColorAsync('#60a5fa');

export default function RootLayout() {
  return (
    <View className='bg-blue-400 flex-1'>
      <View className='mt-7 p-10'>
        <Slot />
      </View>
      <StatusBar style="dark" />
    </View>
  )
}
