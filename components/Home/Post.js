import React, { useRef } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import tw from 'twrnc'
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import RBSheet from "react-native-raw-bottom-sheet";
import Comments from '../Comments/Comments';


const Post = () => {
    const refRBSheet = useRef();

    return (
        <ImageBackground
            source={require('../../assets/images/post_1.png')}
            style={tw`w-full h-135 mb-2 rounded-xl overflow-hidden flex flex-col justify-end`}
        >
            <View style={tw`flex-1 flex flex-row items-center justify-end`}>
                <BlurView 
                    intensity={55} tint="light"
                    style={tw`rounded-md mr-2 px-3 py-1 flex flex-col items-center overflow-hidden`}>
                    <TouchableOpacity
                        activeOpacity={.7}
                    >
                        <Ionicons name="heart"
                            style={tw`text-2xl text-[#ED4366] my-2`}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={.7}
                        onPress={() => refRBSheet.current.open()}
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
                </BlurView>
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
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={520}
                openDuration={150}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                }}
            >
                <Comments />
            </RBSheet>
        </ImageBackground>
    )
}

export default Post
