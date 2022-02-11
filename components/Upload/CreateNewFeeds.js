import { View, Text, SafeAreaView, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { EvilIcons } from '@expo/vector-icons';
import Textarea from 'react-native-textarea';
import { useNavigation } from '@react-navigation/native';


const CreateNewFeeds = () => {

  const navigation = useNavigation();
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
 
      <View style={tw`w-full my-2 flex flex-row`}>
        <TouchableOpacity style={tw`flex-3 items-center border border-[#5EC2EA] mx-1 rounded-md`}
          onPress={() => navigation.goBack()}
        >
          <Text style={tw`py-3 text-[#5EC2EA] text-xs`}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex-7 items-center border border-[#5EC2EA] mr-1 rounded-md`}
          activeOpacity={.8}
        >
          <Text style={tw`py-3 text-[#5EC2EA] text-xs `}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`w-full bg-[#5EC2EA] mb-2`}>
        <TouchableOpacity style={tw`w-full bg-[#5EC2EA] items-center border border-[#5EC2EA] `}>
          <Text style={tw`py-3 text-white text-xs font-bold`}
            onPress={() => navigation.navigate('MediaSelectorStack')}
          >
            Choose some pictures
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateNewFeeds;
