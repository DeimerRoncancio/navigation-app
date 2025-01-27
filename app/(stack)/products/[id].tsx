import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ProductScreen() {
  const { id } = useLocalSearchParams();

  const product = products.find(p => p.id == id);

  if (!product) return <Redirect href="/" />

  return (
    <View>
      <Text className="text-2xl font-medium">{product.title}</Text>
      <Text className="text-lg font-normal mt-5">{product.description}</Text>
      <Text className="text-violet-700 text-2xl mt-5 ">$ {product.price}</Text>
    </View>
  )
}