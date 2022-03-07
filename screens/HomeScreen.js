import React, { useEffect, useState, useRef } from 'react'
import { SafeAreaView, FlatList, Animated, View } from 'react-native'
import tw, { useDeviceContext } from 'twrnc'
import { posts } from '../data';

import Feeds from '../components/Home/Feeds';
import Header from '../components/Header/Header';
// import SkeletonFeeds from '../components/Home/SkeletonFeeds';

const HomeScreen = () => {



    useDeviceContext(tw)
    const CONTAINER_HEIGHT = 40;
    const scrollY = useRef(new Animated.Value(0)).current;
    const offsetAnim = useRef(new Animated.Value(0)).current;

    const clampedScroll = Animated.diffClamp(
        Animated.add(
            scrollY.interpolate({
                inputRange: [0 ,1],
                outputRange: [0, 1],
                extrapolateLeft: 'clamp',
            }),
            offsetAnim,
        ),
        0,
        CONTAINER_HEIGHT
    )

    var _clampedScrollValue = 0;
    var _offsetValue = 0;
    var _scrollValue = 0;

    useEffect(() => {
        scrollY.addListener(({value}) => {
            const diff = value - _scrollValue;
            _scrollValue = value;
            _clampedScrollValue = Math.min(
                Math.max(_clampedScrollValue * diff, 0),
                CONTAINER_HEIGHT,
            )
        });
        offsetAnim.addListener(({value}) => {
            _offsetValue = value;
        })
    }, []);
    
    var scrollEndTimer = null;
    const onMomentumScrollBegin = () => {
        clearTimeout(scrollEndTimer);
    };
    const onMomentumScrollEnd = () => {
        const toValue = _scrollValue > CONTAINER_HEIGHT && _clampedScrollValue > CONTAINER_HEIGHT / 2
            ? _offsetValue + CONTAINER_HEIGHT : _offsetValue - CONTAINER_HEIGHT;
        
        Animated.timing(offsetAnim, {
            toValue, 
            duration: 300,
            useNativeDriver: true
        }).start();
    };
    const onScrollEndDrag = () => {
        scrollEndTimer = setTimeout(onMomentumScrollEnd, 250);
    }

    const headerTranslate = clampedScroll.interpolate({
        inputRange: [0, CONTAINER_HEIGHT],
        outputRange: [0, -CONTAINER_HEIGHT],
        extrapolate: 'clamp'
    })

    

    return (
        <SafeAreaView style={tw`bg-white h-full dark:bg-black`}>
            <View style={tw`h-full overflow-hidden flex`}>
                <Animated.View style={[tw`absolute top-0 left-0 right-0 z-50`,{height: CONTAINER_HEIGHT}, {transform: [{translateY: headerTranslate}]}]}>
                    <Header />
                </Animated.View>
                <Animated.FlatList
                    data={posts}
                    renderItem={(post) => {
                        return <Feeds post={post} />
                    }}
                    keyExtractor={post => post.postId}
                    contentContainerStyle={[tw`py-2 pt-[${CONTAINER_HEIGHT}]`]}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {y: scrollY}}}],
                        {useNativeDriver: true}
                    )}
                    onMomentumScrollBegin={onMomentumScrollBegin}
                    onMomentumScrollEnd={onMomentumScrollEnd}
                    onScrollEndDrag={onScrollEndDrag}
                    scrollEventThrottle={1}
                />
                {/* <SkeletonFeeds /> */}
            </View>

           
        </SafeAreaView>
    )
}

export default HomeScreen
