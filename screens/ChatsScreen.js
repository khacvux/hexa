import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'twrnc'

import HeaderChatbox from '../components/Chatbox/HeaderChatbox';
import Contacts from '../components/Chatbox/Contacts';
import SearchContact from '../components/Chatbox/SearchContact';


const ChatsScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <HeaderChatbox />
        <SearchContact />
        <Contacts />
    </SafeAreaView>
  );
};

export default ChatsScreen;
