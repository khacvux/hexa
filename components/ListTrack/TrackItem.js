import { View, Text, Image, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { Entypo, Ionicons } from '@expo/vector-icons';


const TrackItem = ({item, setListSongItemId, setVisible}) => {
  // console.log(item)
  return (
    <TouchableOpacity style={tw`w-full flex flex-row items-center px-3 mb-3`}>
        <Image 
            source={item.item.song.image ? {uri: item.item.song.image} : require('../../assets/images/default-song-avatar.jpeg')}
            style={tw`w-21 h-21 rounded`}
        />
        <View style={tw`flex-1 flex flex-col ml-4`}>
            <Text style={tw`text-base font-semibold text-white`}>{item.item.song.name}</Text>
            <Text style={tw`text-sm text-gray-200`}>{item.item?.song.songUserList[0]?.name}</Text>
            <Text style={[tw`leading-6 text-gray-300`, { fontSize: 11}]} >
              <Ionicons name='ios-play' size={10}/> none
            </Text>
        </View>
        <View>
          <TouchableOpacity style={tw`p-2`}
            onPress={() => {
              setListSongItemId(item.item.listSongItemId)
              setVisible(true)
            }}
          >
            <Entypo name="dots-three-horizontal" size={18} style={tw`text-gray-300`} />
          </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default TrackItem