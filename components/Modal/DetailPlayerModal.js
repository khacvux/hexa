import { AntDesign, Entypo, FontAwesome5, Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Modal, ImageBackground, SafeAreaView, TouchableOpacity, Image, FlatList, Dimensions, Animated } from 'react-native'
import tw from 'twrnc'
// import TrackPlayer, {
//   Capability,
//   Event,
//   RepeatMode,
//   State,
//   usePlaybackState,
//   useProgress,
//   useTrackPlayerEvents,
// } from 'react-native-track-player'

import Slider from '@react-native-community/slider'
import { useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'


const DetailPlayerModal = ({ showDetailPlayer, setShowDetailPlayer }) => {


  const { width, height } = Dimensions.get('window')
  // const progress = useProgress()
  const { arraySongs } = useSelector(state => state.songReducer)

  const [songIndex, setSongIndex] = useState(0)
  const [repeatMode, setRepeatMode] = useState(false)
  const [songName, setSongName] = useState('')
  const [songAuthor, setSongAuthor] = useState('')
  const [songImage, setSongImage] = useState()

  const scrollX = useRef(new Animated.Value(0)).current
  const songSlider = useRef(null);

  
  // console.log(arraySongs)

  // const setupPlayer = async () => {
  //   try {
  //     await TrackPlayer.setupPlayer()
        
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const renderSongsImage = ({item, index}) => {
    return (
      <Animated.View style={[tw`h-full items-center justify-center`, {width: width}]}>
        <Image 
          source={item.song.image ? {uri: item.song.image} : require('../../assets/images/default-song-avatar.jpeg')}
          style={tw`h-75 w-75 rounded-xl`}
        />  
      </Animated.View>
      
    )
  }

  // const skipTo = async songId => {
  //   await TrackPlayer.skip(songId)
  // }

  // const skipToNext = () => {
  //   songSlider.current.scrollToOffset({
  //     offset: (songIndex + 1) * width,
  //   });
  // };

  // const skipToPrevious = () => {
  //   songSlider.current.scrollToOffset({
  //     offset: (songIndex - 1) * width,
  //   });
  // };




  // useEffect(() => {
  //   // setupPlayer()

  //   scrollX.addListener((value) => {
  //     const index = Math.round((value/width))
  //     skipTo(index)
  //     setSongIndex(index)
  //   })

  //   return () => {
  //     scrollX.removeAllListeners();
  //     TrackPlayer.destroy();
  //   }
  // }, [])



  return (
    <Modal
      visible={showDetailPlayer}
      animationType='slide'
    >
      <ImageBackground
        source={arraySongs[0]?.image ? {uri: arraySongs[0]?.image} : require('../../assets/images/default-song-avatar.jpeg')}
        style={tw`w-full h-full`}
        resizeMode='cover'
      >
        <BlurView
          intensity={40}
          style={tw`w-full h-full`}
          tint='dark'
        >
          <SafeAreaView style={tw`h-full`}>
            <View style={tw`flex flex-col h-full justify-between`} >
              <View style={tw`flex flex-row items-center my-3 px-5`}>
                <TouchableOpacity
                  style={tw`p-2 rounded-full mr-3 border border-white`}
                  onPress={() => setShowDetailPlayer(!showDetailPlayer)}
                >
                  <AntDesign
                    name='down'
                    size={20}
                    style={tw`text-white`}
                  />
                </TouchableOpacity>
                <View style={tw`flex-1`}>
                  <Text style={tw`text-2xl font-semibold text-white tracking-[.25]`}>{arraySongs[0].name}</Text>
                  <Text style={tw`text-white text-base`}>{arraySongs[0].userName}</Text>
                </View>

              </View>

              {/* IMAGE */}

{/* 
              <View style={tw`flex-1 w-full bg-black items-center justify-center`}>
                <Image 
                  source={arraySongs[0]?.image ? {uri: arraySongs[0]?.image} : require('../../assets/images/default-song-avatar.jpeg')}
                  style={tw`h-75 w-75 rounded-xl`}
                />
              </View> */}


              <View style={tw`flex-1 w-full items-center justify-center`}>
                <Animated.FlatList 
                  data={arraySongs}
                  renderItem={renderSongsImage}
                  keyExtractor={item => item.listSongItemId}
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  scrollEventThrottle={16}
                />
              </View>





              <View style={tw``}>
                  <View style={tw`flex flex-row items-center my-1 justify-around`}>
                    <TouchableOpacity
                      style={tw`p-3 rounded-full `}
                      activeOpacity={.5}
                    >
                      <AntDesign name='stepbackward'
                        size={23}
                        style={tw`text-gray-300`}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={tw`p-6 rounded-full bg-gray-900`}
                      activeOpacity={.5}
                    >
                      <FontAwesome5 name='pause'
                        size={30}
                        style={tw`text-white`}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={tw`p-3 rounded-full`}
                      activeOpacity={.5}
                    >
                      <AntDesign name='stepforward'
                        size={23}
                        style={tw`text-white`}
                      />
                    </TouchableOpacity>
                </View>


                {/* SLIDER */}
                <View style={tw`mb-15 mt-5 px-5`}>
                  <Slider
                    style={tw``}
                    value={0}
                    minimumValue={0}
                    maximumValue={10}
                    thumbTintColor='#4b5563'
                    minimumTrackTintColor='#4b5563'
                    maximumTrackTintColor='#F5F7FA'
                    // onSlidingComplete={async value => {
                    //   await TrackPlayer.seekTo(value);
                    // }}
                  />
                  <View style={tw`flex flex-row items-center justify-between`}>
                    <Text style={tw`font-bold text-white`}>
                      {/* {
                        new Date(progress.position * 1000)
                        .toLocaleTimeString()
                        .substring(3)
                      } */}
                    </Text>
                    <Text style={tw`font-bold text-white`}>
                      {/* {
                        new Date((progress.duration - progress.position) * 1000)
                        .toLocaleTimeString()
                        .substring(3)
                      } */}
                    </Text>
                  </View>
                </View>


              </View>
              <View style={tw`flex flex-row items-center py-5`}>
                <TouchableOpacity
                  style={tw`flex flex-row flex-1 items-center justify-center`}>
                  <Ionicons name='heart-outline' size={33} style={tw`mx-1 text-white`} />
                  {/* <Text style={tw`font-bold text-white`}>2342</Text> */}
                </TouchableOpacity>
                <TouchableOpacity
                  style={tw`flex flex-row flex-1 items-center justify-center`}
                >
                  <Ionicons name='chatbubble-ellipses-outline' size={30} style={tw`mx-1 text-white`} />
                  {/* <Text style={tw`font-bold text-white`}>2342</Text> */}
                </TouchableOpacity>
                <TouchableOpacity
                  style={tw`flex-1 items-center`}
                >
                  <Ionicons name='md-share-social-outline' size={30} style={tw`mx-1 text-white`} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={tw`flex-1 items-center`}
                >
                  <SimpleLineIcons name='loop' size={30} style={tw`mx-1 text-white`} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={tw`flex-1 items-center`}
                >
                  <Entypo name='dots-three-horizontal' size={24} style={tw`mx-1 text-white`} />
                </TouchableOpacity>
              </View>
            </View>

          </SafeAreaView>
        </BlurView>
      </ImageBackground>
    </Modal>
  )
}

export default DetailPlayerModal