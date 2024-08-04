import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { Input } from "react-native-elements";
import NamedIcon from "@/components/NamedIcon";
import { outdoorImages } from "@/assets/images/ImageHandler";
import {router} from 'expo-router'
const outdoor = () => {
  return (
    <ScrollView className="flex-2 h-[100%] bg-white">
      <View className="bg-white h-full flex space-y-5 justify-center px- pt-20 font-[Lexend] flex-1">
        <View className="text-[#001639] items-center">
          <Text className="text-[23.567px] text-[#001639] font-[600] font-[Lexend]">
            Home Profile
          </Text>
        </View>
       
        <View className="w-[90%] m-auto ">
          <Text className="text-[16px] font-[600] text-[#282860] font-[Lexend]">
            Outdoor
          </Text>
        </View>
        <View className="flex flex-row flex-wrap w-[90%] mx-auto">
          <NamedIcon
            icon={outdoorImages.sprinkler}
            title="sprinklers"
            selected={false}
          ></NamedIcon>
          <NamedIcon
            icon={outdoorImages.irrigation}
            title="House irrigation"
            selected={false}
          ></NamedIcon>
          <NamedIcon
            icon={outdoorImages.drip}
            title="Drip irrigation"
            selected={false}
          ></NamedIcon>
          <NamedIcon
            icon={outdoorImages.socker}
            title="Socker Hose"
            selected={false}
          ></NamedIcon>
          <NamedIcon
            icon={outdoorImages.irrigation_Wifi}
            title="Irrigation Controller (WiFi)"
            selected={false}
          ></NamedIcon>
          <NamedIcon
            icon={outdoorImages.irrigation_NonWifi}
            title="Irrigation Controller (Non-WiFi)"
            selected={false}
          ></NamedIcon>
          <NamedIcon
            icon={outdoorImages.manualPool}
            title="Pool (Manual Fill)  "
            selected={false}
          ></NamedIcon>
          <NamedIcon
            icon={outdoorImages.autopool}
            title="Pool (Auto Fill) "
            selected={false}
          ></NamedIcon>
        </View>
        <View className="w-[90%] m-auto space-y-2">
          <TouchableOpacity
            activeOpacity={0.8}
            className=" h-[50px]  rounded-[6.733px] justify-center"
            onPress={() => {
              router.push("/indoor");
            }}
          >
            <Text className="text-[#001639] text-center text-[12px] font-[600]  justify-center font-[Lexend]">
              {" "}
              Next
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            activeOpacity={0.8}
            className="bg-[#001639] h-[50px]  rounded-[6.733px] justify-center"
          >
            <Text className="text-white text-center text-[12px] font-[600]  justify-center font-[Lexend]">
              {" "}
              Login
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default outdoor;
