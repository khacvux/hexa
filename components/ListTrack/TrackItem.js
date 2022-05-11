import { View, Text, Image, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { Entypo, Ionicons } from '@expo/vector-icons';


const TrackItem = (props) => {
    const { item } = props;
  return (
    <TouchableOpacity style={tw`w-full flex flex-row items-center px-3 mb-3`}>
        <Image 
            source={require('../../assets/images/song_image.jpeg')}
            style={tw`w-21 h-21 rounded`}
        />
        <View style={tw`flex-1 flex flex-col ml-4`}>
            <Text style={tw`text-base font-semibold text-white`}>There's no one at all</Text>
            <Text style={tw`text-sm text-gray-200`}>Son Tung M-TP</Text>
            <Text style={[tw`leading-6 text-gray-300`, { fontSize: 11}]} >
              <Ionicons name='ios-play' size={10}/> 9.3M
            </Text>
        </View>
        <View>
          <TouchableOpacity style={tw`p-2`}>
            <Entypo name="dots-three-horizontal" size={18} style={tw`text-gray-300`} />
          </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default TrackItem