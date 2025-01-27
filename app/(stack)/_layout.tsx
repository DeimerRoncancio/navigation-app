import { Stack } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function StackLayout() {
  return (
    <View className='flex-1'>
      <Stack screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
          padding: 20
        },
      }}>
        <Stack.Screen name="home/index" options={{
          title: "Inicio",
        }}/>
        <Stack.Screen name="products/index" options={{
          title: "Productos",
        }}/>
        <Stack.Screen name="profile/index" options={{
          title: "Perfil"
        }}/>
        <Stack.Screen name="settings/index" options={{
          title: "Ajustes"
        }}/>
      </Stack>
      <StatusBar style="dark" />
    </View>
  )
}
