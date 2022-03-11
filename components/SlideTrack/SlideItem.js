import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';


const SlideItem = (props) => {

    const { item } = props;
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={tw`ml-2`}
            onPress={() => navigation.navigate('ListTrackStack')}
        >
            <Image 
                source={{uri: item.item.img}}
                style={tw`w-36 h-36 rounded-2xl`}
            />
            <View style={tw`px-1 my-[5]`}>
                <Text style={tw`text-lg mb-[2]`}>{item.item.name}</Text>
                <Text style={tw`text-xs tracking-[.2]`}>{item.item.description}</Text>

            </View>
        </TouchableOpacity>
    )
}

export default SlideItem