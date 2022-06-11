import { View, Text, ScrollView, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import SongPost from './SongPost'
import EmptyList from '../Static/EmptyList'

const ListSongPost = ({ listSongByCategory }) => {

  const dispatch = useDispatch()
  const { token } = useSelector(state => state.authReducer)

  return (

    <FlatList
      contentContainerStyle={tw` w-full pb-10 px-2 pt-1`}
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
      ListEmptyComponent={
        <View style={tw`my-50`}>
          <EmptyList title='No songs yet' dark={true} />
        </View>
      }
    />

  )
}

export default ListSongPost