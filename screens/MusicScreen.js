import { View, Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { Entypo } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';

import SlideTrack from '../components/SlideTrack/SlideTrack';
import Header from '../components/Header/Header';
import SafeArea from '../components/SafeArea';



const MusicScreen = () => {
    return (
        <SafeAreaView style={[tw`bg-white h-full`]}>
           <Header />
           <View style={tw`bg-[#F5F7FA] h-full`}>
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