import { View, Text } from 'react-native'
import tw from 'twrnc'



const Player = () => {
  return (
    <View style={tw`bg-pink-400 border-t border-gray-200 py-2 px-3 absolute left-0 right-0 bottom-12 z-100`}>
      <Text>Player</Text>
    </View>
  )
}

export default Player