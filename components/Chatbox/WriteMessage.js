import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';

const WriteMessage = () => {

  const [input, setInput] = useState("");

  const sendMessage = () => {};

  return (
    <View style={tw`bg-white py-2 px-3 flex flex-row items-center h-10`}>
      <TextInput 
        placeholder='Write message..'
        style={tw`text-sm flex-1`}
        onChange={setInput}
        onSubmitEditing={sendMessage}
        value={input}
      />
      <TouchableOpacity>
        <Ionicons name='send' style={tw`text-lg px-2 text-[#5EC2EA]`}/>
      </TouchableOpacity>
    </View>
  );
};

export default WriteMessage;
