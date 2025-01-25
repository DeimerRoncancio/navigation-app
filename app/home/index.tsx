import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="gap-4">
      <Link href="/products"><Text className="text-2xl">Products</Text></Link>
      <Link href="/profile"><Text className="text-2xl">Profile</Text></Link>
      <Link href="/settings"><Text className="text-2xl">Settings</Text></Link>
    </View>
  )
}
