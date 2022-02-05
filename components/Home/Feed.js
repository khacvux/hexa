import React, { useEffect, useRef, useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView, Dimensions, PixelRatio, StyleSheet } from 'react-native'
import tw from 'twrnc'
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import RBSheet from "react-native-raw-bottom-sheet";
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';


import Comments from '../Comments/Comments';
import WriteComment from '../Comments/WriteComment';
import { TapGestureHandler } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window')


const Feed = (props) => {
    const refRBSheet = useRef();
    const navigation = useNavigation();
    const {images, heart, name, postId, userName, body, avtUser, comments, liked} = props;
    const [isHeart, setHeart] = useState(liked);
    const [sound, setSound] = useState();

    const { width, height } = Dimensions.get('window');
    PixelRatio.getPixelSizeForLayoutSize(width);


    async function playSound() {
        // console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
           require('../../assets/soundEffects/likeSound.mp3')
        );
        setSound(sound);
    
        // console.log('Playing Sound');
        await sound.playAsync(); }
    
      useEffect(() => {
        return sound
          ? () => {
            //   console.log('Unloading Sound');
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);
    
    const handlePressHeart = () => {
        setHeart(!isHeart);
        playSound()
    }

    // onchange = (nativeEvent) => {

    // }
    

    return (
     
        <View
            style={tw`w-full h-150 mb-2 overflow-hidden flex`}
        >
            <View style={tw`w-full h-150 `}>
                <ScrollView
                    style={tw`w-full h-150`}
                    // onScroll={({nativeEvent}) => onchange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                >
                    {
                        images.map((image, index) => {
                            return(
                                <TapGestureHandler
                                    key={index} 
                                    style={tw`flex-1 w-full h-150 mb-5`}
                                    numberOfTaps={2}
                                    onActivated={ handlePressHeart }    
                                >
                                    <Image style={styles.image} source={{ uri: image }} resizeMode='cover' />
                                </TapGestureHandler>
                            )
                        })
                            
                    }
                </ScrollView>
            </View>
            <BlurView 
                intensity={30} tint="light"
                style={tw`absolute top-2 left-2 px-3 w-12 mt-1 flex items-center py-1 rounded-lg overflow-hidden` }
            >
                <Text style={tw`text-white text-xs`}>2/2</Text>
            </BlurView>

            <View style={tw`absolute right-2 top-40 flex  items-center justify-end`}>
                <BlurView 
                    intensity={30} tint="light"
                    style={tw`mr-1 w-12 py-1 flex flex-col items-center overflow-hidden rounded-lg overflow-hidden` }>
                    <TouchableOpacity
                        activeOpacity={.7}
                        style={tw`my-1 items-center`}
                        onPress={handlePressHeart}
                    >
                        <Ionicons name="heart"
                            style={isHeart ? tw`text-2xl text-[#ED4366]` : tw`text-2xl text-white` }
                        />
                        <Text style={isHeart ? tw`text-white` : tw`text-white`}>{heart}</Text>
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
                style={tw`w-full h-50 p-3 absolute bottom-0 right-0 left-0 flex flex-col px-4 justify-end`}
            >   
                <TouchableOpacity
                    onPress={() => navigation.navigate('ProfileStack')}
                    style={tw`flex flex-row items-center`}
                >
                    <Image source={{uri: avtUser}} 
                        style={tw`w-9 h-9 rounded-full mr-2`}
                    />
                <Text style={tw`font-bold text-white`}>{name}</Text>
                </TouchableOpacity>

                <Text style={tw`text-white my-3`}>
                    {body}
                </Text>
            </LinearGradient>
            <RBSheet
                ref={refRBSheet}
                // closeOnDragDown={true}
                closeOnPressMask={true}
                height={520}
                openDuration={150}
                customStyles={{
                    wrapper: tw`bg-black bg-opacity-30`,
                    container: tw`bg-gray-100 pt-3 rounded-t-lg flex flex-col justify-between`
                }}
            >   
                <ScrollView 
                    contentContainerStyle={tw`flex-1 pt-3 flex flex-col px-4`}
                >
                    {comments.map((comment) => {
                        return (
                            <Comments 
                                key={comment.idComment} 
                                userName={comment.userName} 
                                name={comment.name} 
                                comment={comment.comment} 
                                date={comment.date} 
                                avt={comment.avt} 
                            />
                        )
                    })}
                </ScrollView>
                <WriteComment />
            </RBSheet>
        </View>
    )
}

export default Feed

const styles = StyleSheet.create({
    image: {
        width: width,
        height: height,
    },
})