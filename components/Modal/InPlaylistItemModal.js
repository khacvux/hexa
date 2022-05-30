import { AntDesign } from '@expo/vector-icons'
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { deleteSongFromPlaylist } from '../../redux/actions/songsAction'


const InPlaylistItemModal = ({isVisible, setVisible, isListSongItemId, dispatch, token}) => {

    const handleDelete = () => {
        dispatch(deleteSongFromPlaylist({id: isListSongItemId, token}))
    }

  return (
    <Modal 
        animationType='silde'
        visible={isVisible}
        transparent={true}
    >
        <View
            style={tw`flex h-full flex-col items-center justify-end p-5`}
        >
            <View style={tw`flex flex-col px-3 py-1 my-2 bg-white rounded-lg w-full`}>
                <TouchableOpacity
                    style={tw`flex flex-row items-center w-full py-3 justify-center`}
                    onPress={handleDelete}
                >
                    <AntDesign name='minuscircleo' size={20} style={tw`mr-2 `} />
                    <Text style={tw`text-base font-light ml-1 mr-6`}>Remove from Playlist</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={tw`bg-white w-full py-3 rounded-lg items-center`}
                onPress={() => setVisible(false)}
            >
                <Text style={tw`text-red-500 text-base font-light`}>Cancel</Text>
            </TouchableOpacity>
        </View>
    </Modal>
  )
}

export default InPlaylistItemModal