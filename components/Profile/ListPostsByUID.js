import { useEffect, useState } from 'react'
import { View } from 'react-native'
import tw from 'twrnc'
import { FlatGrid } from 'react-native-super-grid';

import EmptyList from '../Static/EmptyList';
import { useDispatch, useSelector } from 'react-redux';
import { getListPostsByUID, getListPostUser } from '../../redux/actions/postsAction';
import ListPostSkeleton from '../Skeleton/ListPostSkeleton';
import PostItemOfUser from './PostItemOfUser';


const ListPostByUID = ({userId, numberOfPosts}) => {

    const dispatch = useDispatch()
    const { listPostByUID } = useSelector(state => state.postsReducer)
    const { token } = useSelector(state => state.authReducer)
    const { getListPostLoading } = useSelector(state => state.onLoadingReducer)


    useEffect(() => {
        if(numberOfPosts && userId) {
            dispatch(getListPostsByUID({uid: userId, token}))
        }
    }, [userId])

    return (
        <View style={tw`bg-white h-full px-3`}>
            {
                getListPostLoading ? (
                    <ListPostSkeleton />
                ) : (
                    numberOfPosts == 0 || listPostByUID?.length == 0 ? (
                        <View style={tw`w-full h-full items-center justify-center`}>
                            <EmptyList title={'No posts yet!!'} />
                        </View>
                    ) : (
                        <FlatGrid
                            data={listPostByUID}
                            itemDimension={100}
                            renderItem={(item) => 
                                <PostItemOfUser item={item} />
                            }   
                            style={tw`pt-2`}
                            keyExtractor={item => item.postsId} 
                            spacing={2} 
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        />
                    )
                )
            }

        </View>
    )
}

export default ListPostByUID
