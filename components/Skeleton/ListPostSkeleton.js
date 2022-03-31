import { View, Text } from 'react-native'
import tw from 'twrnc'
import Skeleton from './Skeleton'



const ListPostSkeleton = () => {
  return (
    <View style={tw`flex flex-col px-2 bg-white h-full w-full mt-2`}>
        <View style={[tw`flex flex-row items-center justify-around w-full`]}>
            <Skeleton w={130} rounded={'0'} twrnc={`h-43 rounded-sm mr-1`} bg={'#d1d5db'} />
            <Skeleton w={130} rounded={'0'} twrnc={`h-43 rounded-sm mr-1`} bg={'#d1d5db'} />
            <Skeleton w={130} rounded={'0'} twrnc={`h-43 rounded-sm mr-1`} bg={'#d1d5db'} />
        </View>
        <View style={[tw`flex flex-row items-center w-full mt-1`]}>
            <Skeleton w={130} rounded={'0'} twrnc={`h-43 rounded-sm mr-1`} bg={'#d1d5db'} />
        </View>
    </View>
  )
}


export default ListPostSkeleton