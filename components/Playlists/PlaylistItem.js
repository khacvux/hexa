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
        navigation.navigate('PlaylistStack', {
            listSongId: item.item.listSongId,
        })
    }

    return (
        <TouchableOpacity style={tw`ml-3`}
            onPress={ handleOnPress }
        >
            <Image 
                source={item.item.image ? {uri: item.item.image} : require('../../assets/images/default-song-avatar.jpeg')}
                style={tw`w-32 h-32 rounded-lg`}
            />
            <View style={tw`px-1 my-[5] w-32`}>
                <Text 
                    style={tw`text-base mb-[1]`}
                    numberOfLines={1}
                >
                    {item.item.nameOfList}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default PlaylistItem