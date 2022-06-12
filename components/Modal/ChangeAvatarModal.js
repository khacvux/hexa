import { View, Text, Modal, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import { deleteAvatar } from '../../redux/actions/authAction'
import * as ImagePicker from 'expo-image-picker'
import { Camera } from 'expo-camera';
import { useState, useEffect, useRef } from 'react'
import { Entypo, Feather } from '@expo/vector-icons'




const ChangeAvatarModal = ({isVisibleChangeAvtModal, handleVisibleChangeAvtModal, setAvatar, avatar}) => {


    const dispatch = useDispatch()
    const { token, userId } = useSelector(state => state.authReducer)


    const [isOpenCamera, setOpenCamera] = useState(false)
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    let cameraRef = useRef();
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
        dispatch(deleteAvatar({token}))
        setAvatar(avatar)
        handleVisibleChangeAvtModal()
    }

    useEffect(() => {(
        async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleOpenCamera = () => {
        setOpenCamera(!isOpenCamera)
    }

    const takePhoto = async () => {
        const result = await cameraRef.current.takePictureAsync({
            quality: 1,
        })

        const avatar = {
            uri: Platform.OS == 'ios' ? result.uri.substr(7) : result.uri,
            name: result.fileName || result.uri.substr(result.uri.lastIndexOf('/') + 1)
        }
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
                        {
                            !isOpenCamera ? <></> : (
                                <Camera type={type}
                                    style={tw`w-full h-100 mt-2 rounded-lg overflow-hidden  justify-end `}
                                    ref={cameraRef}
                                >
                                    <View style={tw`items-center justify-center relative`}>
                                        <TouchableOpacity
                                            style={tw`p-[5] bg-white rounded-full my-6`}
                                            onPress={takePhoto}
                                        >
                                            <View style={tw`p-[13] rounded-full bg-white border-2 border-black`}>
                                                <Entypo name='dot-single' 
                                                    size={20}
                                                    style={tw`text-white`}
                                                />
                                            </View>
                                            
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={tw`absolute bottom-4 left-5`}
                                            onPress={() => {
                                                setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
                                            }}
                                        >
                                            <Feather name='refresh-cw' size={20} 
                                                style={tw`text-white`}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                   
                                </Camera>
                            )
                        }
                        <TouchableOpacity
                            style={tw`w-full py-3 items-center border-b border-gray-200`}
                            onPress={handleOpenCamera}
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
                        onPress={() => {
                            setOpenCamera(false)
                            handleVisibleChangeAvtModal()
                        }}
                    >
                        <Text style={tw`text-base`}>Cancel</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    )
}

export default ChangeAvatarModal