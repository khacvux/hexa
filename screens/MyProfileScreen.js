import { useEffect, useState } from 'react'
import { Text, SafeAreaView } from 'react-native'
import InfomationUser from '../components/Profile/InfomationUser'
import tw from 'twrnc'
import EditProfile from '../components/Profile/EditProfile'
import EditProfileModal from '../components/Modal/EditProfileModal'
import { TabListNavigator } from '../navigators/TopTabNavigatior'
import { useSelector } from 'react-redux'
import SafeArea from '../components/SafeArea'



const MyProfileScreen = () => {
    const { token, firstName, lastName, avatar, email, userId, numberOfPosts, numberOfFollowing, numberOfFollower } = useSelector(state => state.authReducer)
    const [modalVisible, setModalVisible] = useState(false);
    const [isFirstName, setFirstName] = useState(firstName)
    const [isLastName, setLastName] = useState(lastName)
    const [isAvatar, setAvatar] = useState();

    const handleModalVisible = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <SafeAreaView style={[tw`bg-white h-full `, SafeArea.AndroidSafeArea]}>
            <Text style={tw`my-1 text-lg font-bold text-center`}>Your profile</Text>
            <InfomationUser 
                isFirstName={isFirstName}
                isLastName={isLastName}
                avatar={avatar} 
                isAvatar={isAvatar}
                email={email} 
                numberOfFollower={numberOfFollower}
                numberOfPosts={numberOfPosts}
                numberOfFollowing={numberOfFollowing}
            />  
            <EditProfile handleModalVisible={handleModalVisible} />
            <TabListNavigator 
                userId={userId} 
                // myUserId={userId}
                numberOfPosts={numberOfPosts}    
            />
            <EditProfileModal 
                token={token}
                handleModalVisible={handleModalVisible} 
                modalVisible={modalVisible} 
                firstName={firstName} 
                lastName={lastName} 
                isFirstName={isFirstName}
                isLastName={isLastName}
                setFirstName={setFirstName}
                setLastName={setLastName}
                avatar={avatar} 
                email={email} 
                userId={userId}    
                isAvatar={isAvatar}
                setAvatar={setAvatar}
            />
        </SafeAreaView>

    )
}

export default MyProfileScreen
