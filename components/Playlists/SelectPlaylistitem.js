import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import tw from 'twrnc'
import { addSongToPlaylist } from '../../redux/actions/songsAction'



const SelectPlaylistitem = ({ item, songId, token, setVisible }) => {

  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch(addSongToPlaylist({libId: item.item.listSongId, songId, token }))
    setTimeout(() => setVisible(false), 1000)
  }

  return (
    <TouchableOpacity
      activeOpacity={.8}
      onPress={handleAdd}
    >
      <ImageBackground
        source={item.item?.image ? { uri: item.item.image } : require('../../assets/images/music-background.jpeg')}
        style={tw`h-40 rounded-xl overflow-hidden justify-end p-3`}
      >
        <View style={tw`w-full flex-row`}>
          <Text 
            style={tw`bg-gray-800 text-white px-2 py-1 `}
            numberOfLines={1}
            >
              {item.item.nameOfList}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
    
  )
}

export default SelectPlaylistitem