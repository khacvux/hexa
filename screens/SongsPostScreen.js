import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { BlurView } from 'expo-blur'
import { useEffect } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import SongPostSkeleton from '../components/Skeleton/SongPostSkeleton'
import ListSongPost from '../components/SongPosts/ListSongPost'
import { getListSongByCategory } from '../redux/actions/songsAction'




const SongsPostScreen = ({ route }) => {

  const navigation = useNavigation()
  const { token } = useSelector(state => state.authReducer)
  const { listSongByCategory } = useSelector(state => state.songReducer)
  const { getListSongPostLoading } = useSelector(state => state.onLoadingReducer)
  const dispatch = useDispatch()
  const { genreId, background, genre } = route.params

  useEffect(() => {
    dispatch(getListSongByCategory({ token, genreId }))
  }, [])

  return (
    <ImageBackground
      source={background ? { uri: background } : require('../assets/images/default-song-avatar.jpeg')}
      style={tw`w-full h-full`}
      resizeMode='cover'
    >
      <BlurView
        intensity={65}
        style={tw`w-full h-full`}
        tint='dark'
      >
        <SafeAreaView>
          <View style={tw`px-3 h-11 flex items-center justify-center py-2 border-b border-gray-300`}>
            <TouchableOpacity
              style={tw`absolute h-11 p-2 top-0 left-2 flex items-center justify-center`}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="chevron-back"
                style={tw`text-gray-100`}
                size={20}
              />
            </TouchableOpacity>
            <Text style={tw`text-lg font-bold tracking-[.2] text-gray-100`}>{genre}</Text>
          </View>
          {
            getListSongPostLoading ? (
              <View style={tw`px-3`}>
                <SongPostSkeleton />
                <SongPostSkeleton />
                <SongPostSkeleton />
              </View>
            ) : (
              <ListSongPost listSongByCategory={listSongByCategory} />
            )
          }
        </SafeAreaView>
      </BlurView>
    </ImageBackground>
  )
}

export default SongsPostScreen