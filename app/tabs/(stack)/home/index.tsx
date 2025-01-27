import CustomButton from "@/components/shared/CustomButton";
import { router } from "expo-router";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="p-7">
      <View className="gap-4">
        <CustomButton onPress={() => router.push("/tabs/(stack)/products")}>Productos</CustomButton>
        <CustomButton color="secondary" onPress={() => router.push("/tabs/(stack)/profile")}>Perfil</CustomButton>
        <CustomButton color="tertiary" onPress={() => router.push("/tabs/(stack)/settings")}>Ajustes</CustomButton>
      </View>
    </View>
  )
}
