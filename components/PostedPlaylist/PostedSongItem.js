import { FontAwesome5 } from '@expo/vector-icons'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import tw from 'twrnc'


const PostedSongItem = ({item}) => {
    return (
        <View
            style={tw`flex flex-row items-center bg-[#F5F7FA] p-2 rounded-lg my-1 justify-between`}
        >
            <View style={tw`flex flex-row items-center flex-1`}>
                <ImageBackground
                    source={item.item.image ? { uri: item.item.image } : require('../../assets/images/default-song-avatar.jpeg')}
                    style={tw`w-11 h-11 rounded mr-2 overflow-hidden items-center justify-center`}
                >
                    {/* <SoundWaveAnimation /> */}
                </ImageBackground>
                <Text style={tw`font-light tracking-[.2]`}
                    numberOfLines={1}
                >
                    {item.item.name}
                </Text>
            </View>
            <View style={tw`flex flex-row items-center `}>
                <TouchableOpacity>
                    <FontAwesome5
                        name='play'
                        size={18}
                        style={tw`text-[#5EC2EA] mx-2`}
                    />
                </TouchableOpacity>
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

export default PostedSongItem