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
    navigation.navigate('SongsPostStack', {
      genreId: item.item.songCategoryId,
      background: item.item?.image,
      genre: item.item.name,
    })
  }

  return (
    <TouchableOpacity
      activeOpacity={.5}
      onPress={handleOnPress}
    >
      <Image
        source={item.item?.image ? {uri: item.item?.image} :require('../../assets/images/default-song-avatar.jpeg')}
        style={tw`w-full h-40 rounded-lg`}
        resizeMode='cover'
      />
      <Text style={tw`text-lg text-center mt-1 font-light `}>
        {item.item.name}
      </Text>
    </TouchableOpacity>
  )
}

export default ListCategoryItem