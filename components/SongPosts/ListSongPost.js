import { View, Text, ScrollView } from 'react-native'
import { useDispatch } from 'react-redux'
import tw from 'twrnc'
import SongPost from './SongPost'


const ListSongPost = () => {

  const dispatch = useDispatch()

  return (
    <ScrollView 
        style={tw`h-full w-full pb-10`}
        showsVerticalScrollIndicator={false}
    >
        <SongPost dispatch={dispatch} /> 
        <SongPost dispatch={dispatch} /> 
        <SongPost dispatch={dispatch} /> 
       
    </ScrollView>
  )
}

export default ListSongPost