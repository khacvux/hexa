import React from 'react'
import { View, Text, Image } from 'react-native'
import tw from 'twrnc'



const ListPost = () => {
    return (
        <View style={tw`mt-5`}>
            <View style={tw`px-7 flex flex-row mb-2`}>
                <Image
                    source={require('../../assets/images/post_1.png')}
                    style={tw`flex-1 w-full h-70 mr-1 rounded-sm`}
                    resizeMode='cover'

                />
                <Image
                    source={require('../../assets/images/post_1.png')}
                    style={tw`flex-1 w-full h-70 ml-1 rounded-sm`}
                    resizeMode='cover'
                />
            </View>
            <View style={tw`px-7 flex flex-row`}>
                <Image
                    source={require('../../assets/images/post_1.png')}
                    style={tw`flex-1 w-full h-70 mr-1 rounded-sm`}
                    resizeMode='cover'

                />
                <Image
                    source={require('../../assets/images/post_1.png')}
                    style={tw`flex-1 w-full h-70 ml-1 rounded-sm`}
                    resizeMode='cover'
                />
            </View>
        </View>
    )
}

export default ListPost
