import { View, Text, FlatList, ImageBackground, Image, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'
import { Ionicons, Entypo } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler'
import { listTrack } from '../data'
import TrackItem from '../components/ListTrack/TrackItem'
import SafeArea from '../components/SafeArea'
import { BlurView } from 'expo-blur'
import VirtualizedScrollView from '../components/VitualizedScrollView'




const PlaylistScreen = () => {
    const navigation = useNavigation();

    const {width: SCREEN_WIDTH} = Dimensions.get('window');

    const FRAMESIZE_W = SCREEN_WIDTH;
    const FRAMESIZE_H = SCREEN_WIDTH*2/3;



    return (
        <ImageBackground
            source={require('../assets/images/song_image.jpeg')}
            style={tw`w-full h-full`}
        >   
            <BlurView
                tint='dark'
                intensity={65}
                style={tw`w-full h-full`}
            >
                <SafeAreaView style={SafeArea.AndroidSafeArea}>
                    <View style={tw`flex flex-row items-center justify-center px-5 h-10 relative mb-1`}>
                        <View style={tw`absolute top-0 left-3 h-10 justify-center`} >
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                style={tw`p-2`}
                            >
                                <Ionicons name="chevron-back-sharp" size={20} style={tw`text-gray-300`} />
                            </TouchableOpacity>
                        </View>
                        <View style={tw`flex items-center`}>
                            <Text style={tw`text-lg font-bold tracking-[.2] text-gray-200`}>Playlist</Text>
                        </View>
                        <View style={tw`absolute top-0 right-3 h-10 justify-center`} >
                            <TouchableOpacity
                                style={tw`p-2`}
                                onPress={() => navigation.goBack()}
                            >
                                <Entypo name="dots-three-vertical" size={14} style={tw`text-gray-300`} />
                            </TouchableOpacity>

                        </View>
                    </View>   
                    <VirtualizedScrollView>
                        <TouchableOpacity
                            activeOpacity={.9}
                        >
                            <ImageBackground
                                source={require('../assets/images/song_image.jpeg')}
                                style={[tw`w-full mb-3`, { height: FRAMESIZE_H }]}
                                resizeMode='cover'
                            >
                                <View style={tw`px-8 py-2 bg-white rounded absolute bottom-3 right-3`}>
                                    <Text style={tw`text-xs`}>
                                        Play all
                                    </Text>
                                </View>
                                <View style={tw`absolute top-2 left-2`}>
                                    <View style={tw`flex flex-row`}>
                                        <Text style={tw`bg-black text-white px-2 text-lg`}>There's no one at all</Text>
                                    </View>
                                    <View style={tw`flex flex-row`}>
                                        <Text style={tw`font-light text-gray-300 text-xs bg-black pl-2`}>Created by </Text>
                                        <Text style={tw`leading-4 text-gray-300 bg-black px-1 pb-[3]`}>@Username</Text>
                                        <Text style={tw`font-light text-gray-300 text-xs bg-black`}> • 30 tracks </Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                        
                        <FlatList 
                            data={listTrack}
                            renderItem={(item) => {
                                return <TrackItem item={item} />
                            }}
                            keyExtractor={(item, index) => index}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            pagingEnabled
                            contentContainerStyle={tw`flex flex-col items-center px-3 h-full`}
                        />
                    </VirtualizedScrollView>

                </SafeAreaView>
            </BlurView>
            
        </ImageBackground>
        
    )
}

export default PlaylistScreen