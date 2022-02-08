import { View, Text, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import tw from 'twrnc'
import Message from '../components/Chatbox/Message';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import WriteMessage from '../components/Chatbox/WriteMessage';



const ChatboxScreen = () => {

  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white h-full flex`}>
      <View style={tw`flex flex-row items-center pt-1 pb-2 `}>
        <TouchableOpacity
          style={tw`px-2 py-1`}
          activeOpacity={.8}
          onPress={() => navigation.navigate('ChatsStack')}
        >
          <Ionicons name="ios-chevron-back-outline" 
            style={tw`text-2xl mr-1 text-[#5EC2EA]`}
          />
        </TouchableOpacity>
        <View>
          <Text style={tw`font-semibold text-base mb-[1]`}>Hảo Hán 😆😆😆</Text>
          <Text style={tw`font-light`}>Active 2 minutes ago</Text>
        </View>
      </View>


      <Message />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={5}
      >
        <WriteMessage />

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatboxScreen;
