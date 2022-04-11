import { View, Text, Image, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { EvilIcons, Ionicons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { hidePlayerBar } from '../../redux/actions/songsAction';



const Player = ({tabBarHeight}) => {

  const navigation = useNavigation();
  const dispatch = useDispatch()

  const handleClose = () => {
    return dispatch(hidePlayerBar())
  }

  return (
    <View style={[tw`bg-white border-t border-gray-100 py-2 px-3 absolute left-0 right-0 bottom-[45px] z-100 flex flex-row items-center transition`, {bottom: tabBarHeight}]}>
      <View style={tw`w-full`}>
        <View style={tw`flex flex-row justify-between items-center`}>
          <TouchableOpacity style={tw`flex flex-row items-center w-1/2`}
            onPress={() => navigation.navigate('MusicTab')}
          >
            <Image 
              style={tw`w-10 h-10 rounded mr-2`}
              source={require('../../assets/images/defaultAvatar.png')}
            />
            <View>
              <Text numberOfLines={1}>Xin lội vì em đạ đúng</Text>
              <Text style={tw`text-xs font-light`}>@pholotilo</Text>
            </View>
          </TouchableOpacity>
          <View style={tw`flex flex-row items-center`}>
            <View style={tw`px-2 flex-row items-center`}>
              <TouchableOpacity>
                <Ionicons name="play" size={23} style={tw`p-2 text-gray-800`} />
              </TouchableOpacity>
              {/* <TouchableOpacity>
                <Ionicons name="ios-pause-outline" size={23} style={tw`p-2 text-gray-600`} />
              </TouchableOpacity> */}
            </View>
            <TouchableOpacity 
              style={tw`py-3 px-2`}
              onPress={handleClose}
            >
              <EvilIcons name='close' size={18} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Player