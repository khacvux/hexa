import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc'



const GenreItem = () => {
  return (
    <TouchableOpacity
        style={tw`px-6 py-2 mx-2 mt-[2]`}
    >
        <Text style={tw`text-lg font-light text-gray-600 tracking-[.2]`}>
            Deep Hous3
        </Text>
    </TouchableOpacity>
  )
}

export default GenreItem