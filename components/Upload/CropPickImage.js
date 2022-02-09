import { View, Text, SafeAreaView, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { EvilIcons } from '@expo/vector-icons';
import Textarea from 'react-native-textarea';


const CropPickImage = () => {

  const [status, setStatus] = useState('');
  const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  )

  return (
    <SafeAreaView style={tw`bg-white h-full flex items-center`}>
      <View style={tw`flex items-center justify-center flex-1`}>
        <View style={tw`flex items-center justify-center border-2 rounded-full w-25 h-25 my-6 border-[#5EC2EA]`}>
          <EvilIcons name="camera" size={65} color="#5EC2EA" />
        </View>
        <Text style={tw`text-lg tracking-[.3] text-[#5EC2EA]`}>Photos will be displayed here</Text>
      </View>
 
      <View style={tw`w-full border border-l-0 border-r-0 border-t-[#5EC2EA] border-b-[#5EC2EA] my-2`}>
        <TouchableOpacity style={tw`w-full items-center`}
          activeOpacity={.8}
        >
          <Text style={tw`py-3 text-[#5EC2EA] text-xs`}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`w-full bg-[#5EC2EA] mb-2`}>
        <TouchableOpacity style={tw`w-full bg-[#5EC2EA] items-center`}>
          <Text style={tw`py-3 text-white text-xs font-bold`}
            onPress={() => console.log('asd')}
          >
            Choose some pictures
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CropPickImage;
