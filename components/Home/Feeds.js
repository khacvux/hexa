import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, Image, Animated, FlatList, Dimensions } from 'react-native'
import tw, { useDeviceContext } from 'twrnc'
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
import { useDispatch } from 'react-redux';
import { getListCommentOfPost, reactPost } from '../../redux/actions/postsAction';
import ListCommentOfPost from '../Comments/ListCommentOfPost';




const Feeds = ({post, token, userId}) => {

    const dispatch = useDispatch();

    useDeviceContext(tw);
    const {width: SCREEN_WIDTH} = Dimensions.get('window');
    // frame size 3:2
    const FRAMESIZE_W = SCREEN_WIDTH;
    const FRAMESIZE_H = SCREEN_WIDTH/2*3;

    const refRBSheet = useRef();
    const navigation = useNavigation();

    const [isHeart, setHeart] = useState(post.item.feel);
    const [isTotalFeel, setTotalFeel] = useState(post.item.totalFeel)
    const [sound, setSound] = useState();

    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesRef = useRef(null);
    const date = new Date( Date.parse(post.item.dateCreate));


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
        await sound.playAsync(); 
    }
    
      useEffect(() => {
        return sound
          ? () => {
            //   console.log('Unloading Sound');
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);
    
    const handlePressHeart = () => {
        playSound()
        setHeart(!isHeart);
        dispatch(reactPost({
            token,
            tusId: post.item.postsId,
            userId
        }))
        isHeart ? setTotalFeel(isTotalFeel - 1) : setTotalFeel(isTotalFeel + 1)
    }    

    const handlePressComment = () => {
        refRBSheet.current.open()
        dispatch(getListCommentOfPost({
            postsId: post.item.postsId,
            token,
        }))
    }

    const handleGetProfile = () => {
        navigation.navigate('ProfileStack', {
            myUserId: userId,
            userId: post.item.postsUserList[0].userId 
        })
    }

    return (
     
        <View
            style={[tw`mb-2 overflow-hidden flex bg-gray-100`, { width: FRAMESIZE_W, height: FRAMESIZE_H}]}
        >
            <View style={tw`w-full h-full `}>
                <TapGestureHandler 
                    style={tw`flex-1 w-full h-full mb-5`}
                    numberOfTaps={2}
                    onActivated={ handlePressHeart }   
                >
                    <FlatList
                        data={post.item.postsImageList}
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
                        <Text style={tw`text-white`}>{isTotalFeel}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={.7}
                        onPress={handlePressComment}
                    >
                        <Ionicons name="chatbubble-ellipses" 
                            style={tw`text-2xl text-[#FEFEFD] my-2`}
                        />
                        <Text style={tw`text-white text-center`}>{post.item.totalComment}</Text>
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
                <View style={tw`flex flex-row`}>
                    <TouchableOpacity
                        onPress={handleGetProfile}
                        style={tw`flex flex-row items-center px-4 mb-3`}
                    >
                        <Image source={ post.item.postsUserList[0].image ? {uri: post.item.postsUserList[0].image} : require('../../assets/images/defaultAvatar.png')} 
                            style={tw`w-9 h-9 rounded-full mr-2`}
                        />
                        <View>
                            <Text style={tw`font-bold text-white text-base`}>{post.item.postsUserList[0].name}</Text>  
                            <Text style={[{fontSize: 11 }, tw`text-gray-200 mb-1 mx-1 font-light`]}>{date.toLocaleDateString()}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    // onPress={() => navigation.navigate('DetailFeedsStack', {
                    //     post: post.item
                    // })}
                >
                    <Text style={tw`text-white px-5 w-95/100`}
                        numberOfLines={3}
                    >
                        {post.item.caption}
                    </Text>
                </TouchableOpacity>
{/* 
                {(post.item.images.length > 1) ? (
                    <Paginator data={post.item.images} scrollX={scrollX} />
                ) : (
                    <></>
                )}
                */}
            </LinearGradient>

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={520}
                openDuration={250}
                customStyles={{
                    wrapper: tw`bg-black bg-opacity-30`,
                    container: tw`bg-gray-100 rounded-t-lg flex flex-col`
                }}
            >   
                <View
                    style={tw`flex-1 flex flex-col w-full`}
                >
                    <ListCommentOfPost refRBSheet={refRBSheet} />
                </View>
                
                <View style={tw`mb-2 w-full`} >
                    <WriteComment postsId={post.item.postsId} />    
                </View>
            </RBSheet>
        </View>
    )
}

export default Feeds
