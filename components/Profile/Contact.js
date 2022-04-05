import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc'

const Contact = ({follow}) => {

    return (
        <View>
            {
                follow ? (
                    follow == 1 ? (
                        <View style={tw`flex flex-row items-center mt-4 px-5`}>
                            <TouchableOpacity 
                                style={tw`flex-2 bg-[#56C4F4] py-3 flex items-center  border  border-[#56C4F4] rounded-sm`}
                                activeOpacity={.8}    
                            >
                                <Text style={tw`text-white font-bold`}>Following</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={tw`flex-1 bg-white py-3 ml-1 flex items-center border border-[#56C4F4] rounded-sm`}
                                activeOpacity={.8}    
                            >
                                <Text style={tw`text-[#56C4F4] font-bold`}>Message</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={tw`flex flex-row items-center mt-4 px-5`}>
                            <TouchableOpacity 
                                style={tw`flex-2 bg-[#56C4F4] py-3 flex items-center  border  border-[#56C4F4] rounded-sm`}
                                activeOpacity={.8}    
                            >
                                <Text style={tw`text-white font-bold`}>Follow</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={tw`flex-1 bg-white py-3 ml-1 flex items-center border border-[#56C4F4] rounded-sm`}
                                activeOpacity={.8}    
                            >
                                <Text style={tw`text-[#56C4F4] font-bold`}>Message</Text>
                            </TouchableOpacity>
                        </View>
                    )
                ) : (
                    <View style={tw`flex flex-row items-center mt-4 px-5`}>
                        <TouchableOpacity 
                            style={tw`flex-2 bg-[#56C4F4] py-3 flex items-center  border  border-[#56C4F4] rounded-sm`}
                            activeOpacity={.8}    
                        >
                            <Text style={tw`text-white font-bold`}>Waiting</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={tw`flex-1 bg-white py-3 ml-1 flex items-center border border-[#56C4F4] rounded-sm`}
                            activeOpacity={.8}    
                        >
                            <Text style={tw`text-[#56C4F4] font-bold`}>Message</Text>
                        </TouchableOpacity>

                    </View>
                )
            }
        </View>
    )
}

export default Contact
