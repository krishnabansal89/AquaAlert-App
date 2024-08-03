import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const location = () => {
  return (
    <SafeAreaView>
      <View className=" flex space-y-10 justify-center px- pt-20 bg-[#FFF] font-[Lexend]">
        <View className="text-[#001639] items-center">
          <Text className="text-[23.567px] text-[#001639] font-[600] font-[Lexend]">
            Create Location
          </Text>
        </View>
        <View className="w-[90%] m-auto ">
          <Text className="text-[16px] font-[600] text-[#282860] font-[Lexend]">
            Location Info
          </Text>
        </View>
        <View className="space-y-3 w-[90%] m-auto flex">
          <View className="bg-[#EEF4FF]    border-[0.842px] border-[#28286026]  rounded-[6.733px] px-4 h-14">
            <Input
              // placeholderTextColor={"#282860"}

              label="Location Name"
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
          <View className="bg-[#EEF4FF]   border-[0.842px] border-[#28286026]  rounded-[6.733px] px-4 h-14">
            <Input
              // placeholderTextColor={"#282860"}

              label="Address 1"
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

              label="Address 2  (Optional)"
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

              label="City"
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

              label="State"
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
          <View className="bg-[#EEF4FF] border-[0.842px] border-[#28286026]  rounded-[6.733px] px-4 h-14">
            <Input
              // placeholderTextColor={"#282860"}

              label="Zip Code"
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
    </SafeAreaView>
  );
};

export default location;
