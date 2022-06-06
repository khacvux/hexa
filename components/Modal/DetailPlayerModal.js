import { AntDesign, Entypo, FontAwesome5, Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Modal, ImageBackground, SafeAreaView, TouchableOpacity, Image, FlatList, Dimensions, Animated } from 'react-native'
import tw from 'twrnc'


import Slider from '@react-native-community/slider'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { nextSong, pauseSong, playSong, prevSong } from '../../redux/actions/songsAction'


const DetailPlayerModal = ({ showDetailPlayer, setShowDetailPlayer, songPlaying }) => {

    const { statusPlayer, arraySongs, indexSongPlaying } = useSelector(state => state.songReducer)
    const dispatch = useDispatch()

    let canNext;
    let canPrev;

    const handlePause = () => {
        dispatch(pauseSong())
    }

    const handlePlay = () => {
        dispatch(playSong())
    }

    const handleNextSong = () => {
        dispatch(nextSong())
    }

    const handlePrevSong = () => {
        dispatch(prevSong())
    }



    if (arraySongs) {
        (arraySongs.length > indexSongPlaying + 1) ? canNext = true : canNext = false;
        (indexSongPlaying > 0) ? canPrev = true : canPrev = false;
    }


    return (
        <Modal
            visible={showDetailPlayer}
            animationType='slide'
        >
            <ImageBackground
                source={songPlaying?.song.image ?
                    { uri: songPlaying?.song.image }
                    : require('../../assets/images/default-song-avatar.jpeg')}
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
                                    <Text style={tw`text-2xl font-semibold text-white tracking-[.25]`}>{songPlaying?.song.name}</Text>
                                    <Text style={tw`text-white text-base`}>{songPlaying?.song.userName}</Text>
                                </View>
                            </View>

                            {/* IMAGE */}


                            <View style={tw`flex-1 w-full items-center justify-center`}>
                                <Image
                                    source={songPlaying?.song.image ? { uri: songPlaying.song.image } : require('../../assets/images/default-song-avatar.jpeg')}
                                    style={tw`h-75 w-75 rounded-xl`}
                                />
                            </View>


                            <View style={tw``}>
                                <View style={tw`flex flex-row items-center my-1 justify-around`}>

                                    {/* PREV SONG */}
                                    {
                                        canPrev ? (
                                            <TouchableOpacity
                                                style={tw`p-3 rounded-full `}
                                                activeOpacity={.5}
                                                onPress={handlePrevSong}
                                            >
                                                <AntDesign name='stepbackward'
                                                    size={23}
                                                    style={tw`text-white`}
                                                />
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity
                                                style={tw`p-3 rounded-full `}
                                                activeOpacity={.5}
                                                onPress={handlePrevSong}
                                            >
                                                <AntDesign name='stepbackward'
                                                    size={23}
                                                    style={tw`text-white opacity-20`}
                                                />
                                            </TouchableOpacity>
                                        )
                                    }


                                    {/* PLAY - PAUSE */}

                                    {
                                        statusPlayer == 'pause' ? (
                                            <TouchableOpacity
                                                style={tw`p-6 rounded-full bg-gray-900`}
                                                activeOpacity={.5}
                                                onPress={handlePlay}
                                            >
                                                <FontAwesome5 name='play'
                                                    size={30}
                                                    style={tw`text-white`}
                                                />
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity
                                                style={tw`p-6 rounded-full bg-gray-900`}
                                                activeOpacity={.5}
                                                onPress={handlePause}
                                            >
                                                <FontAwesome5 name='pause'
                                                    size={30}
                                                    style={tw`text-white`}
                                                />
                                            </TouchableOpacity>
                                        )
                                    }
                                    {/* NEXT SONG */}
                                    {
                                        canNext ? (
                                            <TouchableOpacity
                                                style={tw`p-3 rounded-full`}
                                                activeOpacity={.5}
                                                onPress={handleNextSong}
                                            >
                                                <AntDesign name='stepforward'
                                                    size={23}
                                                    style={tw`text-white`}
                                                />
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity
                                                style={tw`p-3 rounded-full`}
                                                activeOpacity={.5}
                                                onPress={handleNextSong}
                                            >
                                                <AntDesign name='stepforward'
                                                    size={23}
                                                    style={tw`text-white opacity-20`}
                                                />
                                            </TouchableOpacity>
                                        )
                                    }

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