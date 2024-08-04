import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  SafeAreaView,
} from "react-native";
import NamedIcon from "@/components/NamedIcon";
import { outdoorImages } from "@/assets/images/ImageHandler";
import { router } from 'expo-router';

const Outdoor = () => {
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = (screenWidth * 0.9) / 2; // 90% of screen width divided by 2

  const outdoorItems = [
    { icon: outdoorImages.sprinkler, title: "Sprinklers" },
    { icon: outdoorImages.irrigation, title: "House irrigation" },
    { icon: outdoorImages.drip, title: "Drip irrigation" },
    { icon: outdoorImages.socker, title: "Socker Hose" },
    { icon: outdoorImages.irrigation_Wifi, title: "Irrigation Controller (WiFi)" },
    { icon: outdoorImages.irrigation_NonWifi, title: "Irrigation Controller (Non-WiFi)" },
    { icon: outdoorImages.manualPool, title: "Pool (Manual Fill)" },
    { icon: outdoorImages.autopool, title: "Pool (Auto Fill)" },
  ];

  const renderItem = ({ item }) => (
    <View style={{ width: itemWidth, padding: 5 }}>
      <NamedIcon
        icon={item.icon}
        title={item.title}
        selected={false}
      />
    </View>
  );

  const renderHeader = () => (
    <>
      <View className="text-[#001639] items-center mb-5">
        <Text className="text-[23.567px] text-[#001639] font-[600] font-[Lexend]">
          Home Profile
        </Text>
      </View>
      <View className="w-full mb-5">
        <Text className="text-[16px] font-[600] text-[#282860] font-[Lexend]">
          Outdoor
        </Text>
      </View>
    </>
  );

  const renderFooter = () => (
    <View className="w-full space-y-2 mt-5">
      <TouchableOpacity
        activeOpacity={0.8}
        className="h-[50px] rounded-[6.733px] justify-center"
        onPress={() => {
          router.push("/Home");
        }}
      >
        <Text className="text-[#001639] text-center text-[12px] font-[600] justify-center font-[Lexend]">
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <FlatList
        data={outdoorItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        numColumns={2}
        contentContainerStyle={{ padding: 20 }}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};

export default Outdoor;