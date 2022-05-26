import { View, Text, Modal, TouchableOpacity, SafeAreaView } from 'react-native'
import tw from 'twrnc';
import GenreItem from '../GenreItem/GenreItem';

const SelectGenreModal = ({showModal, setShowModal}) => {
      
  return (
    <Modal
        visible={showModal}
        animationType='slide'
    >   
        <SafeAreaView
            style={tw`bg-white h-full`}
        >
            <View style={tw`justify-center items-center border-b pb-4 border-gray-300`}>
                <TouchableOpacity 
                    style={tw`absolute left-3 p-2`}
                    onPress={() => setShowModal(!showModal)}
                    >
                        <Text style={tw`text-base font-bold text-gray-400`}>Cancel</Text>
                </TouchableOpacity>
                <Text style={tw`text-xl text-gray-500 font-bold`}>Genre</Text>
            </View>
            <GenreItem />
            <GenreItem />
            <GenreItem />
            <GenreItem />

        </SafeAreaView>
      
    </Modal>
  )
}

export default SelectGenreModal