import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import { playSong, setArraySongs, showPlayerBar } from '../../redux/actions/songsAction'
import SoundWaveAnimation from '../LottieAnimation/SoundWaveAnimation'



const MyPostedSongItem = ({ item, arraySongs, statusPlayer }) => {

    const dispatch = useDispatch();


    const handlePlay = () => {
        dispatch(setArraySongs(
            [{ song: item.item }]
        ))
        dispatch(showPlayerBar())
        dispatch(playSong())
    }

    return (
        <View
            style={tw`flex flex-row items-center bg-[#F5F7FA] p-2 rounded-lg my-1 justify-between`}
        >
            <View style={tw`flex flex-row items-center flex-1`}>
                <ImageBackground
                    source={item.item.image ? { uri: item.item.image } : require('../../assets/images/default-song-avatar.jpeg')}
                    style={tw`w-11 h-11 rounded mr-2 overflow-hidden items-center justify-center`}
                >
                    {
                        (arraySongs[0].song.songId == item.item.songId && statusPlayer == 'playing') ? (
                            <SoundWaveAnimation />
                        ) : <></>
                    }
                </ImageBackground>
                <Text style={tw`font-light tracking-[.2]`}
                    numberOfLines={1}
                >
                    {item.item.name}
                </Text>
            </View>
            <View style={tw`flex flex-row items-center `}>
                {
                    (arraySongs[0].song.songId == item.item.songId && statusPlayer == 'playing') ? (
                        <TouchableOpacity>
                            <Ionicons
                                name='pause'
                                size={22}
                                style={tw`text-[#5EC2EA] mx-2`}
                            />
                        </TouchableOpacity>

                    ) : (
                        <TouchableOpacity
                            onPress={handlePlay}
                        >
                            <FontAwesome5
                                name='play'
                                size={16}
                                style={tw`text-gray-400 mx-2`}
                            />
                        </TouchableOpacity>
                    )
                }
                <TouchableOpacity>
                    <FontAwesome5
                        name='heart'
                        size={18}
                        style={tw`text-gray-300 mr-4 ml-3`}
                    />
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default MyPostedSongItem