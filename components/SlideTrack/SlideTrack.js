import { View, Text, FlatList } from 'react-native'
import tw from 'twrnc'
import { albums } from '../../data'
import SlideItem from './SlideItem'



const SlideTrack = () => {
  return (
    <View style={tw`w-full py-2 bg-white mb-3 shadow-[#5EC2EA]`}>
      <Text style={tw`text-2xl mb-3 px-2 font-light tracking-[.25] ml-2`}>Favourite song</Text>
      <FlatList 
        data={albums}
        renderItem={(item) => {
            return <SlideItem item={item} />
        }}
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

export default SlideTrack