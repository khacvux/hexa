import React from 'react'
import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import tw from 'twrnc'
import { FlatGrid } from 'react-native-super-grid';

import { notifications } from '../../data'
import PostItem from './PostItem'
import EmptyAnimation from '../LottieAnimation/EmptyAnimation'

const ListPost = ({postsList}) => {
    // console.log(postsList, ' in list')
    return (
        <View style={tw` px-4 bg-white `}>
            {
                postsList ? (
                    <FlatGrid
                         data={notifications}
                         itemDimension={160}
                         renderItem={(item) => <PostItem item={item} />}
                         style={tw`pt-2`}
                         keyExtractor={item => item.id} 
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
