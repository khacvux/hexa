import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import Contact from './Contact'
const InfomationUser = () => {
    return (
        <View style={tw`pt-5 px-7`}>
           <View style={tw`flex flex-row items-center justify-between`}>
                <Image 
                    source={require('../../assets/images/avt_3.png')}
                    style={tw`w-17 h-17 rounded-full mr-4`}
                />
                <View style={tw`flex-1 flex flex-row items-center`}>
                    <View style={tw`flex-1 flex items-center`}>
                        <Text style={tw`font-bold text-gray-400 `}>Post</Text>   
                        <Text style={tw`font-bold text-xl`}>36</Text>                     
                    </View>
                    <View style={tw`flex-1 flex items-center`}>
                        <Text style={tw`font-bold text-gray-400 `}>Following</Text>   
                        <Text style={tw`font-bold text-xl`}>537</Text>                     
                    </View>
                    <View style={tw`flex-1 flex items-center`}>
                        <Text style={tw`font-bold text-gray-400 `}>Followers</Text>   
                        <Text style={tw`font-bold text-xl`}>986</Text>                     
                    </View>
                </View>
           </View>
           <View style={tw`mt-4`}>
               <Text style={tw`text-gray-500 text-xs`}>
                   @milchelleJonas
               </Text>
               <Text style={tw`text-2xl mt-1 font-bold`}>
                   Michelle Jonas
               </Text>
               <Text style={tw`mt-5`}>
                   loading 99%.......error
               </Text>
           </View>
        </View>
    )
}

export default InfomationUser
