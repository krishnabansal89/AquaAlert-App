import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { Input } from "react-native-elements";
import NamedIcon from "@/components/NamedIcon";
import { indoorImages } from "@/assets/images/ImageHandler";
import { router } from "expo-router";

const Indoor = () => {
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = (screenWidth * 0.9) / 2; // 90% of screen width divided by 2

  const indoorItems = [
    { icon: indoorImages.faucet, title: "Faucet" },
    { icon: indoorImages.toilet, title: "Toilet" },
    { icon: indoorImages.shower, title: "Shower" },
    { icon: indoorImages.bathtub, title: "Bathtub" },
    { icon: indoorImages.washingMachine, title: "Washing Machine" },
    { icon: indoorImages.garden, title: "Garden" },
    { icon: indoorImages.dishWasher, title: "Dish Washer" },
    { icon: indoorImages.ro, title: "RO system" },
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
          Home Details
        </Text>
      </View>
      <View className="w-full space-y-2 mb-5">
        <View className="bg-[#EEF4FF] border-[0.842px] border-[#28286026] rounded-[6.733px] px-4 h-14">
          <Input
            label="Number of Residents"
            labelStyle={{
              color: "#282860",
              fontSize: 8.417,
              fontWeight: "500",
              fontFamily: "Lexend",
              paddingTop: 5,
              paddingBottom: 5,
            }}
            className="text-[11px] font-[500] text-[#282860] font-[Lexend]"
            inputMode="text"
            inputContainerStyle={{ borderBottomWidth: 0, height: 20 }}
            inputStyle={{ height: 20 }}
          />
        </View>
        <View className="bg-[#EEF4FF] border-[0.842px] border-[#28286026] rounded-[6.733px] px-4 h-14">
          <Input
            label="Number of Bathrooms"
            labelStyle={{
              color: "#282860",
              fontSize: 8.417,
              fontWeight: "500",
              fontFamily: "Lexend",
              paddingTop: 5,
              paddingBottom: 5,
            }}
            className="text-[11px] font-[500] text-[#282860] font-[Lexend]"
            inputMode="text"
            inputContainerStyle={{ borderBottomWidth: 0, height: 20 }}
            inputStyle={{ height: 20 }}
          />
        </View>
      </View>
      <View className="w-full mb-5">
        <Text className="text-[16px] font-[600] text-[#282860] font-[Lexend]">
          Indoor 
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
          router.push("/outdoor");
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
        data={indoorItems}
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

export default Indoor;