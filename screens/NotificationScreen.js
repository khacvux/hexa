import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import tw from 'twrnc'
import { Entypo } from '@expo/vector-icons';
import SortByTime from '../components/Notifications/SortByTime';
import { notifications } from '../data';
import SafeArea from '../components/SafeArea';

const NotificationScreen = () => {

  return (
    <SafeAreaView style={[tw`bg-white h-full`, SafeArea.AndroidSafeArea]}>
        <ScrollView>
          <View style={tw`flex my-1 px-4`}>
              <Text style={tw`text-xl font-bold `}>Notifications</Text>        
              <Text style={tw`tracking-[1]`}>Today</Text>
          </View>
          <ScrollView
            contentContainerStyle={tw`mt-1`}
          >
            {
              notifications.map((notification) => (
                <SortByTime notification={notification} 
                  key={notification.id} 
                  
                />
              ))
            }
          </ScrollView>

        </ScrollView>
       
    </SafeAreaView>
  );
};

export default NotificationScreen;
