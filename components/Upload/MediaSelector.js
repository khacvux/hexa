import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useMemo } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { MediaType, Asset } from 'expo-media-library'
import { BlurView } from 'expo-blur'




const MediaSelector = () => {

    const navigation = useNavigation();
   

    return (
            <SafeAreaView style={tw`flex bg-red-900`} >
                <View style={tw`flex bg-red-900 h-full`}>
                    <BlurView 
                        intensity={30} tint='dark'
                        style={tw`absolute bottom-1 left-2 right-2 z-50 h-11 rounded-md overflow-hidden flex flex-row items-center justify-around px-[5] shadow-xl bg-[#F5F7FA95] `}
                    >
                        <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                style={tw`w-1/2 items-center`}
                        >
                            <Text style={tw`text-black text-base`}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                                style={tw` w-1/2 bg-[#5EC2EA] py-[7] items-center rounded-md`}
                                activeOpacity={.6}
                                // onPress={(asset) => onDone(asset)}
                        >
                            <Text style={tw`text-white text-base `}>Done</Text>
                        </TouchableOpacity>
                    </BlurView>
                    
                  
                </View>
            </SafeAreaView>
    )
}

export default MediaSelector

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });