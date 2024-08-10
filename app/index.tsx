import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect , useState } from "react";
import { Redirect, router } from "expo-router";

const index = () => {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    // if(redirect==false) router.push("/login");
    setRedirect(true);
  }, [redirect]);
  return (
    <View className="bg-white">
      <Text>index</Text>
      <TouchableOpacity
        onPress={() => {
          router.push("/login");
        }}
        activeOpacity={0.8}
      >
        <Redirect href={"/login"} />
        <Text className="text-xl mt-20">Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
