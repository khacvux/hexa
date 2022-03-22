import React from 'react'
import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import tw from 'twrnc'
import { FlatGrid } from 'react-native-super-grid';

import { notifications } from '../../data'
import PostItem from './PostItem'


const ListPost = () => {
    return (
        <View style={tw` px-4 bg-white `}>
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
            
        </View>
    )
}

export default ListPost
