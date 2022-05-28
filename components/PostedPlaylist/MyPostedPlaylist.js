import { View, Text, ScrollView } from 'react-native'
import tw from 'twrnc'
import MyPostedSongItem from './MyPostedSongItem'



const MyPostedPlaylist = () => {
  return (
    <View style={tw`w-full h-full bg-white px-4`} >
        <ScrollView>
            <MyPostedSongItem />
            <MyPostedSongItem />
            <MyPostedSongItem />
            <MyPostedSongItem />
        </ScrollView>
    </View>
  )
}

export default MyPostedPlaylist