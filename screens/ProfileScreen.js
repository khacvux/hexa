import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import InfomationUser from '../components/Profile/InfomationUser'
import tw from 'twrnc'
import ListPost from '../components/Profile/ListPosts'
import Contact from '../components/Profile/Contact'
import { useNavigation } from '@react-navigation/native'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ProfileScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <ScrollView>
                <View style={tw`flex flex-row items-center justify-between pt-1 pb-2 px-4`}>
                    <TouchableOpacity
                        activeOpacity={.6}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name='chevron-back' size={23} style={tw``} />
                    </TouchableOpacity>
                    <Text style={tw`text-base font-bold`}>Profile</Text>
                    <TouchableOpacity>
                        <Entypo name="dots-three-horizontal" size={18} color="black" />
                    </TouchableOpacity>
                </View>
                <InfomationUser />  
                <Contact />
                <ListPost />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen
