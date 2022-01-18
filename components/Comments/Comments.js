import React from 'react'
import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import tw from 'twrnc'

const Comments = () => {
    return (
        <View style={tw`pt-3 flex flex-col justify-between h-full`}>
            <ScrollView style={tw`px-7`}>
                <View style={tw`flex flex-row mb-3`}>
                    <Image
                        source={require('../../assets/images/avt_2.png')}
                        style={tw`w-10 h-10 rounded-full mr-2`}
                    />
                    <View style={tw`w-full`}>
                        <View style={tw`flex flex-row items-center`}>
                            <Text style={tw`font-bold my-1`}>Mameer</Text>
                            <Text style={tw`text-gray-500 text-xs`}> - 23m</Text>
                        </View>
                        <Text>weooo.... amzinggg!!!!</Text>
                    </View>
                </View>
                <View style={tw`flex flex-row mb-3`}>
                    <Image
                        source={require('../../assets/images/avt_2.png')}
                        style={tw`w-10 h-10 rounded-full mr-2`}
                    />
                    <View style={tw`w-full`}>
                        <View style={tw`flex flex-row items-center`}>
                            <Text style={tw`font-bold my-1`}>Mameer</Text>
                            <Text style={tw`text-gray-500 text-xs`}> - 23m</Text>
                        </View>
                        <Text>weooo.... amzinggg!!!!</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={tw`bg-[#F4F6F9] py-3 px-7 mb-7 flex flex-row items-center`}>   
                <Image source={require('../../assets/images/avt.jpeg')} 
                    style={tw`w-10 h-10 rounded-full mr-4`}
                />
                <TextInput
                    style={tw`bg-white flex-1 py-3 rounded-full px-3`}
                    placeholder='Write your comment...'
                />
            </View>
        </View>
    )
}

export default Comments
