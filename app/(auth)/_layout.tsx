import { View, Text , SafeAreaView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router/stack'
import Slot from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
    
        {/* <Stack> */}
            <Stack.Screen name="login" options={{
            headerShown: false,
          }}
/>
            <Stack.Screen name="signin" options={{
            headerShown: false,
          }}
/>
        {/* </Stack> */}
        {/* <Slot /> */}

    </Stack>
  )
}

export default AuthLayout