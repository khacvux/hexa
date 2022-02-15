import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const user = true;
const Header = () => {

    const navigation = useNavigation();
    return (
        <View
            style={tw`flex flex-row justify-between items-center pt-1 pb-2 px-2 bg-white`}
        >   
            <View>
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
                        style={tw`flex flex-row bg-[#56C4F4] mt-[2] px-2 py-[5] rounded-lg items-center`}
                        activeOpacity={.7}
                        onPress={() => navigation.navigate('LoginStack')}
                    >
                        <Text style={tw`font-light text-white font-bold px-4`}>Login</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={tw`flex flex-row items-center`}>
                {user ? (
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
                ) : (
                    <></>
                )}
                {user ? (
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
                ) : (
                    <></>
                )}
            </View>
        </View>
    );
};

export default Header;
