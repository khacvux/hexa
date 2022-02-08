import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc'

const HeaderChatbox = () => {
  return (
    <View
        style={tw`flex flex-row items-center w-full px-3 py-2`} 
    >
        <TouchableOpacity
            activeOpacity={.8}
        >
            <Image
                source={require('../../assets/images/avt.jpeg')} 
                style={tw`w-9 h-9 rounded-full`} 
            />
        </TouchableOpacity>
        <Text
            style={tw`font-bold text-lg flex-1 text-center mr-8`}
        >
            Message
        </Text>
    </View>
  );
};

export default HeaderChatbox;
