import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import tw from 'twrnc'




const MenuScreen = ({navigation}) => {

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`w-full px-3 py-2`}>
                <TouchableOpacity 
                    style={tw`bg-gray-200 rounded-md py-2 items-center`} 
                    activeOpacity={.6}
                    onPress={() => {
                        // dispatch(setUser(false))
                        navigation.navigate('HomeTab');
                    }}
                >
                    <Text style={tw`text-base font-bold`}>Log out</Text>
                </TouchableOpacity>

            </View>


        </SafeAreaView>
    )
}

export default MenuScreen
