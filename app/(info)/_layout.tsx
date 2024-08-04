import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router/stack'

export default function _layout() {
  return (
    <Stack screenOptions={{
            headerShown: false
    }}
      className="bg-white flex-1 h-[100vh] "
    >
        <Stack.Screen name="location" options={{ headerShown: false }} />
        <Stack.Screen name="indoor" options={{ headerShown: false }} />
        <Stack.Screen name="outdoor" options={{ headerShown: false }} />
    </Stack>
  )
}
