import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const SearchItem = ({ item }) => {
    
    // console.log(item)
    const navigation = useNavigation();

    return (
        <View style={tw`flex flex-row items-center justify-between py-2`}>   
            <TouchableOpacity 
                style={tw`flex flex-row items-center`}
                onPress={() => navigation.navigate('ProfileStack', {
                    userId: item.item.userId
                })}
            >
                <Image 
                    source={require('../../assets/images/defaultAvatar.png')}
                    style={tw`w-14 h-14 rounded-full border border-blue-300 mr-2`}
                />
                <View>
                    <Text style={tw`text-base font-semibold`}>{item.item.name}</Text>
                    <Text style={tw`text-xs font-light`}>@{item.item.email}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name='close' size={16} />
            </TouchableOpacity> 
        </View>

    )
} 
export default SearchItem