import { View, Text, Modal, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import { deleteAvatar } from '../../redux/actions/authAction'
import * as ImagePicker from 'expo-image-picker'



const ChangeAvatarModal = ({isVisibleChangeAvtModal, handleVisibleChangeAvtModal, setAvatar, avatar}) => {

    const dispatch = useDispatch()
    const { token, userId } = useSelector(state => state.authReducer)
    // const [ isAvatar, setAvatar ] = useState();

    const selectAvatar = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [2,2],
            quality: 1,
        })
        if(!result.cancelled) {
            const avatar = {
                uri: Platform.OS == 'ios' ? result.uri.substr(7) : result.uri,
                name: result.fileName || result.uri.substr(result.uri.lastIndexOf('/') + 1)
            }
            setAvatar(avatar)
            handleVisibleChangeAvtModal()
        }
    }

    const handleDeleteAvatar = () => {
        dispatch(deleteAvatar({token, userId}))
        setAvatar(avatar)
        handleVisibleChangeAvtModal()
    }

    return (
        <Modal
            visible={isVisibleChangeAvtModal}
            transparent={true}
            animationType='fade'
        >
            <View style={tw`flex flex-col items-center bg-[#00000040] w-full h-full`}> 
                <TouchableOpacity
                    onPress={handleVisibleChangeAvtModal}
                    style={tw`flex-1 w-full`}
                />
                <View style={tw`my-7 px-5 w-full`}>
                    <View style={tw`bg-white rounded-lg py-1 px-2`}>
                        <TouchableOpacity
                            style={tw`w-full py-3 items-center border-b border-gray-200`}
                        >
                            <Text style={tw`text-base`}>Take a photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={tw`w-full py-3 items-center border-b border-gray-200`}
                            onPress={selectAvatar}
                        >
                            <Text style={tw`text-base`}>Choose from the library</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={tw`w-full py-3 items-center`}
                            onPress={handleDeleteAvatar}
                        >
                            <Text style={tw`text-base`}>Delete current avatar</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={tw`bg-white w-full py-3 items-center rounded-lg mt-2`}
                        onPress={handleVisibleChangeAvtModal}
                    >
                        <Text style={tw`text-base`}>Cancel</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    )
}

export default ChangeAvatarModal