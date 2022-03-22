import { View, Text, TextInput, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { EvilIcons } from '@expo/vector-icons'; 
import SearchItem from '../components/Search/SearchItem';
import { notifications } from '../data';


const SearchScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full px-1 flex`}>
        <View style={tw`bg-[#F5F7FA] rounded-md w-full flex flex-row items-center px-2 m-2`}>
            <EvilIcons name="search" size={24} color="#5EC2EA" />
            <TextInput
                placeholder='Search...'
                style={tw`mx-2 flex-1 py-3`}
            />
        </View>
        <View style={tw`flex-1`}>
            <FlatList
                data={notifications}
                numColumns={3}
                renderItem={(item) => <SearchItem item={item} />}
                contentContainerStyle={tw`flex-1`}
                keyExtractor={item => item.id}
                
                />
        </View>
    </SafeAreaView>
  )
} 

export default SearchScreen