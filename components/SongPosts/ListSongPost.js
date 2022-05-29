import { View, Text, ScrollView, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import SongPost from './SongPost'
import EmptyList from '../Static/EmptyList'

const ListSongPost = ({ listSongByCategory }) => {

  const dispatch = useDispatch()
  const { token } = useSelector(state => state.authReducer)

  return (
  <>
  {
    listSongByCategory.length ? (
      <FlatList
      contentContainerStyle={tw` w-full pb-10`}
      data={listSongByCategory}
      renderItem={(item) =>
        <SongPost
          dispatch={dispatch}
          item={item}
          token={token}
        />
      }
      keyExtractor={item => item.songId}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
    ) : (
      
      <EmptyList title='No songs yet' />
    )
  }
  </>
    
  )
}

export default ListSongPost