import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { icons } from '@/assets/images/ImageHandler';
const ProfileOption = ({ icon, title, subtitle, hasWarning, hasArrow }) => (
  <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: 'white', borderRadius: 10, marginBottom: 10 }}>
    <View style={{ backgroundColor: '#F0F0F0', borderRadius: 20, padding: 10, marginRight: 15 }}>
      <Icon name={icon} type="feather" size={20} color="#000" />
    </View>
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 16, fontWeight: '500' }}>{title}</Text>
      {subtitle && <Text style={{ color: '#666', fontSize: 12 }}>{subtitle}</Text>}
    </View>
    {hasWarning && <Icon name="alert-circle" type="feather" size={20} color="red" style={{ marginRight: 10 }} />}
    {hasArrow && <Icon name="chevron-right" type="feather" size={20} color="#666" />}
  </TouchableOpacity>
);

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>Profile</Text>

        <View style={{ backgroundColor: '#1E2F4D', borderRadius: 10, padding: 20, marginBottom: 20, flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={icons.profile}
            style={{ width: 60, height: 60, borderRadius: 30, marginRight: 15 }}
          />
          <View>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Anubha Sharma</Text>
            <Text style={{ color: '#A0A0A0', fontSize: 14 }}>@anubhaa</Text>
          </View>
        </View>

        <ProfileOption icon="user" title="My Account" subtitle="Make changes to your account" hasWarning hasArrow />
        {/* <ProfileOption icon="lock" title="Two-Factor Authentication" subtitle="Further secure your account for safety" hasArrow /> */}
        <ProfileOption icon="log-out" title="Log out" subtitle="Further secure your account for safety" hasArrow />

        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>More</Text>

        <ProfileOption icon="help-circle" title="Help & Support" hasArrow subtitle={undefined} hasWarning={undefined} />
        <ProfileOption icon="info" title="About App" hasArrow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;