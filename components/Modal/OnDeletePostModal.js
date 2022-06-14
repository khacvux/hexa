import { View, Text, Modal, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import { postMinus1 } from '../../redux/actions/authAction';
import { deletePost, getListPostUser } from '../../redux/actions/postsAction';



const OnDeletePostModal = ({handleVisibleDeleteModal, isVisibleDeleteModal, isIdPostSelected}) => {

    const dispatch = useDispatch();
    const { token } = useSelector(state => state.authReducer)

    const handleDelete = () => {
        dispatch(deletePost({token, postsId: isIdPostSelected}))
        dispatch(postMinus1())
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
                <View style={tw`bg-white rounded-lg py-1 my-2 border border-gray-100`}>
                    <TouchableOpacity
                        style={tw` items-center justify-center py-3 shadow-xl`}
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

export default OnDeletePostModal