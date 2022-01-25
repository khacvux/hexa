import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import InfomationUser from '../components/Profile/InfomationUser'
import tw from 'twrnc'
import ListPost from '../components/Profile/ListPosts'
import Navbar from '../components/Profile/Navbar'
import EditProfile from '../components/Profile/EditProfile'

const MyProfileScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <Navbar />
            <ScrollView>
                <InfomationUser />  
                <EditProfile />
                <ListPost />
            </ScrollView>
        </SafeAreaView>
    )
}

export default MyProfileScreen
