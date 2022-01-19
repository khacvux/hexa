import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import tw from 'twrnc'
import { Ionicons, Entypo } from '@expo/vector-icons'; 


import Post from '../components/Home/Post';

const user = undefined;
const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View
                style={tw`flex flex-row justify-between items-center mb-1 mt-2 px-4`}
            >
                {user ? (
                    <TouchableOpacity
                        style={tw`flex flex-row bg-[#F5F7FA] px-2 py-1 rounded-full items-center`}
                    >
                        <Image 
                            source={require('../assets/images/avt.jpeg')}
                            style={tw`w-6 h-6 rounded-full mr-1`}
                        />
                        <Text style={tw`text-xs font-light`}>@Vũ Lặng Thin</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={tw`flex flex-row bg-[#56C4F4] px-2 py-1 rounded-full items-center`}
                    >
                        <Text style={tw`text-md font-light text-white font-bold px-4`}>Login</Text>
                    </TouchableOpacity>
                )}
                {user ? (
                    <TouchableOpacity 
                        style={tw`mx-1`}
                    >
                        <Ionicons name="ios-notifications-outline"
                            style={tw`text-xl`}
                        />
                        <Entypo name="dot-single"
                            style={tw`absolute -top-2 right-0 text-3xl text-red-500`}
                        />
                    </TouchableOpacity>
                ) : (
                    <>
                    </>
                )}
            </View>
            <ScrollView contentContainerStyle={tw`py-2 px-4`}>
                <Post/>
                <Post/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen
