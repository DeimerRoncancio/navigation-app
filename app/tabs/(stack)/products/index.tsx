import { products } from "@/store/products.store";
import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";

export default function ProductsScreen() {
  return (
    <View>
        <FlatList data={products} renderItem={({item}) => (
          <View className="mb-6 px-7">
            <Text className="text-2xl font-medium">{item.title}</Text>
            <Text className="text-violet-700">$ {item.price}</Text>
            <Text className="text-sm mt-1 mb-2">{item.description}</Text>
            <Link href={`/tabs/(stack)/products/${item.id}`}>
              <Text className="text-violet-950">Ver detalles</Text>
            </Link>
          </View>
        )} />
    </View>
  );
};
