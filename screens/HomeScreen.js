import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import tw from 'twrnc'
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons'; 
import { posts } from '../data';

import Post from '../components/Home/Post';
import Feed from '../components/Home/Feed';
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
            <ScrollView 
                contentContainerStyle={tw`py-2`}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                    {/* {posts.map((post) => {
                        return (
                            <Post key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body} />   
                    )

                        // {console.log(post.body)}
                        // <Text> id: {post.id}</Text>
                    })} */}
                    {posts.map((post) =>{
                        return (
                            <Feed
                                key={post.postId} 
                                images={post.images} 
                                heart={post.heart} 
                                name={post.name} 
                                postId={post.postId} 
                                userName={post.userName} 
                                body={post.body} 
                                avtUser={post.avt} 
                                comments={post.comments}
                                liked={post.liked}    
                            />
                        )
                    })}


            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen
