import React, { useEffect, useState, useRef } from 'react'
import { View, Platform, VirtualizedList, Text, Animated } from 'react-native'
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


    const { firstName, token, userId } = useRef(useSelector(state => state.authReducer)).current
    const { posts, paginationNumber } = useSelector(state => state.postsReducer)
    const dispatch = useDispatch()

    const scrollY = useRef(new Animated.Value(0)).current;
    const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);


    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentVisibleIndex(viewableItems[0]?.index);
    }).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 80 }).current;


    const getItem = (posts, index) => {
        return posts[index];
    }

    const handleLoadmore = () => {
        if (paginationNumber != -1) {
            dispatch(getPost({ token, paginationNumber }))
        }
    }

    useEffect(() => {
        dispatch(setPaginationNumber(0))
        dispatch(getPost({ token, paginationNumber: 0 }))
    }, [])


    return (
        <View style={[tw`bg-gray-100 h-full`]}>
            <View style={tw`h-full overflow-hidden flex`}>
                <Header />

                {
                    !posts.length ? (
                        <View style={tw`bg-gray-50`}>
                            <HiAnimation
                                h1={`Welcome to Hexa, ${firstName}!`}
                                h5={`When you follow people, you'll see the photos they post here.`}
                            />
                        </View>
                    ) : (
                        <VirtualizedList
                            data={posts}
                            renderItem={({ item, index }) =>
                                <Feeds
                                    post={item}
                                    token={token}
                                    userId={userId}
                                    currentIndex={index}
                                    currentVisibleIndex={currentVisibleIndex}
                                />
                            }
                            initialNumToRender={3}
                            keyExtractor={post => post.postsId}
                            getItemCount={posts => {
                                if(posts) return posts.length
                                else return 0;
                            }}
                            getItem={getItem}
                            contentContainerStyle={[tw``]}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            maxToRenderPerBatch={4}
                            removeClippedSubviews
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
                            viewabilityConfig={viewConfig}
                            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
                                useNativeDriver: false
                            })}
                            onViewableItemsChanged={viewableItemsChanged}
                            windowSize={11}
                        />
                    )
                }


            </View>
        </View>
    )
}

export default HomeScreen
