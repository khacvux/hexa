import { useState } from 'react'
import { Text, SafeAreaView } from 'react-native'
import InfomationUser from '../components/Profile/InfomationUser'
import tw from 'twrnc'
import EditProfile from '../components/Profile/EditProfile'
import EditProfileModal from '../components/Modal/EditProfileModal'
import { TabListNavigator } from '../navigators/TopTabNavigatior'
import { useSelector } from 'react-redux'




const MyProfileScreen = () => {
    const { name, firstName, lastName, avatar, email, listsPost } = useSelector(state => state.authReducer)
    const [modalVisible, setModalVisible] = useState(false);
    const handleModalVisible = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <SafeAreaView style={tw`bg-white h-full `}>
            <Text style={tw`my-1 text-lg font-bold text-center`}>Your profile</Text>
            <InfomationUser name={name} avatar={avatar} email={email} />  
            {/* <InformationUserSkeletion /> */}
            <EditProfile handleModalVisible={handleModalVisible} />
            <TabListNavigator postsList={listsPost} />
            <EditProfileModal handleModalVisible={handleModalVisible} modalVisible={modalVisible} firstName={firstName} lastName={lastName} avatar={avatar} email={email} />
        </SafeAreaView>
    )
}

export default MyProfileScreen
