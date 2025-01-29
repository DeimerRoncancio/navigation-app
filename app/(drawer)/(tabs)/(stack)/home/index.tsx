import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";
import { View } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();
  
    const onToggleDrawer = () => {
      navigation.dispatch( DrawerActions.toggleDrawer )
    }
  
  return (
    <View className="p-7">
      <View className="gap-4">
        <CustomButton onPress={() => router.push("/products")}>Productos</CustomButton>
        <CustomButton color="secondary" onPress={() => router.push("/profile")}>Perfil</CustomButton>
        <CustomButton color="tertiary" onPress={() => router.push("/settings")}>Ajustes</CustomButton>
        <CustomButton onPress={onToggleDrawer}>Abri menu</CustomButton>
      </View>
    </View>
  )
}
