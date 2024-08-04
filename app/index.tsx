import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Redirect, router } from "expo-router";

const index = () => {
  return (
    <View className="bg-white">
      <Text>index</Text>
      <TouchableOpacity
        onPress={() => {
          router.push("/home");
        }}
        activeOpacity={0.8}
      >
        
        <Text className="text-xl mt-20">Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
