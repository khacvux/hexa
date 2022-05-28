import { Entypo, Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import tw from 'twrnc'
import { changeArraySongs, showlayerBar } from '../../redux/actions/songsAction';



const SongPost = ({dispatch, item}) => {
    const {width: SCREEN_WIDTH} = Dimensions.get('window');

    const FRAMESIZE_W = SCREEN_WIDTH;
    const FRAMESIZE_H = SCREEN_WIDTH*2/3;

    const [isHeart, setHeart] = useState('');


    const handlePlaySong = () => {
        dispatch(showlayerBar())
        dispatch(changeArraySongs([
            {
                image: item.item.image,
                name: item.item.name,
                song: item.item.song,
                songId: item.item.songId,
            }
        ]))

    }

    return (
        <View style={[tw`my-2.5 overflow-hidden w-full`]}>
            <TouchableOpacity 
                style={[tw`shadow-lg`, { height: FRAMESIZE_H}]}
                activeOpacity={.8}
                onPress={handlePlaySong}
            >
                <Image 
                    source={item.item.image ? {uri: item.item.image} : require('../../assets/images/default-song-avatar.jpeg')}
                    style={tw`w-full h-full bg-gray-600`}
                    resizeMode='cover'
                />

                <View style={tw` absolute bottom-1 left-1 right-1 flex flex-row items-center p-1`}>
                    <View>
                        <Image
                            source={require('../../assets/images/defaultAvatar.png')}
                            style={tw`w-11 h-11 rounded-full`}
                        />
                    </View>
                    <View style={tw`ml-2`}>
                        <View>
                            <Text style={tw`bg-black text-white px-1 text-lg`}>{item.item.name}</Text>
                        </View>
                        <View style={tw`flex flex-row`}>
                            <Text style={tw`leading-4 text-gray-300 bg-black px-1 pb-[3]`}>@Username</Text>
                        </View>
                        <View style={tw`flex flex-row items-center`}>
                            <Ionicons name='ios-play' size={12} style={tw`text-gray-300 bg-black h-4 pt-[2] pl-1`}/>
                            <Text style={tw`text-xs text-gray-300 bg-black h-4 pr-1`}> {item.item.songFeelList.length}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={tw`flex flex-row items-center justify-between px-3`}>
                <View style={tw`flex flex-row items-center`}> 
                    <TouchableOpacity
                        activeOpacity={.7}
                        style={tw`my-1 items-center flex-row`}
                    >
                        <Ionicons name="heart-outline"
                            style={isHeart ? tw`text-2xl text-[#ED4366]` : tw`text-2xl text-white` }
                        />
                        <Text style={tw`text-white ml-1`}>{item.item.songFeelList.length}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={.7}
                        style={tw`mx-4 flex-row items-center`}
                    >
                        <Ionicons name="chatbubble-ellipses-outline" 
                            style={tw`text-2xl text-[#FEFEFD] `}
                        />
                        <Text style={tw`text-white text-center ml-1`}>{item.item.songCommentList.length}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={.7}
                    >
                        <Ionicons name="md-share-social-outline"
                            style={tw`text-[#FEFEFD] my-2 text-xl`}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Entypo name="dots-three-horizontal" 
                        size={16}
                        style={tw`text-gray-300`}
                    />    
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default SongPost