import { View, Text, FlatList,SafeAreaView } from 'react-native'
import tw from 'twrnc'
import { Entypo } from '@expo/vector-icons'; 

import Playlist from '../components/Playlists/Playlist';
import Header from '../components/Header/Header';
import SafeArea from '../components/SafeArea';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { getListCategorySong, hidePlayerBar, showlayerBar, getLibraryOfUserByUID } from '../redux/actions/songsAction';
import ListCategoryMusic from '../components/ListCategorySong/ListCategoryMusic';
import VirtualizedScrollView from '../components/VitualizedScrollView';
import { useEffect } from 'react';




const MusicScreen = () => {

    const dispatch = useDispatch()
    const { token, userId } = useSelector(state => state.authReducer)
    const { listLibrary } = useSelector(state => state.songReducer)
    useEffect(() => {
        dispatch(getListCategorySong({ token }))
        dispatch(getLibraryOfUserByUID({token, userId}))
    }, [])


  
    return (
        <SafeAreaView style={[tw`bg-white h-full`]}>
                <Header />
                <View style={tw`h-full`}>
                    <VirtualizedScrollView >
                        {/* Playlists */}
                        <Playlist 
                            listLibrary={listLibrary}
                        />
                        
                        {/* CATEGORY SONG */}
                        <ListCategoryMusic token={token} /> 
                    </VirtualizedScrollView>
                </View>
        </SafeAreaView>  
    )
}

export default MusicScreen