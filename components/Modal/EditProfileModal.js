import { useState } from 'react'
import { View, Text, SafeAreaView, Modal, Alert, Image, TextInput, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import tw from 'twrnc'
import { editProfile } from '../../redux/actions/authAction'
import ChangeAvatarModal from './ChangeAvatarModal'


const EditProfileModal = ({
        modalVisible, 
        handleModalVisible, 
        firstName, 
        lastName, 
        avatar, 
        email, 
        userId, 
        setFirstName, 
        setLastName, 
        isFirstName, 
        isLastName
    }) => {

    const dispatch = useDispatch();
    const [isVisibleChangeAvtModal, setVisibleChangeAvtModal] = useState(false);

    const handleVisibleChangeAvtModal = () => {
        setVisibleChangeAvtModal(!isVisibleChangeAvtModal)
    }

    const showConfirmDialog = () => {
        return Alert.alert(
            "Confirm",
            "Are you sure you want to change your name?",
            [
              {
                text: "Yes",
                onPress: () => {
                    console.log(12)
                    dispatch(editProfile({ userId, firstName: isFirstName, lastName: isLastName,}))
                    handleModalVisible();
                },
              },
              {
                text: "No",
                onPress: () => {
                    setFirstName(firstName)
                    setLastName(lastName)
                }
              },
            ]
        )
    }

    const handleSubmit = () => {
        if(isFirstName != firstName || isLastName != lastName){
        showConfirmDialog()
        }
        else handleModalVisible()
    }

    const handleCancel = () => {
        setFirstName(firstName)
        setLastName(lastName)
        handleModalVisible()
    }



    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
        >
            <View style={tw`w-full h-full flex flex-col`}>
                <SafeAreaView>
                    <View style={tw`flex flex-row items-center justify-between px-5 border-b border-[#F5F7FA]`}>
                        <TouchableOpacity
                            style={tw`py-2 px-1`}
                            onPress={handleCancel}
                        >
                            <Text style={tw`text-sm`}>Cancel</Text>
                        </TouchableOpacity>
                        <Text style={tw`text-base font-bold tracking-[.2]`}>Edit profile</Text>
                        <TouchableOpacity
                            style={tw`py-2 px-1`}
                            onPress={handleSubmit}
                        >
                            <Text style={tw`text-base font-bold text-[#5EC2EA]`}>Done</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={tw`flex items-center my-5`}>
                        <Image
                                source={avatar ? {uri: avatar} : require('../../assets/images/defaultAvatar.png')}
                                style={tw`w-21 h-21 border-2 border-[#F5F7FA] rounded-full`}
                        />
                        <TouchableOpacity 
                            onPress={handleVisibleChangeAvtModal}
                        >
                            <Text style={tw`mt-2 font-bold text-[#5EC2EA]`}>Change your avatar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={tw`border-t border-b border-[#CCC]`}>
                        <View style={tw` px-5 flex flex-row items-center`}>
                            <Text style={tw`font-semibold flex-1`}>
                                First name
                            </Text>
                            <TextInput 
                                placeholder='First name'
                                style={tw`border-b border-[#CCC] flex-3 py-4`}
                                value={isFirstName}
                                onChangeText={val => setFirstName(val)}
                            />
                        </View>
                        <View style={tw` px-5 flex flex-row items-center`}>
                            <Text style={tw`font-semibold flex-1`}>
                                Last name
                            </Text>
                            <TextInput 
                                placeholder='Last name'
                                style={tw`border-b border-[#CCC] flex-3 py-4`}
                                value={isLastName}
                                onChangeText={val => setLastName(val)}

                            />
                        </View>
                        <View style={tw` px-5 flex flex-row items-center`}>
                            <Text style={tw`font-semibold flex-1`}>
                                User name
                            </Text>
                            <View style={tw`border-b border-[#CCC] flex-3`}>
                                <Text 
                                    style={tw`py-4 text-black`}
                                >
                                    @{email}  
                                </Text>
                            </View>
                        </View>
                        <View style={tw` px-5 flex flex-row items-center`}>
                            <Text style={tw`font-semibold flex-1`}>
                                Bio
                            </Text>
                            <TextInput 
                                placeholder='Bio'
                                style={tw`flex-3 py-4`}
                            />
                        </View>

                    </View>
                </SafeAreaView>
            </View>
            <ChangeAvatarModal 
                isVisibleChangeAvtModal={isVisibleChangeAvtModal}
                handleVisibleChangeAvtModal={handleVisibleChangeAvtModal}
            />
        </Modal>
    )
    }

export default EditProfileModal