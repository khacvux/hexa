import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import { useSelector } from 'react-redux'



const Header = () => {


    const { firstName, avatar } = useSelector(state => state.authReducer)
    const navigation = useNavigation();


    return (
        <View
            style={tw`flex flex-row justify-between items-center pt-1 pb-2 px-2 bg-white`}
        >
            <View>
                <TouchableOpacity
                    style={tw`flex flex-row bg-[#F5F7FA] px-2 py-1 rounded-full items-center`}
                    onPress={() => navigation.navigate('ProfileTab')}
                >
                    <Image
                        source={avatar ? {uri: avatar} : (require('../../assets/images/defaultAvatar.png'))}
                        style={tw`w-6 h-6 rounded-full mr-1 bg-gray-300 border border-[#5EC2EA]`}
                    />
                    <Text style={tw`text-xs font-light`}>{firstName}</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`flex flex-row items-center`}>
                <TouchableOpacity
                    style={tw`bg-[#5EC2EA] py-1 px-2  rounded-lg items-center mr-1`}
                    onPress={() => navigation.navigate('SelectFilesStack')}
                >
                    <AntDesign 
                        name='plus' 
                        style={tw` text-white`}
                        size={17}    
                    />
                </TouchableOpacity> 

                <TouchableOpacity 
                    style={tw`mx-2`}
                    onPress={() => navigation.navigate('ChatsStack')}
                    // onPress={handleSelected}
                >
                    <AntDesign name="message1"
                        style={tw`text-xl`}
                    />
                    <Entypo name="dot-single"
                        style={tw`absolute  -right-[0.8] text-3xl text-red-500`}
                    />
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default Header;
