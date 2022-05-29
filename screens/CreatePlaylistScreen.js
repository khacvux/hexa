import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import { addPlaylist, getLibraryOfUserByUID } from '../redux/actions/songsAction'


const CreatePlaylistScreen = () => {

    const navigation = useNavigation()
    const [isName, setName] = useState('')
    const dispatch = useDispatch()
    const { userId, token } = useSelector(state => state.authReducer)
    
    const handleCreate = () => {
        dispatch(addPlaylist({token, userId, name: isName}))
        setTimeout(() => dispatch(getLibraryOfUserByUID({token, userId})), 2000)
        navigation.goBack()
    }

    return (
        <SafeAreaView style={tw`bg-white h-full items-center`}>
            <View style={tw`w-full bg-gray-200 justify-between flex flex-row items-center`} >
                <View>
                    <TouchableOpacity
                        style={tw`flex flex-row items-center px-3 py-2`}
                        onPress={() => navigation.goBack() }
                    >
                        <AntDesign name='left' 
                            size={15}
                        />
                        <Text style={tw`text-lg font-light`}>Back</Text>
                    </TouchableOpacity>
                </View>
                {
                    !isName ? <></> : (
                        <View>
                            <TouchableOpacity
                                style={tw`px-4 py-2`}
                                onPress={handleCreate}
                            >
                                <Text style={tw`text-lg font-light text-blue-500`}>Done</Text>
                            </TouchableOpacity> 
                        </View>
                    )
                }
               

            </View>
            <View style={tw`flex flex-col items-center justify-center flex-1 w-50`}>
                <Image 
                    source={require('../assets/images/default-song-avatar.jpeg')}
                    style={tw`h-50 w-50 rounded-xl`}
                />
                <TextInput 
                    placeholder='Name '
                    placeholderTextColor='#ccc'
                    style={tw`text-lg mt-2 mb-30 h-11`}
                    value={isName}
                    onChangeText={val => setName(val)}
                />
            </View>
            
        </SafeAreaView>
    )
}

export default CreatePlaylistScreen