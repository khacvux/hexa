import { View, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc'
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const Contact = () => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={.7}
            style={tw`flex flex-row items-center mb-2`}
            onPress={() => navigation.navigate('ChatboxStack')}
        >
            <Image 
                source={require('../../assets/images/avt_2.png')}
                style={tw`w-13 h-13 rounded-full mx-1`}
            />
            <View style={tw`mx-1`}>
                <Text style={tw`font-semibold text-base mb-[1]`}>Hảo Hán 😆😆😆</Text>
                <View style={tw`flex flex-row`}>
                    <Text style={tw`font-light`}>Vào game mau dccm</Text>
                    <Text style={tw`font-light`}> - 15:11</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Contact;
