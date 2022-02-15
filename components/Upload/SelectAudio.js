import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import tw from 'twrnc';

const SelectAudio = () => {
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
      <View style={tw`w-full my-2 flex flex-row`}>
        <TouchableOpacity style={tw`flex-3 items-center border border-[#5EC2EA] mx-1 rounded-md`}
          onPress={() => navigation.goBack()}
        >
          <Text style={tw`py-3 text-[#5EC2EA] text-xs`}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex-7 items-center border border-[#5EC2EA] mr-1 rounded-md bg-[#5EC2EA] `}
          activeOpacity={.8}
        >
          <Text style={tw`py-3 text-white text-xs`}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`w-full bg-[#5EC2EA] mb-2`}>
        <TouchableOpacity style={tw`w-full bg-white items-center border border-t-[#5EC2EA] border-b-[#5EC2EA] border-l-0 border-r-0`}>
          <Text style={tw`py-3 text-[#5EC2EA] text-xs font-bold`}
            onPress={() => console.log('asd')}
          >
            Choose some pictures
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectAudio;
