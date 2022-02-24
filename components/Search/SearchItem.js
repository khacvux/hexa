import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'


const SearchItem = (props) => {
    
    const navigation = useNavigation();
    const { item } = props
    return (
        <View style={tw`flex-1 h-42 m-[2] rounded-[1] overflow-hidden `}>
            <TouchableOpacity
                activeOpacity={.7}
                onPress={() => Alert.alert('123')}
                >
                <Image 
                    source={{ uri: item.item.avt }}
                    style={tw`h-50`}
                />
            </TouchableOpacity> 
        </View>  
    )
} 
export default SearchItem