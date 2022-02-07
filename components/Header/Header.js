import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc'
import { AntDesign, Entypo } from '@expo/vector-icons';


const user = 1;

const Header = () => {
    return (
        <View
            style={tw`flex flex-row justify-between items-center pt-1 pb-2 px-2 bg-white`}
        >
            {user ? (
                <TouchableOpacity
                    style={tw`flex flex-row bg-[#F5F7FA] px-2 py-1 rounded-full items-center`}
                >
                    <Image
                        source={require('../../assets/images/avt.jpeg')}
                        style={tw`w-6 h-6 rounded-full mr-1`}
                    />
                    <Text style={tw`text-xs font-light`}>@Username</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={tw`flex flex-row bg-[#56C4F4] px-2 py-1 rounded-full items-center`}
                >
                    <Text style={tw`text-md font-light text-white font-bold px-4`}>Login</Text>
                </TouchableOpacity>
            )}
            {user ? (
                <TouchableOpacity 
                    style={tw`mx-1`}
                >
                    <AntDesign name="message1"
                        style={tw`text-xl`}
                    />
                    <Entypo name="dot-single"
                        style={tw`absolute  -right-[0.8] text-3xl text-red-500`}
                    />
                </TouchableOpacity>
            ) : (
                <>
                </>
            )}
        </View>
    );
};

export default Header;
