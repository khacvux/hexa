import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground, TextInput, Platform } from 'react-native'
import { useState } from 'react';
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Entypo, Ionicons } from '@expo/vector-icons';
import SelectGenreModal from '../components/Modal/SelectGenreModal';
import { useDispatch, useSelector } from 'react-redux';
import FormData from 'form-data'
import { addSong } from '../redux/actions/songsAction';




const UploadAudioScreen = ({route}) => {

    const { audioFiles } = route.params;
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.authReducer)

    const [isImage, setImage] = useState(null)
    const [showModal, setShowModal] = useState(false) 
    const [isTitle, setTitle] = useState('')
    const [isGenre, setGenre] = useState({
        idGenre: '',
        genre: '',
    })
    const [isCaption, setCaption] = useState('')


    const selectPicture = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [2, 2],
        quality: 1,
        });

        if (!result.cancelled) {
            const image = {
                uri: Platform.OS == 'ios' ? result.uri.substr(7) : result.uri,
                name: result.fileName || result.uri.substr(result.uri.lastIndexOf('/') + 1)
            }
            setImage(image);
        }
    }

    const handleSubmit = () => {
        let formData = new FormData
        formData.append('name', isTitle)
        formData.append('image', isImage)
        formData.append('song', audioFiles )
        formData.append('songCategoryId', isGenre.idGenre)

        dispatch(addSong({formData, token}))
        navigation.navigate('MusicTab')
    }





    return (
        <SafeAreaView style={tw`bg-white h-full w-full`}>
            <View style={tw`items-center`}>
                <View style={tw`flex flex-row items-center w-full px-3`}>
                    <TouchableOpacity
                        style={tw`p-1`}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={tw`text-gray-400 text-base`}>Cancel</Text>
                    </TouchableOpacity>
                    <View style={tw`flex-1 px-2 items-center`}>
                        <Text style={tw``}
                        numberOfLines={1}>{audioFiles.name}</Text>
                    </View>
                    {
                        isImage && isTitle && isGenre.idGenre ? (
                            <TouchableOpacity
                                style={tw`p-1`}
                                onPress={handleSubmit}
                            >
                                <Text style={tw`font-bold text-[#5EC2EA] text-base`}>Done</Text>
                            </TouchableOpacity>
                        ) : (
                            <View>
                                <Text style={tw`font-thin text-gray-600 text-base`}>Done</Text>
                            </View>
                        )
                    }
                   
          
                </View>
                <View>
                    <TouchableOpacity 
                        activeOpacity={.2}
                        onPress={selectPicture}
                    >
                        <ImageBackground
                            source={isImage ? {uri: isImage.uri} : require('../assets/images/default-song-avatar.jpeg')}
                            style={tw`w-35 h-35 m-5 rounded-lg overflow-hidden justify-center items-center`} 
                        >
                            {
                                !isImage ? (
                                    <View style={tw`w-full h-full justify-center items-center bg-black opacity-40`}>
                                        <Ionicons 
                                            name='ios-camera-outline' 
                                            size={35}
                                            style={tw`text-white`}
                                            />
                                    </View>
                                ) : <></>
                            }
                            
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={tw`flex flex-col w-full px-5 mt-3`}>
                    <View>
                        <Text style={tw`text-sm text-gray-500 font-bold`} numberOfLines={1}>Title</Text>
                        <TextInput 
                            placeholder={audioFiles.name}
                            placeholderTextColor='#CCC'
                            style={tw` h-10 py-1 text-lg tracking-[.2]`}
                            value={isTitle}
                            onChangeText={val => setTitle(val)}
                        />
                    </View>
                    <View style={tw`my-2`}>
                        <Text style={tw`text-sm text-gray-500 font-bold`}>Genre</Text>
                        <TouchableOpacity 
                            style={tw`h-10 py-2 flex flex-row `}
                            activeOpacity={.3}
                            onPress={() => setShowModal(true)}
                        >
                            <Text style={tw`text-lg tracking-[.2] flex-1`}>
                                {
                                    isGenre.genre ? isGenre.genre : (
                                        <Text style={tw`text-gray-400 font-light`}>
                                            Select Genre
                                        </Text>
                                    )
                                }
                            </Text>
                            <Entypo 
                                size={18}
                                style={tw`text-gray-500`}
                                name='chevron-thin-right'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={tw`my-2`}>
                        <Text style={tw`text-sm text-gray-500 font-bold`}>Caption</Text>
                        <TextInput 
                            placeholder="Add caption to your post (optional)"
                            placeholderTextColor='#CCC'
                            style={tw` h-10 pt-1 pb-3 text-lg tracking-[.2]`}
                            multiline={true}
                            value={isCaption}
                            onChangeText={val => setCaption(val)}
                        />
                    </View>
                </View>
            </View>
            <SelectGenreModal 
                showModal={showModal} 
                setShowModal={setShowModal} 
                token={token}
                setGenre={setGenre}
            />
        </SafeAreaView>
    )
}

export default UploadAudioScreen