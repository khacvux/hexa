import { View, Image, TextInput } from 'react-native';
import React from 'react';
import tw from 'twrnc';
const WriteComment = () => {
  return (
    <View style={tw`bg-[#F4F6F9] py-3 px-4 flex flex-row items-center`}>   
        <Image source={require('../../assets/images/avt.jpeg')} 
            style={tw`w-10 h-10 rounded-full mr-4`}
        />
        <TextInput
            style={tw`bg-white flex-1 py-3 rounded-full px-3`}
            placeholder='Write your comment...'
        />
    </View>
  );
};

export default WriteComment;
