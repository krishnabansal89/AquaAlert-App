import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Redirect, router } from "expo-router";

const index = () => {
  return (
    <View>
      <Text>index</Text>
      <TouchableOpacity
        onPress={() => {
          router.push("/signin");
        }}
        activeOpacity={0.8}
      >
        
        <Text className="text-xl ">Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
