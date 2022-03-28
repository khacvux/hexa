import { View, Text, SafeAreaView, Image, Dimensions, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Switch } from 'react-native'
import React, { useRef, useState } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
import FormData from 'form-data'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../redux/actions/postsAction'


//
const {width: SCREEN_WIDTH} = Dimensions.get('window');
// frame size 3:2
const FRAMESIZE_W = SCREEN_WIDTH;
const FRAMESIZE_H = SCREEN_WIDTH/2*3;





const UpLoadPictureScreen = ({route}) => {
    
    const navigation = useNavigation();
    const { image } = route.params;
    // console.log(image)
    const [isEnabled, setIsEnabled] = useState(true);
    const [isCaption, setCaption] = useState('')

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const dispatch = useDispatch();
    const { userId, token } = useSelector(state => state.authReducer)


    
    const handleSubmit = () => {
        let formData = new FormData()
        formData.append('caption', isCaption)
        formData.append('files', image)
        formData.append('userId', userId)

        dispatch(addPost({formData, token}))
    }




    return (
        <SafeAreaView style={tw`bg-white w-full h-full flex`}>
            <View style={tw`h-11 px-3 flex-row items-center border border-0 border-b border-[#5EC2EA]`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={tw`z-50`}
                >
                    <Ionicons name='chevron-back' size={23} style={tw`text-[#5EC2EA]`}/>
                </TouchableOpacity>
                <Text style={tw`absolute left-0 right-0 text-lg text-center font-bold text-[#5EC2EA]`}>Create Post</Text>
            </View>


            <View style={tw`bg-[#F5F7FA] py-2 px-3 flex-1 overflow-hidden flex justify-between `}>
                <View style={tw``}>
                    <View style={tw`flex flex-row `}>
                        <View style={tw`shadow-lg`}>
                            <Image 
                                source={{uri: image.uri}}
                                style={[tw`mr-2 rounded-[1]`, {width: FRAMESIZE_W/3, height: FRAMESIZE_H/3}]}
                            />
                        </View>
                        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
                            <View style={tw`h-full flex-1 flex`}>
                                <TextInput
                                    multiline = {true}
                                    // numberOfLines = {0}
                                    placeholder='Your caption...'
                                    style={[tw`bg-white text-base px-3 py-2`, {height: FRAMESIZE_H/3}]}
                                    onChangeText={val => setCaption(val)}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={tw`w-full mt-2`}>
                        <View style={tw`flex flex-row items-center h-13 justify-between bg-white p-3 rounded border border-0 border-t border-b border-gray-200 my-2`}>
                            <Text style={tw`text-base`}>Who can see your posts?</Text>
                            <TouchableOpacity>
                                <MaterialIcons name='keyboard-arrow-down' size={23}/>
                            </TouchableOpacity>
                        </View>
                        <View style={tw`flex flex-row items-center h-13 justify-between bg-white p-3 rounded border border-0 border-t border-b border-gray-200 `}>
                            <Text style={tw`text-base`}>Comments are allowed</Text>
                            <Switch
                                trackColor={{ false: "#C6CBD9", true: "#5EC2EA" }}
                                thumbColor={isEnabled ? "#fff" : "#fff"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={handleSubmit}
                            style={tw`items-center justify-center bg-[#5EC2EA] py-4 rounded-lg my-2`}
                        >
                            <Text style={tw`font-bold text-white`}>Create Post</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                

            </View>
        </SafeAreaView>
    )
}

export default UpLoadPictureScreen