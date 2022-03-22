import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'


const PostItem = ({item}) => {
  return (
    <View style={tw`flex-1 h-66 overflow-hidden `}>
        <TouchableOpacity
            activeOpacity={.7}
            
            >
            <Image 
                source={{ uri: item.item.avt }}
                style={tw`h-full w-full`}
                resizeMode={'cover'}
            />
        </TouchableOpacity> 
    </View> 
  )
}

export default PostItem