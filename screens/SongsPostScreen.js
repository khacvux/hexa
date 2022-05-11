import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { BlurView } from 'expo-blur'
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import { useDispatch } from 'react-redux'
import tw from 'twrnc'
import ListSongPost from '../components/SongPosts/ListSongPost'




const SongsPostScreen = () => {

  const navigation = useNavigation()
  const dispatch = useDispatch()


  return (
    <ImageBackground
      source={require('../assets/images/song_image.jpeg')}
      style={tw`w-full h-full`}
      resizeMode='cover'
    >
      <BlurView 
        intensity={40}
        style={tw`w-full h-full`}
        tint='dark'
      >
        <SafeAreaView>
          <View style={tw`px-3 h-11 flex items-center justify-center py-2 border-b border-gray-400`}>
            <TouchableOpacity 
              style={tw`absolute h-11 p-2 top-0 left-2 flex items-center justify-center`}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="chevron-back"
                style={tw`text-gray-100`}
                size={20}
              />   
            </TouchableOpacity>
            <Text style={tw`text-lg font-bold tracking-[.2] text-gray-100`}>Stream</Text>
          </View> 
          <ListSongPost />
        </SafeAreaView>
      </BlurView>
    </ImageBackground>
  )
}

export default SongsPostScreen