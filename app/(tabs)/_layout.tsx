import { Tabs } from 'expo-router';
import React from 'react';

import TabIcon from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { icons } from '@/assets/images/ImageHandler';
// import {splash} from '@/assets/images/splash.png'

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FAA719",
        tabBarInactiveTintColor: "#001639",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        },
      }}>
    
        <Tabs.Screen
          name="Home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
                main={false}
              />
            ),
          }}
      />
      <Tabs.Screen
          name="Activities"
          options={{
            title: "Activity",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.activity}
                color={color}
                name="Activity"
                focused={focused}
                main = {false}
              />
            ),
          }}
      />
      
      <Tabs.Screen
          name="Nemo"
          options={{
            title: "Nemo",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.nemo}
                color={color}
                name="Nemo"
                focused={focused}
                main = {true}
              />
            ),
          }}
      />
      <Tabs.Screen
          name="History"
          options={{
            title: "History",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.histort}
                color={color}
                name="History"
                focused={focused}
                main = {false}
              />
            ),
          }}
      />
       <Tabs.Screen
          name="Profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
                main = {false}
              />
            ),
          }}
      />
    </Tabs>
    
  );
}
