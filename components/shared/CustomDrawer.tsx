import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Text, View } from "react-native";

export default function CustomDrawer(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <View className="flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-blue-600">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
          <Text className="font-medium text-blue-600 text-3xl">DR</Text>
        </View>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}
