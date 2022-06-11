import { AntDesign, Entypo, FontAwesome5, Ionicons, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Modal, ImageBackground, SafeAreaView, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native'
import tw from 'twrnc'


import Slider from '@react-native-community/slider'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { nextSong, pauseSong, playSong, prevSong } from '../../redux/actions/songsAction'
import { Audio } from 'expo-av'


const DetailPlayerModal = ({ showDetailPlayer, setShowDetailPlayer, songPlaying }) => {

    const { statusPlayer, arraySongs, indexSongPlaying } = useSelector(state => state.songReducer)
    const dispatch = useDispatch()
    const { width: SCREEN_WIDTH } = Dimensions.get('window')

    const [canNext, setCanNext] = useState()
    const [canPrev, setCanPrev] = useState()
    const [song, setSong] = useState()


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



    //LOADING AUDIO
    useEffect(async () => {
        console.log('reload sound')
        const song = new Audio.Sound()
        await song.loadAsync(
            // Source
            { uri: songPlaying.song.song },
            // Initial status
            { shouldPlay: false },
            // Download first
            true,
        );
        setSong(song)

        if (arraySongs) {
            (arraySongs.length > indexSongPlaying + 1) ? setCanNext(true) : setCanNext(false);
            (indexSongPlaying > 0) ? setCanPrev(true) : setCanPrev(false);
        }
    }, [indexSongPlaying, arraySongs])

    // PLAY - PAUSE
    useEffect(() => {
        if(song) {
            if (statusPlayer == 'playing') {
                setTimeout(() => song.playAsync(), 1000)
            } else if (statusPlayer == 'pause' ) {
                song.pauseAsync()
            }
        } else handlePause()
    }, [statusPlayer])


    // CLEAN UP AUDIO
    useEffect(() => {
        console.log('clean up')
        return song ? () => { song.unloadAsync() } : undefined
    }, [song, arraySongs])


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
                        <View style={tw`flex flex-col h-full justify-end`} >
                            <View style={tw`items-center my-3 px-5`}>
                                <TouchableOpacity
                                    style={tw`p-2 rounded-full`}
                                    onPress={() => setShowDetailPlayer(!showDetailPlayer)}
                                >
                                    <Entypo
                                        name='chevron-thin-down'
                                        size={25}
                                        style={tw`text-white`}
                                    />
                                </TouchableOpacity>
                            </View>

                            {/* IMAGE */}


                            <View style={tw`flex-1 w-full items-center justify-start my-2`}>
                                <Image
                                    source={songPlaying?.song.image ? { uri: songPlaying.song.image } : require('../../assets/images/default-song-avatar.jpeg')}
                                    style={[tw`rounded-xl`, { width: SCREEN_WIDTH - 100, height: SCREEN_WIDTH - 100 }]}
                                />
                            </View>


                            <View style={tw``}>

                                <View style={tw`w-full items-center mb-4`}>
                                    <Text style={tw`text-xl text-white tracking-[.25]`}>{songPlaying?.song.name}</Text>
                                    <Text style={tw`text-white text-sm font-light`}>{songPlaying?.song.userName}</Text>
                                </View>

                                {/* PLAYER BUTTON */}
                                <View style={tw`flex flex-row items-center justify-center`}>
                                    {/* PREV SONG */}
                                    {
                                        canPrev ? (
                                            <TouchableOpacity
                                                style={tw`p-3 rounded-full `}
                                                activeOpacity={.5}
                                                onPress={handlePrevSong}
                                            >
                                                <MaterialCommunityIcons name='skip-previous-outline'
                                                    size={30}
                                                    style={tw`text-white`}
                                                />
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity
                                                style={tw`p-3 rounded-full `}
                                                activeOpacity={.5}
                                                onPress={handlePrevSong}
                                            >
                                                <MaterialCommunityIcons name='skip-previous-outline'
                                                    size={30}
                                                    style={tw`text-white opacity-20`}
                                                />

                                            </TouchableOpacity>
                                        )
                                    }


                                    {/* PLAY - PAUSE */}

                                    {
                                        statusPlayer == 'pause' ? (
                                            <TouchableOpacity
                                                style={tw`w-16 h-16 items-center justify-center rounded-full bg-[#1C1D2B] mx-15`}
                                                activeOpacity={.5}
                                                onPress={handlePlay}
                                            >
                                                <FontAwesome5 name='play'
                                                    size={27}
                                                    style={tw`text-white ml-[5]`}
                                                />
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity
                                                style={tw`w-16 h-16 items-center justify-center rounded-full bg-[#1C1D2B] mx-15`}
                                                activeOpacity={.5}
                                                onPress={handlePause}
                                            >
                                                <FontAwesome5 name='pause'
                                                    size={27}
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
                                                <MaterialCommunityIcons name='skip-next-outline'
                                                    size={30}
                                                    style={tw`text-white`}
                                                />
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity
                                                style={tw`p-3 rounded-full`}
                                                activeOpacity={.5}
                                                onPress={handleNextSong}
                                            >
                                                <MaterialCommunityIcons name='skip-next-outline'
                                                    size={30}
                                                    style={tw`text-white opacity-20`}
                                                />
                                            </TouchableOpacity>
                                        )
                                    }

                                </View>

                                {/* SLIDER */}
                                <View style={tw`mt-3 px-5`}>
                                    <Slider
                                        style={tw``}
                                        value={0}
                                        minimumValue={0}
                                        maximumValue={10}
                                        thumbTintColor='#1C1D2B'
                                        minimumTrackTintColor='#1C1D2B'
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
                                    <Ionicons name='heart-outline' size={25} style={tw`mx-1 text-white`} />
                                    {/* <Text style={tw`font-bold text-white`}>2342</Text> */}
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={tw`flex flex-row flex-1 items-center justify-center`}
                                >
                                    <Ionicons name='chatbubble-ellipses-outline' size={26} style={tw`mx-1 text-white`} />
                                    {/* <Text style={tw`font-bold text-white`}>2342</Text> */}
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={tw`flex-1 items-center`}
                                >
                                    <Ionicons name='md-share-social-outline' size={25} style={tw`mx-1 text-white`} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={tw`flex-1 items-center`}
                                >
                                    <SimpleLineIcons name='loop' size={25} style={tw`mx-1 text-white`} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={tw`flex-1 items-center`}
                                >
                                    <Entypo name='dots-three-horizontal' size={22} style={tw`mx-1 text-white`} />
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