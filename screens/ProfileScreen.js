import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import InfomationUser from '../components/Profile/InfomationUser'
import tw from 'twrnc'
import ListPost from '../components/Profile/ListPosts'
import Contact from '../components/Profile/Contact'

const ProfileScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <ScrollView>
                <InfomationUser />  
                <Contact />
                <ListPost />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen
