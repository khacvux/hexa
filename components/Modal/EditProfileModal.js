import { useState } from 'react'
import { View, Text, SafeAreaView, Modal, Alert, Image, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import tw from 'twrnc'
import { editProfile } from '../../redux/actions/authAction'


const EditProfileModal = ({modalVisible, handleModalVisible, firstName, lastName, avatar, email, userId}) => {

    const dispatch = useDispatch();

    const [isFirstName, setFirstName] = useState(firstName)
    const [isLastName, setLastName] = useState(lastName)

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



    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
        >
            <View style={tw`w-full h-full flex flex-col`}>
                <SafeAreaView>
                    <View style={tw`flex flex-row items-center justify-between px-5 py-2 border-b border-[#F5F7FA]`}>
                        <TouchableOpacity
                            style={tw``}
                            onPress={handleModalVisible}
                        >
                            <Text style={tw`text-sm`}>Cancel</Text>
                        </TouchableOpacity>
                        <Text style={tw`text-base font-bold tracking-[.2]`}>Edit profile</Text>
                        <TouchableOpacity
                            // onPress={handleModalVisible}
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
                        <TouchableOpacity>
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
        </Modal>
    )
    }

export default EditProfileModal