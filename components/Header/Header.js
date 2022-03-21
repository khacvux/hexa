import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import { useSelector } from 'react-redux'



const Header = () => {


    const token = useSelector(state => state.authReducer.token)
    const navigation = useNavigation();


    return (
        <View
            style={tw`flex flex-row justify-between items-center pt-1 pb-2 px-2 bg-white`}
        >
            <View>
                {token ? (
                    <TouchableOpacity
                        style={tw`flex flex-row bg-[#F5F7FA] px-2 py-1 rounded-full items-center`}
                        onPress={() => navigation.navigate('ProfileTab')}
                    >
                        <Image
                            source={require('../../assets/images/avt.jpeg')}
                            style={tw`w-6 h-6 rounded-full mr-1`}
                        />
                        <Text style={tw`text-xs font-light`}>@Username</Text>
                    </TouchableOpacity>
                    // <View style={tw``}>
                    //       <Image
                    //         source={require('../../assets/logo.png')}
                    //         style={tw`h-6 w-16 mr-1`}
                    //         resizeMode={'contain'}
                    //     />
                    // </View>
                ) : (
                    <TouchableOpacity
                        style={tw`flex flex-row bg-[#56C4F4] mt-[2] px-2 py-[5] rounded-lg items-center`}
                        activeOpacity={.7}
                        onPress={() => navigation.navigate('LoginStack')}
                    >
                        <Text style={tw`font-light text-white font-bold px-4`}>Login</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={tw`flex flex-row items-center`}>
                {token ? (
                    <TouchableOpacity
                        style={tw`bg-[#5EC2EA] py-1 px-2  rounded-lg items-center mr-1`}
                        onPress={() => navigation.navigate('UpLoadStack')}
                    >
                        <AntDesign 
                            name='plus' 
                            style={tw` text-white`}
                            size={17}    
                        />
                    </TouchableOpacity> 
                ) : <></>}
                {token ? (
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
                ) : <></>}
            </View>
        </View>
    );
};

export default Header;
