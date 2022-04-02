import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'
import { Ionicons, Entypo } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler'
import { listTrack } from '../data'
import TrackItem from '../components/ListTrack/TrackItem'
import SafeArea from '../components/SafeArea'



const ListTrackScreen = () => {
    const navigation = useNavigation();


    return (
        <SafeAreaView style={SafeArea.AndroidSafeArea}>
            <View style={tw`flex flex-row items-center px-5 py-3 `}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="chevron-back-sharp" size={20} color="black" />
                </TouchableOpacity>
                <View style={tw`flex-1 flex items-center`}>
                    <Text style={tw`text-lg`}>List Name</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Entypo name="dots-three-vertical" size={14} color="black" />
                </TouchableOpacity>
            </View>   
            <FlatList 
                data={listTrack}
                renderItem={(item) => {
                    return <TrackItem item={item} />
                }}
                // keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                pagingEnabled
                contentContainerStyle={tw`flex flex-col items-center px-3 h-full`}

            />

        </SafeAreaView>
    )
}

export default ListTrackScreen