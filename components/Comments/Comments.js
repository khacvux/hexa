import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import tw from 'twrnc'

const Comments = ({item, setIdCommentSelected, handleVisibleDeleteModal}) => {
    const date = new Date( Date.parse(item.dateCreate));

    const handleLongPress = () => {
        if(setIdCommentSelected){
            setIdCommentSelected(item.postsCommentId)
            handleVisibleDeleteModal()
        }
    }

    return (
        <TouchableOpacity style={tw`w-full flex flex-row my-2`}
            onLongPress={handleLongPress}
        >
            <Image
                source={item.image ? {uri: item.image} : require('../../assets/images/defaultAvatar.png')}
                style={tw`w-10 h-10 rounded-full mr-2 bg-gray-200`}
            />
            <View style={tw`w-full`}>
                <View style={tw`flex flex-row items-center`}>
                    <Text style={tw`font-bold my-1`}>{item.name}</Text>
                    <Text style={tw`text-gray-500 text-xs`}> - {date.toLocaleDateString()}</Text>
                </View>
                <Text style={tw`ml-1`}>{item.comment}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Comments
