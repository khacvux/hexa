import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import tw from 'twrnc'
import { Ionicons, Entypo } from '@expo/vector-icons'; 
import Post from './Post';


const Home = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View
                style={tw`flex flex-row justify-between items-center my-2 px-4`}
            >
                <TouchableOpacity
                    style={tw`flex flex-row bg-indigo-100 px-2 py-1 rounded-full items-center`}
                >
                    <Image 
                        source={require('../../assets/images/avt.jpeg')}
                        style={tw`w-6 h-6 rounded-full mr-1`}
                    />
                    <Text style={tw`text-xs font-light`}>@Vũ Lặng Thin</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="ios-notifications-outline"
                        style={tw`text-xl`}
                    />
                    <Entypo name="dot-single"
                        style={tw`absolute -top-2 right-0 text-3xl text-red-500`}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={tw`py-2 px-4`}>
                <Post/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
