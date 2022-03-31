import { View, Text } from 'react-native'
import tw from 'twrnc'
import Skeleton from './Skeleton'



const ListPostSkeleton = () => {
  return (
    <View style={tw`flex flex-col px-2 bg-white h-full w-full mt-2`}>
        <View style={[tw`flex flex-row items-center justify-around w-full`]}>
            <Skeleton w={130} twrnc={`h-43 rounded-sm mr-1 bg-gray-300`} />
            <Skeleton w={130} twrnc={`h-43 rounded-sm mr-1 bg-gray-300`} />
            <Skeleton w={130} twrnc={`h-43 rounded-sm mr-1 bg-gray-300`} />
        </View>
        <View style={[tw`flex flex-row items-center w-full mt-1`]}>
            <Skeleton w={130} twrnc={`h-43 rounded-sm mr-1 bg-gray-300`} />
        </View>
        
    </View>
  )
}

export default ListPostSkeleton