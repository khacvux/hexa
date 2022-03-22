import { View, Text, Animated, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import tw from 'twrnc';

const Skeleton = ({ w, h, rounded, bg }) => {
    const opacity = useRef(new Animated.Value(0.3));
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacity.current, {
                    toValue: .8,
                    useNativeDriver: true,
                    duration: 700,
                }),
                Animated.timing(opacity.current, {
                    toValue: 0.2,
                    useNativeDriver: true,
                    duration: 550,
                }),
            ]),
        ).start();
    },[opacity])


    return (
        <Animated.View style={{opacity: opacity.current}}>
             <View style={[{width: w, height: h},tw`bg-[${bg}] rounded-[${rounded}]`]} />
        </Animated.View>
    )
}

export default Skeleton

// const styles = StyleSheet.create({
//     skeleton: {
//         backgroundColor: 'red',
//         width: 300,
//         height: 300
//     }
// })