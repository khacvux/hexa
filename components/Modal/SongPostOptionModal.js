import { View, Text, Modal, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Entypo } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { FlatGrid } from 'react-native-super-grid'
import SelectPlaylistitem from '../Playlists/SelectPlaylistitem'
import { useNavigation } from '@react-navigation/native'



const SongPostOptionModal = ({ isVisible, setVisible, songId, token }) => {

    const { listLibrary } = useSelector(state => state.songReducer)
    const navigation = useNavigation()
   
    return (
        <Modal
            visible={isVisible}
            animationType='silde'
            transparent={true}
        >
            <SafeAreaView
                style={tw`w-full h-full flex flex-col justify-end`}
            >
                <View style={tw`px-3 mb-5`}>
                    <View style={tw`flex flex-col rounded-lg bg-white my-2 py-3 px-4`}>
                        <View style={tw`flex flex-row items-center py-2 border-b border-gray-300`} >
                            <Entypo name='add-to-list'
                                size={22}
                            />
                            <Text style={tw`text-base mx-3`}>Add to Playlist</Text>
                        </View>
                        {
                            listLibrary.length ? (
                                <View style={tw`h-55`}>
                                    <FlatGrid
                                        data={listLibrary}
                                        itemDimension={150}
                                        renderItem={(item) => <SelectPlaylistitem 
                                            item={item}
                                            songId={songId}
                                            token={token}
                                            setVisible={setVisible}
                                        />}
                                        style={tw`py-3`}
                                        spacing={13}
                                        showsHorizontalScrollIndicator={false}
                                        showsVerticalScrollIndicator={false}
                                    />
                                </View>
                            ) : <Text style={tw`text-center my-1 text-base font-thin`}>No Playlist</Text>
                        }
                       
                        <TouchableOpacity
                            style={tw`py-3 bg-gray-200 rounded-lg`}
                            onPress={() => {
                                navigation.navigate('CreatePlaylistStack')
                                setVisible(false)
                            }}
                        >
                            <Text style={tw`text-base text-center`}>
                                Create Playlist
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => setVisible(false)}
                        style={tw`bg-white items-center py-3 rounded-lg shadow-lg`}
                    >
                        <Text style={tw`text-red-400 text-base`}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Modal>
    )
}

export default SongPostOptionModal