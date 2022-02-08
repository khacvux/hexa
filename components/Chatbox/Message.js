import { View, Text } from 'react-native';
import tw from 'twrnc'
import React from 'react';
import YourMessage from './YourMessage';
import MyMessage from './MyMessage';

const Message = () => {
  return (
    <View style={tw`bg-[#F5F7FA] px-5 py-2 flex-1`}>
      <YourMessage/>
      <YourMessage/>
      <MyMessage/>
      <MyMessage/>
      <YourMessage/>
      <MyMessage/>
      <MyMessage/>
      <YourMessage/>
    </View>
  );
};

export default Message;
