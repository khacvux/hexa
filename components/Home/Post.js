import React, { useRef, useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import tw from 'twrnc'
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import RBSheet from "react-native-raw-bottom-sheet";
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';


import Comments from '../Comments/Comments';
import WriteComment from '../Comments/WriteComment';



const Post = (post) => {
    const refRBSheet = useRef();
    const navigation = useNavigation();
    const {image, heart, name, postId, userName, body, avtUser, comments} = post;
    const [isHeart, setHeart] = useState(false);
    const [sound, setSound] = React.useState();
    
    async function playSound() {
        // console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
           require('../../assets/soundEffects/likeSound.mp3')
        );
        setSound(sound);
    
        // console.log('Playing Sound');
        await sound.playAsync(); }
    
      React.useEffect(() => {
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
      

    return (
     
        <ImageBackground
            source={{uri: image}}
            style={tw`w-full h-145 mb-1 overflow-hidden flex flex-col justify-end`}
        >
               {/* {data ? console.log(data.reset) : console.log('no')} */}
            <View style={tw`flex-1 flex flex-row items-center justify-end`}>
                <BlurView 
                    intensity={30} tint="light"
                    style={tw`mr-2 px-3 py-1 flex flex-col items-center overflow-hidden rounded-lg overflow-hidden` }>
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
                style={tw`w-full h-50 p-3 flex flex-col px-4 justify-end`}
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
        </ImageBackground>
    )
}

export default Post
