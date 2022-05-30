import { useNavigation } from '@react-navigation/native'
import { View, Text, Modal, SafeAreaView, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import { deletePlaylist,  } from '../../redux/actions/songsAction'




const InPlaylistModal = ({isVisible, setVisible, listSongId, token}) => {

    const dispatch = useDispatch()
    const navigation = useNavigation()


    const handleDelete = () => {
        dispatch(deletePlaylist({listSongId, token}))
        setVisible(false)
        navigation.goBack()
    }
  return (
    <Modal
        visible={isVisible}
        animationType='slide'
        transparent={true}
    >
        <SafeAreaView
            style={tw`flex flex-col h-full justify-end`}
        >   
            <View style={tw`py-8 w-full flex flex-col items-center px-5`}>
                <View style={tw`bg-white w-full rounded-lg py-3 my-2`}>
                    <TouchableOpacity 
                        style={tw`w-full items-center py-1`}
                        onPress={handleDelete}
                    >
                        <Text style={tw`text-base`}>Delete Playlist</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => setVisible(false)}
                    activeOpacity={.7}
                    style={tw`bg-white w-full py-3 items-center rounded-lg`}
                >
                    <Text style={tw`text-base font-light text-red-400`}>Cancel</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
             
    </Modal>
  )
}

export default InPlaylistModal