import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

const SortByTime = (props) => {
    const { notification } = props;
    // const [status, setStatus]  = useState(notification.status)
    var bgNotify;

    notification.status ? bgNotify = '#A7E5EA' : bgNotify = '#fff'
    
    const ITEM_HEIGHT = 65;
    const MARGIN_BOTTOM = 2;
    const WIDTH_DELETE_BTN = 120;
    const {width: SCREEN_WIDTH} = Dimensions.get('window');
    const TRANSLATE_THRESHOLD = -SCREEN_WIDTH * .4;
    // console.log(TRANSLATE_THRESHOLD/2)

    const translateX = useSharedValue(0);
    const itemHeight = useSharedValue(ITEM_HEIGHT)
    const mb = useSharedValue(MARGIN_BOTTOM)

    const panGesture = useAnimatedGestureHandler({
        onActive: (event) => {
            translateX.value = event.translationX
        },
        onEnd: () => {
            const shouldBeDismissed = translateX.value < TRANSLATE_THRESHOLD;
            const shouldBeShowBtn = translateX.value < TRANSLATE_THRESHOLD/2;

            if(shouldBeShowBtn) {
                translateX.value = withTiming(-WIDTH_DELETE_BTN)
            }
            else if(shouldBeDismissed){
                translateX.value = withTiming(-SCREEN_WIDTH)
                itemHeight.value = withTiming(0)
                mb.value = withTiming(0)
                
            } else {
                translateX.value = withTiming(0)
            }
        }
    });

    const rStyle = useAnimatedStyle(() => ({
        transform: [{
            translateX: translateX.value,
        }]
    }))
    
    const rOpacity = useAnimatedStyle(() => {
        const opacity = withTiming(
            translateX.value < TRANSLATE_THRESHOLD ? 0 : 1
            )
            return { opacity };
        })
        
    const rTaskContainerStyle = useAnimatedStyle(() => {
        return { height: itemHeight.value, marginBottom: mb.value };
    })

        
    return (

        <Animated.View style={[tw` flex items-center justify-center`, rTaskContainerStyle, rOpacity]}>
            <PanGestureHandler
                onGestureEvent={panGesture}
            >
                <Animated.View style={[tw` w-full h-full flex flex-row`, rStyle]}>
                    <View style={tw`flex flex-row items-center bg-[${bgNotify}] w-full h-full px-5 z-10`}>
                        <Image
                            source={{uri: notification.avt }} 
                            style={tw`w-12 h-12 rounded-full`}
                        />
                        <View style={tw` flex-1 flex flex-col ml-3`}>
                            <Text style={tw`text-base`}
                                numberOfLines={2}
                            >
                                <Text style={tw`font-bold`} >{notification.userName} </Text>
                                {notification.title}
                            </Text>
                            <Text style={tw`font-light text-xs`}>{notification.date}</Text>
                        </View>

                    </View>
                    <Animated.View style={[tw`bg-[#dc143c] flex items-start justify-center h-full w-full`]}>
                        <View style={[tw` border border-2 border-white border-t-0 border-b-0 h-full flex items-center justify-center`, {width: WIDTH_DELETE_BTN}]}>
                            <Ionicons name='ios-trash-bin-outline' style={tw`text-xl text-white`}/>

                        </View>
                    </Animated.View>
                </Animated.View>

            </PanGestureHandler>
        </Animated.View>

  );
};

export default SortByTime
