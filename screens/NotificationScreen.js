import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import tw from 'twrnc'
import { Entypo } from '@expo/vector-icons';
import SortByTime from '../components/Notifications/SortByTime';

const NotificationScreen = () => {
  return (
    <SafeAreaView style={tw`h-full bg-white`}>
        <View style={tw`flex flex-row items-center my-1 px-4`}>
            <Text style={tw`text-xl font-bold `}>Notifications</Text>        
        </View>
        <ScrollView style={tw`px-4 mt-1`}>
            <SortByTime type={'Today'} />

        </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;
