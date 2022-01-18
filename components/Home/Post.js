import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 
import LinearGradient from 'react-native-linear-gradient';


const Post = () => {
    return (
        <ImageBackground
            source={require('../../assets/images/post_1.png')}
            style={tw`w-full h-130 my-2 rounded-xl overflow-hidden flex flex-col justify-end`}
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
            
            <LinearGradient colors={['#fff', '#000']} 
                style={tw`w-full h-40 bg-gradient-to-t from-black to-white p-3`}
            >
               
            </LinearGradient>
        </ImageBackground>
    )
}

export default Post
