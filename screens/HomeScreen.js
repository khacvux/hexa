import React, { useEffect, useState, useRef } from 'react'
import { FlatList, Animated, View, Platform, Alert, ScrollView, VirtualizedList, Text } from 'react-native'
import tw, { useDeviceContext } from 'twrnc'
import Feeds from '../components/Home/Feeds';
import Header from '../components/Header/Header';
import SafeArea from '../components/SafeArea';
import { useDispatch, useSelector } from 'react-redux';
import HiAnimation from '../components/LottieAnimation/HiAnimation';
import { getPost, setPaginationNumber } from '../redux/actions/postsAction';
import SkeletonFeeds from '../components/Skeleton/FeedsSkeleton'



const HomeScreen = () => {

    useDeviceContext(tw)


    const { firstName, token, userId, unauth } = useRef(useSelector(state => state.authReducer)).current
    const { posts, paginationNumber } = useSelector(state => state.postsReducer)
    const dispatch = useDispatch()


    const getItem = (posts, index) => {
        return posts[index];
    }

    const handleLoadmore = () => {
        if(paginationNumber != -1){
            dispatch(getPost({ token, paginationNumber }))
        }
    }

    useEffect(() => {
        dispatch(setPaginationNumber(0))
        dispatch(getPost({ token, paginationNumber }))
    }, [])



    return (
        <View style={[tw`bg-gray-100 h-full`]}>
            <View style={tw`h-full overflow-hidden flex`}>
                <Header />

                <VirtualizedList
                    data={posts}
                    renderItem={(post) => {
                        return <Feeds post={post} token={token} userId={userId} />
                    }}
                    initialNumToRender={3}
                    keyExtractor={post => post.postsId}
                    getItemCount={posts => posts.length}
                    getItem={getItem}
                    contentContainerStyle={[tw``]}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={0}
                    onEndReached={handleLoadmore}
                    ListFooterComponent={
                        (paginationNumber == -1) ? (
                            <View style={tw`w-full bg-white rounded-lg justify-center py-5 items-center`}>
                                <Text style={tw`text-base font-light `}>There no more posts to show right now.</Text>
                            </View>
                        ) : (
                            <SkeletonFeeds />
                        )
                    }
                    ListEmptyComponent={
                        <View style={tw`bg-gray-50`}>
                            <HiAnimation
                                h1={`Welcome to Hexa, ${firstName}!`}
                                h5={`When you follow people, you'll see the photos they post here.`}
                            />
                        </View>
                    }
                />

            </View>
        </View>
    )
}

export default HomeScreen
