import { View, Text, SafeAreaView, TouchableOpacity, Image, Platform} from 'react-native';
import React, { useEffect, useState } from 'react';
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';
import tw from 'twrnc';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker'




const SelectAudio = () => {


  const navigation = useNavigation()

  const [audioFiles, setAudioFiles] = useState('');

    

  const getAudioFiles = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type:"/mp3"
    });

    if(!result.cancel){
      const audio = {
        uri: Platform.OS == 'ios' ? result.uri.substr(7) : result.uri,
        name: result.name || result.uri.substr(result.uri.lastIndexOf('/') + 1)
      }
      setAudioFiles(audio)
    }
  };



  return (
    <SafeAreaView style={tw`bg-white h-full `}>
      <View style={tw`h-full px-3 justify-between`}>
        <View style={tw`w-full flex-1 justify-center items-center`}>
          <TouchableOpacity
            style={tw`items-center p-10`}
            activeOpacity={.8}
            onPress={getAudioFiles}
          >
            <View
              style={tw`flex items-center justify-center border-2 rounded-full w-24 h-24 border-[#5EC2EA] mb-6`}
            >
              <Image 
                source={require('../../assets/icons/audio-waves.png')}
                style={tw`w-12 h-12`}
              />
            </View>
            <Text>{audioFiles.name}</Text>
            <Text style={tw`text-lg tracking-[.3] text-[#5EC2EA]`}>Tap to select file!</Text>
          </TouchableOpacity>
        
        </View>
        <View style={tw`flex flex-row items-center bg-gray-100 rounded-lg my-2 py-1 px-2 mb-5`}>
          <TouchableOpacity style={tw`items-center flex-1`}
              onPress={() => navigation.navigate('HomeTab')}
            >
            <Text style={tw`py-3 text-[#5EC2EA]`}>Cancel</Text> 
          </TouchableOpacity>
          {
            audioFiles ? (
              <TouchableOpacity style={tw`items-center flex-1 border border-[#5EC2EA] rounded-lg bg-[#5EC2EA]`}
                  activeOpacity={.8}
                >
                <Text style={tw`py-3 text-white font-bold text-center`}>
                  Next
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={tw`items-center flex-1 border border-gray-200 rounded-lg`}
                activeOpacity={.8}
              >
                <Text style={tw`py-3 text-gray-300 text-center`}>
                  Next
                </Text>
              </TouchableOpacity>
            )
          }
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectAudio;
