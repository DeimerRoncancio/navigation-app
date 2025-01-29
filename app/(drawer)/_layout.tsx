import { Drawer } from 'expo-router/drawer';
import { Ionicons } from "@expo/vector-icons";
import CustomDrawer from "@/components/shared/CustomDrawer";

export default function DrawerLayout() {
  return (
    <Drawer drawerContent={CustomDrawer} screenOptions={{
      drawerActiveTintColor: "indigo",
      headerShadowVisible: false,
      sceneStyle: {
        backgroundColor: "white"
      }
    }}>
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: 'User',
          title: 'User',
          drawerIcon: ({ color, size }) =>
            <Ionicons name="person" size={size} color={color} />
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: 'Schedule',
          title: 'Calendario',
          drawerIcon: ({ color, size }) =>
            <Ionicons name="calendar" size={size} color={color} />
        }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Tabs',
          headerShown: false,
          title: 'Tabs',
          drawerIcon: ({ color, size }) =>
            <Ionicons name="albums" size={size} color={color} />
        }}
      />
    </Drawer>
  );
}
