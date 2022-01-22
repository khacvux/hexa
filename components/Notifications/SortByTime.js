import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const SortByTime = (props) => {
    const { type } = props;
  return (
    <View>
        <Text style={tw`tracking-[1] mb-4`}>{type}</Text>
        <View>
            <TouchableOpacity
                activeOpacity={.7}
                style={tw`flex flex-row items-center mb-2`}
            >
                <Image
                    source={{uri: 'https://lh3.googleusercontent.com/sI1Q4655nYTRH7ZudY3jV6eha1muMnI6au2LPHjBcKHysPysVC5OtkEzlx9w0wgM_5WEQK0RnlyJbF7IGs88Zswrkv-O8AIXvNXhCpvwLBzb42MjY71-Zqy8PeOOhlVpT1qQ9EjU' }} 
                    style={tw`w-12 h-12 rounded-full`}
                />
                <View style={tw` flex-1 flex flex-col ml-3`}>
                    <Text style={tw`text-base`}>Khoa Pug da vut tui rac 35 ti</Text>
                    <Text style={tw`font-light text-xs`}>35m ago</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    </View>
  );
};

export default SortByTime
