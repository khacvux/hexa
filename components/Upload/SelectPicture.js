import { View, Text, SafeAreaView, TouchableOpacity, Image, Dimensions, Platform } from 'react-native';
import { useState } from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';



import { EvilIcons, MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';



const SelectPicture = () => {

  const {width: SCREEN_WIDTH} = Dimensions.get('window');
  // frame size 3:2
  const FRAMESIZE_W = SCREEN_WIDTH;
  const FRAMESIZE_H = SCREEN_WIDTH/2*3*.97;

  const navigation = useNavigation();
  const [image, setImage] = useState(null);


  const selectPicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      aspect: [2, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const image = {
        uri: Platform.OS == 'ios' ? result.uri.substr(7) : result.uri,
        name: result.fileName || result.uri.substr(result.uri.lastIndexOf('/') + 1)
      }
      setImage(image);
    }
  };


  return (
    <SafeAreaView style={tw`bg-white h-full flex items-center relative `}>
      <View style={[tw`flex items-center justify-center w-full h-full overflow-hidden`]}>
        {
          image ? (
            <View style={[tw`w-full h-full items-center`]}>
              <Image 
                source={{ uri: image.uri }} 
                style={tw`w-full h-full`}
                resizeMode='cover'
              />
            </View>
          ) : (
            <View style={tw`flex items-center`}>
              <View style={tw`flex items-center justify-center border-2 rounded-full w-25 h-25 my-6 border-[#5EC2EA]`}>
                <EvilIcons name="camera" size={65} color="#5EC2EA" />
              </View>
              <Text style={tw`text-lg tracking-[.3] text-[#5EC2EA]`}>Photos will be displayed here</Text>
            </View>
          )
        }
      </View>
      <View style={tw`w-full px-3 flex-1 py-1 items-center justify-center absolute bottom-5 left-0 right-0`}>
        <BlurView
          style={[tw`flex flex-row items-center justify-around w-full rounded-xl py-2 overflow-hidden`]}
          intensity={50} tint="light"
        >
          <TouchableOpacity style={tw`items-center flex-1 px-2 flex flex-row`}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name='keyboard-arrow-left' size={25} style={tw`ml-1 text-[#5EC2EA]`}/>
            <Text style={tw`py-3 text-[#5EC2EA]`}>Cancel</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={tw`items-center flex-1 px-7 mx-3 bg-[#5EC2EA] rounded-lg`}
            onPress={selectPicture}
          >
            <Text style={tw`py-3 text-white`}>
              Gallery
            </Text>
          </TouchableOpacity>
          {
            image ? (
              <TouchableOpacity style={tw`items-center flex-1 px-2 flex flex-row` }
                activeOpacity={.8}
                onPress={() => navigation.navigate('UpLoadPictureStack', {
                  image: image
                })}
              >
                <Text style={tw`py-2 text-[#5EC2EA] text-center`}>
                  Next
                </Text>
                <MaterialIcons name='keyboard-arrow-right' size={25} style={tw`mr-1 text-[#5EC2EA]`}/>
              </TouchableOpacity>
            ) : (
              <View style={tw`items-center flex-1 px-2 flex flex-row` }>
                <Text style={tw`py-2 text-gray-300 ml-3`}>
                  Next
                </Text>
                <MaterialIcons name='keyboard-arrow-right' size={25} style={tw`mr-1 text-gray-300`}/>
              </View>
            )
          }

        </BlurView>
      </View>
    </SafeAreaView>
  );
};

export default SelectPicture;
