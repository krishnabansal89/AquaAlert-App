// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from "@expo/vector-icons/Ionicons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";
import { Image, Text, View } from "react-native";
const TabIcon = ({
  icon,
  color,
  name,
  focused,
  main,
}: {
  icon: string;
  color: string;
  name: string;
  focused: boolean;
  main: boolean;
}) => {
  return (
    <View className="flex items-center justify-center">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={`${main? null : color}`}
        className={` ${main ? "w-6 h-6 p-16 -mt-24" : "w-6 h-6"}`}
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};
export default TabIcon;
