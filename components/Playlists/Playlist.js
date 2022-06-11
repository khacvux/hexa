import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import PlaylistItem from './PlaylistItem'



const Playlist = ({ listLibrary }) => {

  const dispatch = useDispatch();
  const { tabBarHeight } = useSelector(state => state.songReducer)
  const navigation = useNavigation()



  return (
    <View style={tw`w-full py-2 mb-3 shadow-[#5EC2EA]`}>
      <View style={tw`flex flex-row items-center mb-3`}>
        <View style={tw`h-9`}>
          <Text style={tw`text-2xl px-2 font-light tracking-[.25] ml-2`}>Library</Text>
        </View>
        <View style={tw`h-9 justify-center`}>
          {
            !listLibrary ? <></> : (
              <View style={tw`bg-[#5EC2EA] px-.8 py-[2] rounded-xl`}>
                <Text style={tw`px-1.3 text-white`}>{listLibrary.length}</Text>
              </View>
            )
          }

        </View>
      </View>
      <View
        style={tw`flex flex-row`}
      >
        <TouchableOpacity
          style={tw`bg-gray-50 items-center justify-center w-18 h-32 ml-3.5 rounded-lg border border-blue-200`}
          onPress={() => navigation.navigate('CreatePlaylistStack')}
        >
          <AntDesign
            name='pluscircleo'
            size={30}
            style={tw`text-[#5EC2EA]`}
          />
        </TouchableOpacity>
        {
          !listLibrary ? (
            <TouchableOpacity style={tw`h-32 w-32 bg-gray-50 rounded-lg justify-center mx-2 px-5`}
              onPress={() => navigation.navigate('CreatePlaylistStack')}
            >
              <Text style={tw`text-lg font-light text-[#5EC2EA] text-center`}>Create Playlist</Text>
            </TouchableOpacity>
          ) : (
            <FlatList
              data={listLibrary}
              renderItem={(item) =>
                <PlaylistItem
                  item={item}
                  dispatch={dispatch}
                  tabBarHeight={tabBarHeight}
                />
              }
              keyExtractor={item => item.listSongId}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              pagingEnabled
              horizontal
              contentContainerStyle={tw``}
              
            />
           )
        }


      </View>

    </View>
  )
}

export default Playlist