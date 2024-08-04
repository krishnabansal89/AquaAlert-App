import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { Stack } from "expo-router/stack";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useFonts } from "expo-font";
const HomeLayout = () => {
  const [loaded, error] = useFonts({
    'Lexend': require("..\\assets\\fonts\\Lexend-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      className="bg-white flex-1 h-full "
    >
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default HomeLayout;
