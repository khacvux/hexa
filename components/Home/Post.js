import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import tw from 'twrnc'
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';


const Post = () => {
    return (
        <ImageBackground
            source={require('../../assets/images/post_1.png')}
            style={tw`w-full h-130 mb-2 rounded-xl overflow-hidden flex flex-col justify-end`}
        >
            <View style={tw`flex-1 flex flex-row items-center justify-end`}>
                <View style={tw`bg-white bg-opacity-50 rounded-md mr-2 px-3 py-1 flex flex-col items-center`}>
                    <TouchableOpacity
                        activeOpacity={.7}
                    >
                        <Ionicons name="heart"
                            style={tw`text-2xl text-[#ED4366] my-2`}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={.7}
                    >
                        <Ionicons name="chatbubble-ellipses" 
                            style={tw`text-2xl text-[#FEFEFD] my-2`}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={.7}
                    >
                        <FontAwesome name="send"
                            style={tw`text-xl text-[#FEFEFD] my-2`}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <LinearGradient
                colors={['rgba(0, 0, 0, 0.0003)', 'rgba(0, 0, 0, 0.55)']}
                style={tw`w-full h-50 p-3 flex flex-col px-4 justify-end`}
            >   
                <View style={tw`flex flex-row items-center`}>
                    <Image source={require('../../assets/images/avt_3.png')} 
                        style={tw`w-9 h-9 rounded-full mr-1`}
                    />
                    <Text style={tw`font-bold text-white`}>Michelle Jonas</Text>
                </View>
                <Text style={tw`text-white mt-3 ml-2`}>
                    This is bruh bruh...
                    Am so lmao
                </Text>
            </LinearGradient>
        </ImageBackground>
    )
}

export default Post
