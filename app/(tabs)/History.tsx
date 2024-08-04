import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, SafeAreaView, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import {icons} from '@/assets/images/ImageHandler';

const HistoryItem = ({ location, time }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: 'white', marginBottom: 10, borderRadius: 10 }}>
    <Icon name="droplet" type="feather" size={24} color="#4A90E2" />
    <View style={{ flex: 1, marginLeft: 15 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Leakage detected</Text>
      <Text style={{ color: '#666' }}>{location}</Text>
    </View>
    <Text style={{ color: '#666' }}>{time}</Text>
  </View>
);

const History = () => {
  const historyData = [
    { id: '1', location: 'Kitchen', time: '12 pm/2 May 2024' },
    { id: '2', location: 'Bathroom', time: '12 pm/2 May 2024' },
    { id: '3', location: 'Garden', time: '12 pm/2 May 2024' },
    { id: '4', location: 'Laundry', time: '12 pm/2 May 2024' },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, padding: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#312064' }}>History</Text>
          <Icon name="bell" type="feather" size={24} color="black" />
        </View>

        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 25, paddingHorizontal: 15 }}>
            <Icon name="search" type="feather" size={20} color="#666" />
            <TextInput
              style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 10 }}
              placeholder="Search by name"
              placeholderTextColor="#999"
            />
          </View>
        </View>



        <FlatList
          data={historyData}
          renderItem={({ item }) => <HistoryItem location={item.location} time={item.time} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>

     
    </SafeAreaView>
  );
};

export default History;