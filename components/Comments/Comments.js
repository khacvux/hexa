import React from 'react'
import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import tw from 'twrnc'

const Comments = ({comment}) => {

    return (
        <View style={tw`flex flex-row mb-3`}>
            <Image
                source={{uri: comment.item.avt}}
                style={tw`w-10 h-10 rounded-full mr-2 bg-gray-200`}
            />
            <View style={tw`w-full`}>
                <View style={tw`flex flex-row items-center`}>
                    <Text style={tw`font-bold my-1`}>{comment.item.name}</Text>
                    <Text style={tw`text-gray-500 text-xs`}> - {comment.item.date}</Text>
                </View>
                <Text>{comment.item.comment}</Text>
            </View>
        </View>
        


    )
}

export default Comments
