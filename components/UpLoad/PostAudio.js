import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import tw from 'twrnc';

const PostAudio = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full flex-1 flex items-center`}>
      <View style={tw`flex items-center justify-center flex-1`}>
        <View style={tw`flex items-center justify-center border-2 rounded-full w-25 h-25 my-6 border-[#5EC2EA]`}>
          <Image source={require('../../icons/audio-waves.png')}
            style={tw`w-12 h-12`}
          />
        </View>
        <Text style={tw`text-lg tracking-[.3] text-[#5EC2EA]`}>Tracks & albums will be displayed here</Text>
      </View>
      <View style={tw`w-full bg-[#5EC2EA] my-3`}>
        <TouchableOpacity style={tw`w-full bg-[#5EC2EA] items-center`}>
          <Text style={tw`py-3 text-white text-xs font-bold`}>
            Choose your tracks
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PostAudio;
