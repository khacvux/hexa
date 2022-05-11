import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setTabBarHeight } from '../../redux/actions/songsAction';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';


const PlaylistItem = ({item, dispatch, tabBarHeight}) => {

    const navigation = useNavigation();
    const isTabBarHeight = useBottomTabBarHeight()

    const handleOnPress = () => {
        if(tabBarHeight == false){
            dispatch(setTabBarHeight(isTabBarHeight))
        }
        navigation.navigate('PlaylistStack')
    }
    return (
        <TouchableOpacity style={tw`ml-3.5`}
            onPress={ handleOnPress }
        >
            <Image 
                source={require('../../assets/images/song_image.jpeg')}
                style={tw`w-32 h-32 rounded-[1]`}
            />
            <View style={tw`px-1 my-[5] w-32`}>
                <Text 
                    style={tw`text-base mb-[1]`}
                    numberOfLines={1}
                >
                    There's no one at all
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default PlaylistItem