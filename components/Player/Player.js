import { View, Text, Image } from 'react-native'
import tw from 'twrnc'
import { EvilIcons } from '@expo/vector-icons'


const Player = () => {
  return (
    <View style={tw`bg-pink-400 border-t border-gray-200 py-2 px-3 absolute left-0 right-0 bottom-[45px] z-100 flex flex-row items-center`}>
      <View>
        <View>
          <View style={tw`flex flex-row items-center`}>
            <Image 
              style={tw`w-8 h-8 rounded-md`}
              source={require('../../assets/images/defaultAvatar.png')}
            />
            <Text>Unknown</Text>
          </View>
          <View>
            <EvilIcons name='close' />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Player