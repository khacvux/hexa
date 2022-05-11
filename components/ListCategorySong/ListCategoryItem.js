import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useSelector } from 'react-redux'
import tw from 'twrnc'
import { setTabBarHeight } from '../../redux/actions/songsAction'




const ListCategoryItem = ({item, dispatch, tabBarHeight}) => {

  const navigation = useNavigation()
  const isTabBarHeight = useBottomTabBarHeight()


  const handleOnPress = () => {
    if(tabBarHeight == false){
      dispatch(setTabBarHeight(isTabBarHeight))
    }
    navigation.navigate('SongsPostStack')
  }

  return (
    <TouchableOpacity
      activeOpacity={.5}
      onPress={handleOnPress}
    >
      <Image
        source={require('../../assets/images/song_image.jpeg')}
        style={tw`w-full h-40 rounded-1`}
        resizeMode='cover'
      />
      <Text style={tw`text-base text-center`}>
        There's no one at all
      </Text>
    </TouchableOpacity>
  )
}

export default ListCategoryItem