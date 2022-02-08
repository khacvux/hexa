import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';

const SearchContact = () => {
    const searchTextInput = useRef();
  return (
    <View style={tw`flex flex-row py-1 mx-3 my-1 bg-gray-200 px-2 rounded-[2] overflow-hidden`}>
        <TouchableOpacity
            activeOpacity={.8}
            onPress={() => { searchTextInput.current.focus(); }}
        >
            <Ionicons name='search-outline' 
                style={tw`mr-1 text-xl text-gray-600`}
            />

        </TouchableOpacity>
        <TextInput 
            placeholder='Search...'
            ref={searchTextInput}
        />
    </View>
  );
};

export default SearchContact;
