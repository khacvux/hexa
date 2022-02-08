import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, Image, Animated, FlatList } from 'react-native'
import tw from 'twrnc'
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import RBSheet from "react-native-raw-bottom-sheet";
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
import { TapGestureHandler } from 'react-native-gesture-handler';


import Comments from '../Comments/Comments';
import WriteComment from '../Comments/WriteComment';
import ImageItem from './ImageItem';
import Paginator from './Paginator';




const Feeds = (props) => {
    const refRBSheet = useRef();
    const navigation = useNavigation();
    const { post } = props;
    const [isHeart, setHeart] = useState(post.item.liked);
    const [sound, setSound] = useState();

    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;



    // console.log(post.item.comments)
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

    return (
     
        <View
            style={tw`w-full h-150 mb-2 overflow-hidden flex`}
        >
            <View style={tw`w-full h-150 `}>
                <TapGestureHandler 
                    style={tw`flex-1 w-full h-150 mb-5`}
                    numberOfTaps={2}
                    onActivated={ handlePressHeart }   
                >
                    <FlatList
                        data={post.item.images}
                        renderItem={ ({item}) => {
                            return <ImageItem image={item} />
                        }}
                        keyExtractor={item => item}
                        pagingEnabled
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        bounces={false} 
                        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}],{
                            useNativeDriver: false,
                        })}
                        scrollEventThrottle={32}
                        onViewableItemsChanged={viewableItemsChanged}
                        viewabilityConfig={viewConfig}
                        ref={slidesRef}
                    />
                </TapGestureHandler>
            </View>
            
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
                        <Text style={isHeart ? tw`text-white` : tw`text-white`}>{post.item.heart}</Text>
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
                style={tw`w-full h-45 py-3 absolute bottom-0 right-0 left-0 flex flex-col justify-end z-0`}
            >   
                <TouchableOpacity
                    onPress={() => navigation.navigate('ProfileStack')}
                    style={tw`flex flex-row items-center px-4`}
                >
                    <Image source={{uri: post.item.avt}} 
                        style={tw`w-9 h-9 rounded-full mr-2`}
                    />
                <Text style={tw`font-bold text-white`}>{post.item.name}</Text>
                </TouchableOpacity>

                <Text style={tw`text-white my-3 px-5`}>
                    {post.item.body}
                </Text>

                {(post.item.images.length > 1) ? (
                    <Paginator data={post.item.images} scrollX={scrollX} />
                ) : (
                    <Text style={tw`absolute`}/>
                )}
               
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
                <FlatList 
                    contentContainerStyle={tw`flex-1 pt-3 flex flex-col px-4`}
                    data={post.item.comments}
                    renderItem={(comment) => {
                        return <Comments
                            comment={comment}
                        />
                    }}
                    keyExtractor={comment => comment.idComment}
                />
                <WriteComment />
            </RBSheet>
        </View>
    )
}

export default Feeds
