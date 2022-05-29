import { View, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc'
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const Contact = ({name, messenger, date}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={.7}
            style={tw`flex flex-row items-center mb-2`}
            onPress={() => navigation.navigate('ChatboxStack')}
        >
            <Image 
                source={{uri: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t1.6435-9/156431284_774834760078287_1398323045647630501_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ygo0nk7W_z8AX8i2kAY&_nc_ht=scontent.fdad1-3.fna&oh=00_AT8tBLIdhhhcNVvJ2mMHUpDNH8K4hs-nJmBsgREg5z91jw&oe=62B769B8'}}
                style={tw`w-13 h-13 rounded-full mx-1`}
            />
            <View style={tw`mx-1`}>
                <Text style={tw`font-semibold text-base mb-[1]`}>{name}</Text>
                <View style={tw`flex flex-row`}>
                    <Text style={tw`font-light`}>{messenger}</Text>
                    <Text style={tw`font-light`}> - {date}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Contact;
