import { useLayoutEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import { getMyListPostedSong } from '../../redux/actions/songsAction'
import SongSkeleton from '../Skeleton/SongSkeleton'
import EmptyList from '../Static/EmptyList'
import MyPostedSongItem from './MyPostedSongItem'



const MyPostedPlaylist = ({ token, userId }) => {

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getMyListPostedSong({ token, userId }))
  }, [])

  const { myListPostedSongs, arraySongs, statusPlayer } = useSelector(state => state.songReducer)
  const { getMyListPostedSongLoading } = useSelector(state => state.onLoadingReducer)


  return (
    <View style={tw`w-full h-full bg-white px-4`} >
      {
        getMyListPostedSongLoading ? ( 
          <View>
            <SongSkeleton />
            <SongSkeleton />
            <SongSkeleton />
          </View>
        ) : (
          <FlatList
            data={myListPostedSongs}
            renderItem={item =>
              <MyPostedSongItem 
                item={item}
                arraySongs={arraySongs}
                statusPlayer={statusPlayer}
                />
            }
            keyExtractor={item => item.songId}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <View style={tw`w-full h-100 items-center justify-center`}>
                <EmptyList title={'No posts yet!!'} />
              </View>
            }
          />
        )


      }

    </View>
  )
}

export default MyPostedPlaylist