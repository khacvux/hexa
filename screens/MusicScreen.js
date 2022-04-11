import { View, Text, FlatList,SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import tw from 'twrnc'
import { Entypo } from '@expo/vector-icons'; 

import SlideTrack from '../components/SlideTrack/SlideTrack';
import Header from '../components/Header/Header';
import SafeArea from '../components/SafeArea';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { hidePlayerBar, showlayerBar } from '../redux/actions/songsAction';



const MusicScreen = ({setTabBarHeight}) => {

    const tabBarHeight = useBottomTabBarHeight()
    const dispatch = useDispatch()
    const { playerBar } = useSelector(state => state.songReducer)
  
    const handlePlayer = () => {
        setTabBarHeight(tabBarHeight)
        if(playerBar){
            return dispatch(hidePlayerBar())
        }else
            return dispatch(showlayerBar())
    }
    return (
        <SafeAreaView style={[tw`bg-white h-full`]}>
           <Header />
           <View style={tw`bg-[#F5F7FA] h-full`}>
                <TouchableOpacity 
                    onPress={handlePlayer}
                    style={tw`w-full py-3 bg-yellow-300 items-center`}
                >
                    <Text>on</Text>
                </TouchableOpacity>
                <ScrollView 
                    contentContainerStyle={tw`w-full flex flex-col items-center mt-2`}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}    
                >
                    <SlideTrack />
                    <SlideTrack />
                    <SlideTrack />
                    <SlideTrack />
                </ScrollView>

           </View>


        </SafeAreaView>  
    )
}

export default MusicScreen