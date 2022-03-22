import { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Modal, Image, TextInput } from 'react-native'
import InfomationUser from '../components/Profile/InfomationUser'
import tw from 'twrnc'
import ListPost from '../components/Profile/ListPosts'
import EditProfile from '../components/Profile/EditProfile'
import EditProfileModal from '../components/Modal/EditProfileModal'
import { TabListNavigator } from '../navigators/TopTabNavigatior'

const MyProfileScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const handleModalVisible = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <SafeAreaView style={tw`bg-white h-full `}>
            <Text style={tw`my-1 text-lg font-bold text-center`}>Your profile</Text>
            <InfomationUser />  
            <EditProfile handleModalVisible={handleModalVisible} />
            <TabListNavigator />
            <EditProfileModal handleModalVisible={handleModalVisible} modalVisible={modalVisible} />
        </SafeAreaView>
    )
}

export default MyProfileScreen
