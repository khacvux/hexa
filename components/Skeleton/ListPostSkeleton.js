import { View, Text } from 'react-native'
import tw from 'twrnc'
import Skeleton from './Skeleton'



const ListPostSkeleton = () => {
  return (
    <View style={tw`flex flex-col px-2 bg-white h-full w-full mt-2`}>
        <View style={[tw`flex flex-row items-center justify-around w-full overflow-hidden`]}>
            <View style={tw`flex-1 overflow-hidden ml-1`}>
              <Skeleton w={200} rounded={'0'} twrnc={`h-43 mr-1`} bg={'#d1d5db'} />
            </View>
            <View style={tw`flex-1 overflow-hidden mx-1`}>
              <Skeleton w={200} rounded={'0'} twrnc={`h-43 mr-1`} bg={'#d1d5db'} />
            </View>
            <View style={tw`flex-1 overflow-hidden mr-1`}>
              <Skeleton w={200} rounded={'0'} twrnc={`h-43 mr-1`} bg={'#d1d5db'} />
            </View>
        </View>
        <View style={[tw`flex flex-row items-center justify-around w-full overflow-hidden mt-1`]}>
            <View style={tw`flex-1 overflow-hidden ml-1`}>
              <Skeleton w={200} rounded={'0'} twrnc={`h-43 mr-1`} bg={'#d1d5db'} />
            </View>
            <View style={tw`flex-1 overflow-hidden mx-1`}>
              <Skeleton w={200} rounded={'0'} twrnc={`h-43 mr-1`} bg={'#d1d5db'} />
            </View>
            <View style={tw`flex-1 overflow-hidden mr-1`}>
              <Skeleton w={200} rounded={'0'} twrnc={`h-43 mr-1`} bg={'#d1d5db'} />
            </View>
        </View>
        <View style={[tw`flex flex-row items-center justify-around w-full overflow-hidden mt-1`]}>
            <View style={tw`flex-1 overflow-hidden ml-1`}>
              <Skeleton w={200} rounded={'0'} twrnc={`h-43 mr-1`} bg={'#d1d5db'} />
            </View>
            <View style={tw`flex-1 overflow-hidden mx-1`}>
              <Skeleton w={200} rounded={'0'} twrnc={`h-43 mr-1`} bg={'#d1d5db'} />
            </View>
            <View style={tw`flex-1 overflow-hidden mr-1`}>
              <Skeleton w={200} rounded={'0'} twrnc={`h-43 mr-1`} bg={'#d1d5db'} />
            </View>
        </View>
    </View>
  )
}


export default ListPostSkeleton