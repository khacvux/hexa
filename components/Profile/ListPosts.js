import { useEffect } from 'react'
import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import tw from 'twrnc'
import { FlatGrid } from 'react-native-super-grid';

import { notifications } from '../../data'
import PostItem from './PostItem'
import EmptyAnimation from '../LottieAnimation/EmptyAnimation'

import { useDispatch, useSelector } from 'react-redux';
import { getListPostUser } from '../../redux/actions/postsAction';


const ListPost = ({userId}) => {

    const dispatch = useDispatch()
    const { listPostUser } = useSelector(state => state.postsReducer)
    const { token } = useSelector(state => state.authReducer)

    useEffect(() => {
        dispatch(getListPostUser({userId, token}))
    }, [])

    // console.log(listPostUser, 'list post')
    return (
        <View style={tw`bg-white `}>
            {
                listPostUser.length ? (
                    <FlatGrid
                         data={listPostUser}
                         itemDimension={160}
                         renderItem={(item) => <PostItem item={item} />}
                         style={tw`pt-2`}
                         keyExtractor={item => item.postsId} 
                         spacing={5} 
                         showsHorizontalScrollIndicator={false}
                         showsVerticalScrollIndicator={false}
                     />

                ) : (
                    <View style={tw`w-full h-full items-center justify-center`}>
                        <EmptyAnimation title={'No posts yet!!'} />
                    </View>
                )
            }
            
        </View>
    )
}

export default ListPost
