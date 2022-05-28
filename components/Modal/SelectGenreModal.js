import { useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux';
import tw from 'twrnc';

import GenreList from '../GenreList/GenreList';

const SelectGenreModal = ({ showModal, setShowModal, token, setGenre }) => {
    const { listCategorySong } = useSelector(state => state.songReducer)

    return (
        <Modal
            visible={showModal}
            animationType='slide'
            style={tw`bg-white`}
        >
            <SafeAreaView
                style={tw`bg-white h-full`}
            >
                <View style={tw`justify-center items-center border-b pb-4 border-gray-300`}>
                    <TouchableOpacity
                        style={tw`absolute left-3 p-2 top-0`}
                        onPress={() => setShowModal(!showModal)}
                    >
                        <Text style={tw`text-base font-bold text-gray-400`}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={tw`text-xl font-bold p-1`}>Genre</Text>
                </View>
                <GenreList 
                    listCategorySong={listCategorySong}
                    setGenre={setGenre}
                    setShowModal={setShowModal}
                    token={token}
                />
            </SafeAreaView>

        </Modal>
    )
}

export default SelectGenreModal