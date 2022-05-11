import { View, Text, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import { albums } from '../../data'
import PlaylistItem from './PlaylistItem'



const Playlist = ({title,}) => {

  const dispatch = useDispatch();
  const { tabBarHeight } = useSelector(state => state.songReducer)

  return (
    <View style={tw`w-full py-2 mb-3 shadow-[#5EC2EA]`}>
      <View style={tw`flex flex-row items-center mb-3`}>
        <View style={tw`h-9`}>
          <Text style={tw`text-2xl px-2 font-light tracking-[.25] ml-2`}>{title}</Text>
        </View>
        <View style={tw`h-9 justify-center`}>
          <View style={tw`bg-[#5EC2EA] px-.8 py-[2] rounded-xl`}>
            <Text style={tw`px-1.3 text-white`}>3</Text>
          </View> 
        </View>
      </View>
      <FlatList 
        data={albums}
        renderItem={(item) => 
          <PlaylistItem 
            item={item}
            dispatch={dispatch}
            tabBarHeight={tabBarHeight} 
          />
        }
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        horizontal
        contentContainerStyle={tw`ml-[3]`}
      />
    </View>
  )
}

export default Playlist