import { useEffect } from 'react'
import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import tw from 'twrnc'
import { FlatGrid } from 'react-native-super-grid';

import { notifications } from '../../data'
import PostItem from './PostItem'
import EmptyAnimation from '../LottieAnimation/EmptyAnimation'

import { useDispatch, useSelector } from 'react-redux';
import { getListPostUser } from '../../redux/actions/postsAction';
import ListPostSkeleton from '../Skeleton/ListPostSkeleton';


const ListPost = ({userId, numberOfPosts}) => {

    const dispatch = useDispatch()
    const { listPostUser } = useSelector(state => state.postsReducer)
    const { token } = useSelector(state => state.authReducer)
    const { getListPostLoading } = useSelector(state => state.onLoadingReducer)

    useEffect(() => {
        if(numberOfPosts) {
            dispatch(getListPostUser({userId, token}))
        }
    }, [])


    return (
        <View style={tw`bg-white h-full`}>
            {
                getListPostLoading ? (
                    <ListPostSkeleton />
                ) : (
                    numberOfPosts == 0 || listPostUser.length == 0 ? (
                        <View style={tw`w-full h-full items-center justify-center`}>
                            <EmptyAnimation title={'No posts yet!!'} />
                        </View>
                    ) : (
                        <FlatGrid
                                data={listPostUser}
                                itemDimension={100}
                                renderItem={(item) => <PostItem item={item} />}
                                style={tw`pt-2`}
                                keyExtractor={item => item.postsId} 
                                spacing={5} 
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                            />
                    )
                )
            }
        </View>
    )
}

export default ListPost
