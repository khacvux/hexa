import { View, useWindowDimensions, Animated } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Paginator = ({data, scrollX}) => {

    const { width } = useWindowDimensions();

    return (
        <View style={tw`flex flex-row h-4 w-full absolute bottom-0 left-0 right-0 items-center justify-center z-50`}>
            {
                data.map((_, i) => {
                    const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [5, 10, 5],
                        // extrapolate: 'clamp'
                    })

                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [.3, 1, .3],
                    })
                    return <Animated.View style={[{width: dotWidth, opacity},tw`h-[.9] mx-1 rounded-full bg-[#5EC2EA]`]}
                        key={i.toString()}
                    />
                })
            }
        </View>
    );
};

export default Paginator;
