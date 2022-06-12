import { StyleSheet, Image, Dimensions, PixelRatio, View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc'

const { width, height } = Dimensions.get('window')


const ImageItem = ({image}) => {
    PixelRatio.getPixelSizeForLayoutSize(width);
    
    return (
        <View>
            <Image 
                source={image.image ? { uri: image.image } : {uri: image.item.image}} 
                style={[styles.image, tw`h-full`]} 
                resizeMode='cover' 
            />
        </View>
    );
};

export default ImageItem;

const styles = StyleSheet.create({
    image: {
        width: width,
    },
})