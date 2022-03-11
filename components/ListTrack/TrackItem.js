import { View, Text, Image, TouchableOpacity } from 'react-native'
import tw from 'twrnc'



const TrackItem = (props) => {
    const { item } = props;
  return (
    <TouchableOpacity style={tw`w-full flex flex-row items-center px-3 mb-2`}>
        <Image 
            source={{uri: item.item.img}}
            style={tw`w-[14] h-[14] rounded-xl`}
        />
        <View style={tw`flex-1 flex flex-col ml-4`}>
            <Text style={tw`text-base font-semibold`}>{item.item.name}</Text>
            <Text style={tw`text-xs text-gray-600`}>{item.item.userSong}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default TrackItem