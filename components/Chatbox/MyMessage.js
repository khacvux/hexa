import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc'

const MyMessage = () => {
  return (
    <View style={tw`w-full items-end`}>
        <View style={tw`items-end w-6/7`}>
            <View style={tw`rounded-lg bg-[#5EC2EA] mb-[6]`}>
                <Text style={tw`p-2 text-white text-sm`}>
                    alo alo 12355
                    alo alo 12355
                    alo 
                </Text>
            </View>
        </View>
    </View>
    
  );
};

export default MyMessage;
