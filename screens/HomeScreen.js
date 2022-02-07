import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import tw from 'twrnc'
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons'; 
import { posts } from '../data';

import Feeds from '../components/Home/Feeds';
// import axios from 'axios';

const user = 1;

const HomeScreen = () => {

    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     async function getData(){
    //         const res = axios.get('http://localhost:3000/posts')
    //         return res;
    //     }

    //     // getData().then((res) => setPosts(res.data));
    //     // getData().catch((err) => console.log(err));
    // }, [])

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View
                style={tw`flex flex-row justify-between items-center mb-1 mt-2 px-2`}
            >
                {user ? (
                    <TouchableOpacity
                        style={tw`flex flex-row bg-[#F5F7FA] px-2 py-1 rounded-full items-center`}
                    >
                        <Image 
                            source={require('../assets/images/avt.jpeg')}
                            style={tw`w-6 h-6 rounded-full mr-1`}
                        />
                        <Text style={tw`text-xs font-light`}>@Username</Text>
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
                        <AntDesign name="message1"
                            style={tw`text-xl`}
                        />
                        <Entypo name="dot-single"
                            style={tw`absolute  -right-[0.8] text-3xl text-red-500`}
                        />
                    </TouchableOpacity>
                ) : (
                    <>
                    </>
                )}
            </View>
            <FlatList
                data={posts}
                renderItem={(post) => {
                    return <Feeds 
                       post={post} 
                    />
                }}
                keyExtractor={post => post.postId}
                contentContainerStyle={tw`py-2`}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}

            />
           
        </SafeAreaView>
    )
}

export default HomeScreen
