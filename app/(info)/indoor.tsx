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
import { indoorImages } from "@/assets/images/ImageHandler";
import { router } from "expo-router";

const indoor = () => {
  return (
    <ScrollView>
      <View className="bg-white h-full flex space-y-5 justify-center px- pt-20 font-[Lexend]">
        <View className="text-[#001639] items-center">
          <Text className="text-[23.567px] text-[#001639] font-[600] font-[Lexend]">
            Home Profile
          </Text>
        </View>
        <View className="w-[90%] m-auto ">
          <Text className="text-[16px] font-[600] text-[#282860] font-[Lexend]">
            Home Details
          </Text>
        </View>
        <View className="w-[85%] mx-auto space-y-2 ">
          <View className="bg-[#EEF4FF]    border-[0.842px] border-[#28286026]  rounded-[6.733px] px-4 h-14">
            <Input
              // placeholderTextColor={"#282860"}

              label="Number of Residents"
              // labelProps={{style:{color:"#282860"}}}
              labelStyle={{
                color: "#282860",
                fontSize: 8.417,
                fontWeight: "500",
                fontFamily: "Lexend",
                paddingTop: 5,
                paddingBottom: 5,
              }}
              className="   text-[11px] font-[500] text-[#282860] font-[Lexend]"
              inputMode="text"
              inputContainerStyle={{ borderBottomWidth: 0, height: 20 }}
              inputStyle={{ height: 20 }}
            />
          </View>
          <View className="bg-[#EEF4FF]    border-[0.842px] border-[#28286026]  rounded-[6.733px] px-4 h-14">
            <Input
              // placeholderTextColor={"#282860"}

              label="Number of Bathrooms"
              // labelProps={{style:{color:"#282860"}}}
              labelStyle={{
                color: "#282860",
                fontSize: 8.417,
                fontWeight: "500",
                fontFamily: "Lexend",
                paddingTop: 5,
                paddingBottom: 5,
              }}
              className="   text-[11px] font-[500] text-[#282860] font-[Lexend]"
              inputMode="text"
              inputContainerStyle={{ borderBottomWidth: 0, height: 20 }}
              inputStyle={{ height: 20 }}
            />
          </View>
        </View>
        <View className="w-[90%] m-auto ">
          <Text className="text-[16px] font-[600] text-[#282860] font-[Lexend]">
            Indoor 
          </Text>
        </View>
        <View className="flex flex-row flex-wrap w-[90%] mx-auto">
          <NamedIcon
            icon={indoorImages.faucet}
            title="Faucet"
            selected={false}
          ></NamedIcon>
          <NamedIcon
            icon={indoorImages.toilet}
            title="Toilet"
            selected={false}
          ></NamedIcon>
          <NamedIcon
            icon={indoorImages.shower}
            title="Shower"
            selected={false}
          ></NamedIcon>
          <NamedIcon
            icon={indoorImages.bathtub}
            title="Bathtub"
            selected={false}
          ></NamedIcon>
          <NamedIcon
            icon={indoorImages.washingMachine}
            title="Washing Machine"
            selected={false}
          ></NamedIcon>
          <NamedIcon
            icon={indoorImages.garden}
            title="Garden"
            selected={false}
          ></NamedIcon>
          <NamedIcon
            icon={indoorImages.dishWasher}
            title="Dish Washer "
            selected={false}
          ></NamedIcon>
          <NamedIcon
            icon={indoorImages.ro}
            title="RO system"
            selected={false}
          ></NamedIcon>
        </View>
        <View className="w-[90%] m-auto space-y-2">
          <TouchableOpacity
            activeOpacity={0.8}
            className=" h-[50px]  rounded-[6.733px] justify-center"
            onPress={() => {
              router.push("/outdoor");
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

export default indoor;
