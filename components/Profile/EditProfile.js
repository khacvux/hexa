import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc'

const EditProfile = () => {
    return (
        <TouchableOpacity
            activeOpacity={.5}
            style={tw`flex items-center justify-center bg-white border border-[#56C4F4] mx-5 mt-4 rounded-sm`}
        >
            <Text style={tw`py-3 font-bold text-[#56C4F4]`}>Edit Profile</Text>
        </TouchableOpacity>
    )
}

export default EditProfile
