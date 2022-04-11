import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';
import tw from 'twrnc';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';

const SelectAudio = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`bg-white h-full `}>
      <View style={tw`h-full px-3 justify-between`}>
        <View style={tw`w-full items-center`}>
          <View style={tw`bg-gray-100 h-30 w-30 rounded-lg my-8 justify-end overflow-hidden relative shadow-lg`}>
            <TouchableOpacity
              style={tw`absolute bottom-0 left-0 right-0 items-center bg-[#5EC2EA] py-2`}
            >
              <Text style={tw`text-white`}>Choose avatar</Text>
            </TouchableOpacity>
          </View>
          <View style={tw`w-full`}>
            <View style={tw`flex flex-row items-center mb-2`}>
              <Text style={tw`mr-2 w-14`}>
                File:
              </Text>
              <View style={tw`flex-1 flex flex-row items-center`}>
                <View style={tw`flex-1 border-b py-2 border-gray-200`}>
                  <Text numberOfLines={1}>abc-12312-dsfs-.mp3</Text>
                </View>
                <TouchableOpacity
                  style={tw`bg-[#5EC2EA] py-2 ml-1 px-3 rounded-lg`}
                >
                  <Text style={tw`text-white`}>Select file</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={tw`flex flex-row items-center mb-2`}>
              <Text style={tw`mr-2 w-14`}>
                Name:
              </Text>
              <View style={tw`w-full border-b border-gray-200`}>
                <TextInput
                  style={tw`py-2`}
                />
              </View>
            </View>
            <View style={tw`flex flex-row items-center mb-2`}>
              <Text style={tw`mr-2 w-14`}>
                Auther:
              </Text>
              <View style={tw`w-full py-2 border-b border-gray-200`}>
                <Text style={tw`text-gray-600 `}>@Justin bieber</Text>
              </View>
            </View>
            <View style={tw`flex flex-row items-center mb-2`}>
              <Text style={tw`mr-2 w-14`}>
                Category:
              </Text>
              <View style={tw`w-full border-b py-2 border-gray-200`}>
                <Text>4</Text>
              </View>
            </View>
            
            
            
          </View>
        </View>
        <View style={tw`flex flex-row items-center bg-gray-100 rounded-lg my-2 py-1 px-2 mb-5`}>
          <TouchableOpacity style={tw`items-center flex-1`}
              onPress={() => navigation.navigate('HomeTab')}
            >
            <Text style={tw`py-3 text-[#5EC2EA]`}>Cancel</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={tw`items-center flex-1 border border-[#5EC2EA] rounded-lg`}
              activeOpacity={.8}
            >
              <Text style={tw`py-3 text-[#5EC2EA] text-center`}>
                Upload Track
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectAudio;
