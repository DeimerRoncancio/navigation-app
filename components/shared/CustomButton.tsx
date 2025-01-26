import React from "react";
import { Pressable, PressableProps, Text, View } from "react-native";

interface Props extends PressableProps {
  children: string;
  onPress?: () => void;
  color?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'read_only' | 'contained';
}

const CustomButton = React.forwardRef(({ children, color = "primary", onPress, variant = "contained" }: Props, ref: React.Ref<View>) => {
  const btnColor = {
    primary: 'bg-violet-800',
    secondary: 'bg-orange-600',
    tertiary: 'bg-green-600'
  }[color];

  const textColor = {
    primary: 'text-violet-800',
    secondary: 'text-orange-600',
    tertiary: 'text-green-600'
  }[color];

  if (variant == "read_only") {
    return (
      <Pressable className={`active:opacity-85`}
        onPress={onPress}
        ref={ref}
      >
        <Text className={`text-xl text-white text-center ${textColor}`}>{children}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable className={`p-3 btnColor rounded-md active:opacity-85 ${btnColor}`}
      onPress={onPress}
      ref={ref}
    >
      <Text className="text-xl text-white text-center">{children}</Text>
    </Pressable>
  );
});

export default CustomButton;
