import { View, Text, FlatList,SafeAreaView, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import tw from 'twrnc'
import { Entypo } from '@expo/vector-icons'; 

import Playlist from '../components/Playlists/Playlist';
import Header from '../components/Header/Header';
import SafeArea from '../components/SafeArea';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { hidePlayerBar, showlayerBar } from '../redux/actions/songsAction';
import { LinearGradient } from 'expo-linear-gradient';
import ListCategoryMusic from '../components/ListCategorySong/ListCategoryMusic';
import VirtualizedScrollView from '../components/VitualizedScrollView';




const MusicScreen = () => {

    const tabBarHeight = useBottomTabBarHeight()
    const dispatch = useDispatch()
    const { playerBar } = useSelector(state => state.songReducer)
  
    // const handlePlayer = () => {
    //     setTabBarHeight(tabBarHeight)
    //     if(playerBar){
    //         return dispatch(hidePlayerBar())
    //     }else
    //         return dispatch(showlayerBar())
    // }
    return (
        <SafeAreaView style={[tw`bg-white h-full`]}>
                <Header />
                <View style={tw`h-full`}>
                        {/* <TouchableOpacity 
                            onPress={handlePlayer}
                            style={tw`w-full py-3 bg-yellow-300 items-center`}
                        >
                            <Text>on</Text>
                        </TouchableOpacity> */}
                    <VirtualizedScrollView >
                        {/* Playlists */}
                        <Playlist 
                            title={'Library'}   
                        />
                        {/* CATEGORY SONG */}
                        <ListCategoryMusic /> 
                    </VirtualizedScrollView>
                </View>
        </SafeAreaView>  
    )
}

export default MusicScreen