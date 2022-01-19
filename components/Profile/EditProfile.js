import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc'

const EditProfile = () => {
    return (
        <TouchableOpacity
            style={tw`flex items-center justify-center bg-white border-2 border-[#56C4F4] mx-7 mt-4 rounded-lg`}
        >
            <Text style={tw`py-3 font-bold`}>Edit Profile</Text>
        </TouchableOpacity>
    )
}

export default EditProfile
