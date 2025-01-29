import { Stack, useNavigation } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";

export default function StackLayout() {
  const navigation = useNavigation();

  const onHeaderLeftClick = () => {
    navigation.dispatch( DrawerActions.toggleDrawer() );
  };

  return (
    <View className='flex-1'>
      <Stack screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        headerStyle: {
          backgroundColor: "#f6f6f6"
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons 
            name="grid-outline" 
            className='p-3' 
            size={25} 
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        ),
      }}>
        <Stack.Screen name="home/index" options={{
          title: "Inicio",
        }} />
        <Stack.Screen name="products/index" options={{
          title: "Productos",
        }} />
        <Stack.Screen name="profile/index" options={{
          title: "Perfil"
        }} />
        <Stack.Screen name="settings/index" options={{
          title: "Ajustes"
        }} />
      </Stack>
      <StatusBar style="dark" />
    </View>
  )
}
