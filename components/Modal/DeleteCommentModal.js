import { View, Text, Modal, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { deleteComment } from '../../redux/actions/postsAction'
import tw from 'twrnc'



const DeleteCommentModal = ({
        isVisibleDeleteModal, 
        handleVisibleDeleteModal, 
        isIdCommentSelected, 
        token, 
    }) => {

    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteComment({token, commentId: isIdCommentSelected}))
        handleVisibleDeleteModal()
    }

  return (
    <Modal  
        visible={isVisibleDeleteModal}
        transparent={true}
        animationType="slide"
    >   
        <View style={tw`w-full h-full flex flex-col`}>
            <TouchableOpacity
                style={tw`w-full h-full flex-1`}
                onPress={handleVisibleDeleteModal}
            />
            <View style={tw`px-3 my-10`}>
                <View style={tw`my-2 bg-white rounded-lg shadow-xl py-1`}>
                    <TouchableOpacity
                        style={tw` items-center justify-center py-3`}
                        onPress={handleDelete}
                    >
                        <Text style={tw`text-red-400 text-base`}>Delete</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={tw`bg-white rounded-lg items-center justify-center py-3 shadow-xl`}
                    onPress={handleVisibleDeleteModal}
                >
                    <Text style={tw`text-base`}>Cancel</Text>
                </TouchableOpacity>
            </View>

        </View>
    </Modal>
  )
}

export default DeleteCommentModal