import { View, Text, SafeAreaView } from 'react-native';
import tw from 'twrnc'

import HeaderChatbox from '../components/Chatbox/HeaderChatbox';
import Contacts from '../components/Chatbox/Contacts';
import SearchContact from '../components/Chatbox/SearchContact';
import SafeArea from '../components/SafeArea';


const ChatsScreen = () => {
  return (
    <SafeAreaView style={[tw`bg-white h-full`, SafeArea.AndroidSafeArea]}>
        <HeaderChatbox />
        <SearchContact />
        <Contacts />
    </SafeAreaView>
  );
};

export default ChatsScreen;
