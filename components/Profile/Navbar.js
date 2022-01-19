import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'


const Navbar = () => {
    return (
        <View style={tw`flex flex-row justify-between items-center pt-2 px-7`}>
            <Text style={tw`text-xl`}>@VuLangThin123</Text>
            <TouchableOpacity>
                <Ionicons 
                    name='ios-menu-outline'
                    style={tw`text-xl px-1`}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Navbar
