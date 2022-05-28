import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import GenreItem from './GenreItem'
import tw from 'twrnc'
import { useDispatch } from 'react-redux';
import { getListCategorySong } from '../../redux/actions/songsAction';





    const GenreList = ({listCategorySong, setGenre, token, setShowModal}) => {
    const dispatch = useDispatch()

    if(listCategorySong.length == 0){
        useEffect(() => {
          dispatch(getListCategorySong({token}))
        }, [])
    }

    return (
        <FlatList 
            data={listCategorySong}
            renderItem={(item) => 
                <GenreItem 
                    genre={item}
                    setGenre={setGenre}
                    setShowModal={setShowModal}
                />
            }
            keyExtractor={item=>item.songCategoryId}
            contentContainerStyle={tw`px-3 `}
        />
    )
}

export default GenreList