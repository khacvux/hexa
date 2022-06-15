import { Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { View, Text, Modal, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { Audio } from 'expo-av'


import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { convertTime } from '../../misc/helper'
import Slider from '@react-native-community/slider'
import { autoNextSong, nextSong, pauseSong, playSong, prevSong } from '../../redux/actions/songsAction'
import ImagePlayer from '../Player/ImagePlayer'
import ButtonPlayer from '../Player/ButtonPlayer'
import { useDebounce } from '../../hooks/index'



const DetailPlayerModal = ({ showDetailPlayer, setShowDetailPlayer, songPlaying }) => {

    const dispatch = useDispatch()

    const { statusPlayer, arraySongs, indexSongPlaying, loopSong } = useSelector(state => state.songReducer)


    const [song, setSong] = useState()
    const [statusSong, setStatusSong] = useState(0)
    const [currentPosition, setCurrentPosition] = useState(0);

    const [canNext, setCanNext] = useState()
    const [canPrev, setCanPrev] = useState()


    const handlePause = () => dispatch(pauseSong())
    const handlePlay = () => dispatch(playSong())
    const handleNextSong = () => dispatch(nextSong())
    const handlePrevSong = () => dispatch(prevSong())



    const calculateSeekBar = () => {
        if (!isNaN(statusSong.positionMillis)) {
            return statusSong.positionMillis / statusSong.durationMillis;
        }
        return 0;
    };




    //LOADING AUDIO
    useEffect(async () => {
        console.log('reload sound')
        const song = new Audio.Sound()
        await song.loadAsync(
            // Source
            { uri: songPlaying.song.song },
            // Initial status
            { shouldPlay: true, progressUpdateIntervalMillis: 100 },
            // Download first
            true,
        );
        song.setStatusAsync({ progressUpdateIntervalMillis: 500 });
        song.setOnPlaybackStatusUpdate((playbackStatus) => {
            if (playbackStatus) {
                setStatusSong(playbackStatus)
                if(playbackStatus.didJustFinish && canNext){
                    dispatch(autoNextSong())
                }
            }
        });
        setSong(song)

        if (arraySongs) {
            (arraySongs.length > indexSongPlaying + 1) ? setCanNext(true) : setCanNext(false);
            (indexSongPlaying > 0) ? setCanPrev(true) : setCanPrev(false);
        }
    }, [indexSongPlaying, arraySongs])


    // PLAY - PAUSE
    useEffect(() => {
        if (song?._loaded) {
            if (statusPlayer == 'playing') {
                song.playAsync()
            } else if (statusPlayer == 'pause') {
                song.pauseAsync()
            }
        } else handlePause()
    }, [statusPlayer])


    // CLEAN UP AUDIO
    useEffect(() => {
        console.log('clean up')
        return song ? () => { song.unloadAsync() } : undefined
    }, [song, arraySongs])


    //LOOP SONG
    useEffect(() => {
        if (song) song.setIsLoopingAsync(loopSong)
        return 0;
    }, [loopSong])




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
                    intensity={80}
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
                            <ImagePlayer
                                songPlaying={songPlaying}
                            />



                            <View style={tw``}>
                                <View style={tw`w-full items-center mb-4`}>
                                    <Text style={tw`text-xl text-white tracking-[.25]`}>{songPlaying?.song.name}</Text>
                                    <Text style={tw`text-white text-sm font-light`}>{songPlaying?.song.userName}</Text>
                                </View>

                                {/* PLAYER BUTTON */}
                                <View style={tw`flex flex-row items-center justify-between px-8`}>
                                    <Text style={tw`text-white mx-3 w-10`}>
                                        {statusSong && !isNaN(statusSong.positionMillis) ? convertTime(statusSong.positionMillis) : '00:00'}
                                    </Text>
                                    {/* PREV SONG */}
                                    {
                                        canPrev ? (
                                            <TouchableOpacity
                                                style={tw`p-1 rounded-full `}
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
                                                style={tw`p-1 rounded-full `}
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
                                                style={tw`w-13 h-13 items-center justify-center rounded-full border border-white mx-7`}
                                                activeOpacity={.5}
                                                onPress={handlePlay}
                                            >
                                                <FontAwesome5 name='play'
                                                    size={20}
                                                    style={tw`text-white ml-[5]`}
                                                />
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity
                                                style={tw`w-13 h-13 items-center justify-center rounded-full border border-white mx-7`}
                                                activeOpacity={.5}
                                                onPress={handlePause}
                                            >
                                                <FontAwesome5 name='pause'
                                                    size={20}
                                                    style={tw`text-white`}
                                                />
                                            </TouchableOpacity>
                                        )
                                    }


                                    {/* NEXT SONG */}
                                    {
                                        canNext ? (
                                            <TouchableOpacity
                                                style={tw`p-1 rounded-full`}
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
                                                style={tw`p-1 rounded-full`}
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
                                    <Text style={tw`text-white mx-3 w-10`}>
                                        {statusSong && !isNaN(statusSong.durationMillis) ? convertTime(statusSong.durationMillis) : '00:00'}
                                    </Text>

                                </View>

                                {/* SLIDER */}

                                <View style={tw`mt-3 px-5`}>
                                    <Slider
                                        style={tw``}
                                        value={calculateSeekBar()}
                                        minimumValue={0}
                                        maximumValue={1}
                                        thumbTintColor='#1C1D2B'
                                        minimumTrackTintColor='#1C1D2B'
                                        maximumTrackTintColor='#F5F7FA'
                                        onValueChange={value => setCurrentPosition(value * statusSong.durationMillis)}
                                        onSlidingComplete={() =>
                                            song.setPositionAsync(currentPosition)
                                        }
                                    />

                                </View>
                            </View>


                            {/* ------------------------------ */}

                            <ButtonPlayer songId={songPlaying?.song.songId} />
                        </View>

                    </SafeAreaView>
                </BlurView>
            </ImageBackground>
        </Modal>
    )
}

export default DetailPlayerModal