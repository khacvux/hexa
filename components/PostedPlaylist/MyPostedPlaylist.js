import { useLayoutEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import { getMyListPostedSong } from '../../redux/actions/songsAction'
import MyPostedSongItem from './MyPostedSongItem'



const MyPostedPlaylist = ({token, userId}) => {

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getMyListPostedSong({token, userId}))
  }, [])

  const { myListPostedSongs } = useSelector(state => state.songReducer)


  return (
    <View style={tw`w-full h-full bg-white px-4`} >
        <FlatList 
          data={myListPostedSongs}
          renderItem={item => 
            <MyPostedSongItem item={item} />
          }
          keyExtractor={item => item.songId}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default MyPostedPlaylist