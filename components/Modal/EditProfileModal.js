import { View, Text, SafeAreaView, Modal, Image, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'twrnc'


const EditProfileModal = ({modalVisible, handleModalVisible}) => {
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
                        onPress={handleModalVisible}
                    >
                        <Text style={tw`text-base font-bold text-[#5EC2EA]`}>Done</Text>
                    </TouchableOpacity>
                </View>
                <View style={tw`flex items-center my-5`}>
                    <Image
                            source={require('../../assets/images/avt_3.png')}
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
                        />
                    </View>
                    <View style={tw` px-5 flex flex-row items-center`}>
                        <Text style={tw`font-semibold flex-1`}>
                            Last name
                        </Text>
                        <TextInput 
                            placeholder='Last name'
                            style={tw`border-b border-[#CCC] flex-3 py-4`}
                        />
                    </View>
                    <View style={tw` px-5 flex flex-row items-center`}>
                        <Text style={tw`font-semibold flex-1`}>
                            User name
                        </Text>
                        <View style={tw`border-b border-[#CCC] flex-3`}>
                            <Text 
                                value={'User name'}
                                style={tw`py-4`}
                            >
                                @UserName    
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