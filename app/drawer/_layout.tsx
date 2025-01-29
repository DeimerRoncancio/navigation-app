import { Text } from "react-native";
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
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'User',
          title: 'overview',
          drawerIcon: ({ color, size }) =>
            <Ionicons name="person" size={size} color={color} />
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Schedule',
          title: 'overview',
          drawerIcon: ({ color, size }) =>
            <Ionicons name="calendar" size={size} color={color} />
        }}
      />
    </Drawer>
  );
}
