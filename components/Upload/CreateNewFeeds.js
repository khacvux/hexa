import { View, Text, SafeAreaView, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { EvilIcons } from '@expo/vector-icons';
import Textarea from 'react-native-textarea';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';


const CreateNewFeeds = () => {

  const {width: SCREEN_WIDTH} = Dimensions.get('window');
  // frame size 3:2
  const FRAMESIZE_W = SCREEN_WIDTH;
  const FRAMESIZE_H = SCREEN_WIDTH/2*3.06;

  const navigation = useNavigation();
  const [status, setStatus] = useState('');
  const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  )

  return (
    <SafeAreaView style={tw`bg-white h-full flex items-center`}>
      
      <View style={tw`flex items-center justify-center flex-1 w-full overflow-hidden`}>
        <View style={[tw`w-full items-center`]}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1570793005386-840846445fed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}} 
            style={[tw`w-full h-full`, {width: FRAMESIZE_W, height: FRAMESIZE_H}]}

          />
        </View>
        {/* <View style={tw`flex items-center`}>
          <View style={tw`flex items-center justify-center border-2 rounded-full w-25 h-25 my-6 border-[#5EC2EA]`}>
            <EvilIcons name="camera" size={65} color="#5EC2EA" />
          </View>
          <Text style={tw`text-lg tracking-[.3] text-[#5EC2EA]`}>Photos will be displayed here</Text>
        </View> */}
      </View>
      <View style={tw`w-full`}>
        <View style={[tw`w-full my-1 flex flex-row `]}>
          <TouchableOpacity style={tw`flex-3 items-center mr-1 overflow-hidden border border-[#5EC2EA]`}
            onPress={() => navigation.goBack()}
          >
              <Text style={tw`py-3 text-[#5EC2EA] text-xs`}>Cancel</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={tw`flex-7 items-center overflow-hidden border border-[#5EC2EA]` }
            activeOpacity={.8}
          >
              <Text style={tw`py-3 text-[#5EC2EA] text-xs `}>
                Next
              </Text>
          </TouchableOpacity>
        </View>
        <View style={tw`w-full bg-[#5EC2EA]`}>
          <TouchableOpacity style={tw`w-full bg-[#5EC2EA] items-center border border-[#5EC2EA] `}
            onPress={() => navigation.navigate('MediaSelectorStack')}
          >
            <Text style={tw`py-3 text-white text-xs font-bold`}>
              Choose some pictures
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default CreateNewFeeds;
