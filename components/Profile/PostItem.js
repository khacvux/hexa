import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react'
import tw from 'twrnc'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';


const PostItem = ({item, handleVisibleDeleteModal, setIdPostSelected}) => {

  const navigation = useNavigation()

  return (
    <View style={tw`flex-1 h-43 overflow-hidden `}>
        <TouchableOpacity
            activeOpacity={.7}
            onPress={() => navigation.navigate('DetailFeedsStack', {
              postsId: item.item.postsId,
            }) }  
            onLongPress={() => {
              handleVisibleDeleteModal()
              setIdPostSelected(item.item.postsId)
            }}
          >
            {
              item.item?.postsImageList[0]?.image ? (
                <Image 
                    source={{ uri: item.item.postsImageList[0].image }}
                    style={tw`h-full w-full`}
                    resizeMode={'cover'}
                />
              ) : <></>
            }
             
             <LinearGradient
                colors={['rgba(0, 0, 0, 0.000004)', 'rgba(0, 0, 0, 0.2)']}
                style={tw`w-full h-45 py-3 absolute bottom-0 right-0 left-0 flex flex-col justify-end z-0`}
            >   
            </LinearGradient>
        </TouchableOpacity> 
    </View> 
  )
}

export default PostItem