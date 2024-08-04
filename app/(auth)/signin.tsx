import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";
import { router } from "expo-router";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const Signin = () => {
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: '5%', paddingTop: '10%', backgroundColor: '#FFF', fontFamily: 'Lexend'}}>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ fontSize: 24, color: '#001639', fontWeight: '600', fontFamily: 'Lexend' }} className="text-[#001639] ">
            Sign Up
          </Text>
        </View>
        <View style={{ width: '90%', alignSelf: 'center', marginBottom: 20 }}>
          <Text style={{ color: '#001639', fontWeight: '400', fontSize: 10, fontFamily: 'Lexend' }} className="text-[#001639] ">
            water is amazing that's why at <Text style={{ fontFamily: 'Lexend', fontWeight: '700', fontSize: 10 }}>Aqua-Alert</Text>
          </Text>
          <Text style={{ color: '#001639', fontSize: 16, fontWeight: '400', marginTop: 5, fontFamily: 'Lexend' }}>
            we make every drop count by counting
          </Text>
        </View>
        <View style={{ width: '90%', alignSelf: 'center', marginBottom: 20 }}>
          <View style={{ backgroundColor: '#EEF4FF', borderWidth: 1, borderColor: '#28286026', borderRadius: 7, paddingHorizontal: 15, height: 56, justifyContent: 'center', marginBottom: 15 }}>
            <Input
              leftIcon={<Icon name="user" size={24} color="#282860" />}
              label="Name"
              labelStyle={{
                color: "#282860",
                fontSize: 8,
                fontWeight: "500",
                fontFamily: "Lexend",
                paddingTop: 5,
                paddingBottom: 5,
              }}
              inputStyle={{
                fontSize: 11,
                fontWeight: "500",
                color: "#282860",
                fontFamily: "Lexend",
              }}
              inputContainerStyle={{ borderBottomWidth: 0 }}
            />
          </View>
          <View style={{ backgroundColor: '#EEF4FF', borderWidth: 1, borderColor: '#28286026', borderRadius: 7, paddingHorizontal: 15, height: 56, justifyContent: 'center', marginBottom: 15 }}>
            <Input
              leftIcon={<Icon name="user" size={24} color="#282860" />}
              label="Email"
              labelStyle={{
                color: "#282860",
                fontSize: 8,
                fontWeight: "500",
                fontFamily: "Lexend",
                paddingTop: 5,
                paddingBottom: 5,
              }}
              inputStyle={{
                fontSize: 11,
                fontWeight: "500",
                color: "#282860",
                fontFamily: "Lexend",
              }}
              inputContainerStyle={{ borderBottomWidth: 0 }}
            />
          </View>
          <View style={{ backgroundColor: '#EEF4FF', borderWidth: 1, borderColor: '#28286026', borderRadius: 7, paddingHorizontal: 15, height: 56, justifyContent: 'center', marginBottom: 15 }}>
            <Input
              leftIcon={<Icon name="lock" size={24} color="#282860" />}
              label="Password"
              labelStyle={{
                color: "#282860",
                fontSize: 8,
                fontWeight: "500",
                fontFamily: "Lexend",
                paddingTop: 5,
                paddingBottom: 5,
              }}
              inputStyle={{
                fontSize: 11,
                fontWeight: "500",
                color: "#282860",
                fontFamily: "Lexend",
              }}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              secureTextEntry
            />
          </View>
          <View style={{ backgroundColor: '#EEF4FF', borderWidth: 1, borderColor: '#28286026', borderRadius: 7, paddingHorizontal: 15, height: 56, justifyContent: 'center', marginBottom: 15 }}>
            <Input
              leftIcon={<Icon name="lock" size={24} color="#282860" />}
              label="Confirm Password"
              labelStyle={{
                color: "#282860",
                fontSize: 8,
                fontWeight: "500",
                fontFamily: "Lexend",
                paddingTop: 5,
                paddingBottom: 5,
              }}
              inputStyle={{
                fontSize: 11,
                fontWeight: "500",
                color: "#282860",
                fontFamily: "Lexend",
              }}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              secureTextEntry
            />
          </View>
          <View style={{ backgroundColor: '#EEF4FF', borderWidth: 1, borderColor: '#28286026', borderRadius: 7, paddingHorizontal: 15, height: 56, justifyContent: 'center' }}>
            <Input
              leftIcon={<Icon name="mobile" size={24} color="#282860" />}
              label="Mobile number"
              labelStyle={{
                color: "#282860",
                fontSize: 8,
                fontWeight: "500",
                fontFamily: "Lexend",
                paddingTop: 5,
                paddingBottom: 5,
              }}
              inputStyle={{
                fontSize: 11,
                fontWeight: "500",
                color: "#282860",
                fontFamily: "Lexend",
              }}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              keyboardType="phone-pad"
            />
          </View>
        </View>
        <View style={{ width: '90%', alignSelf: 'center', marginBottom: 20 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              height: 50,
              borderRadius: 7,
              justifyContent: 'center',
              marginBottom: 15,
              backgroundColor: 'transparent',
            }}
            onPress={() => {
              router.push("/login");
            }}
          >
            <Text style={{ color: '#001639', textAlign: 'center', fontSize: 12, fontWeight: '600', fontFamily: 'Lexend' }}>
              Login instead?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              height: 50,
              borderRadius: 7,
              justifyContent: 'center',
              backgroundColor: '#001639',
            }}
            onPress={
              () => {
                router.push("/location");
              }}
          >
  
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 12, fontWeight: '600', fontFamily: 'Lexend' }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signin;
