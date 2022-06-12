import { View, Text } from 'react-native'
import tw from 'twrnc'
import Skeleton from './Skeleton'



const PlaylistSkeletion = () => {
  return (
    <View style={tw`w-full flex flex-row items-center px-3 mb-3`}>
        <Skeleton twrnc={'w-21 h-21'} bg={'#ccc'} rounded={2} />
        <View style={tw`flex-1 flex flex-col ml-4`}>
            <Skeleton h={20} w={150} bg={'#ccc'} rounded={1} />
            <Skeleton h={15} w={90} bg={'#ccc'} rounded={1} twrnc={'my-1'} />
            <Skeleton h={11} w={40} bg={'#ccc'} rounded={1} />
        </View>
        <View>
            <Skeleton h={25} w={25} bg={'#ccc'} rounded={99} />
        </View>
    </View>
  )
}

export default PlaylistSkeletion