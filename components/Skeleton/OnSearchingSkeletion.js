import { View } from 'react-native'
import tw from 'twrnc'
import Skeleton from './Skeleton'





const OnSearchingSkeletion = () => {
  return (
      <View style={tw`mt-5`}>
        <View style={tw`flex flex-row items-center py-2`}>   
            <Skeleton bg={'#ccc'} rounded={'1000'} twrnc={'w-14 h-14'} />                 
            <View style={tw`mx-2`}>
                <Skeleton w={200} h={20} bg={'#ccc'} rounded={'2'} twrnc={`mb-1`} />                 
                <Skeleton w={120} h={12} bg={'#ccc'} rounded={'1'} />                 
            </View>
        </View>
        <View style={tw`flex flex-row items-center py-2`}>   
            <Skeleton bg={'#ccc'} rounded={'1000'} twrnc={'w-14 h-14'} />                 
            <View style={tw`mx-2`}>
                <Skeleton w={170} h={20} bg={'#ccc'} rounded={'2'} twrnc={`mb-1`} />                 
                <Skeleton w={90} h={12} bg={'#ccc'} rounded={'1'} />                 
            </View>
        </View>
        <View style={tw`flex flex-row items-center py-2`}>   
            <Skeleton bg={'#ccc'} rounded={'1000'} twrnc={'w-14 h-14'} />                 
            <View style={tw`mx-2`}>
                <Skeleton w={230} h={20} bg={'#ccc'} rounded={'2'} twrnc={`mb-1`} />                 
                <Skeleton w={60} h={12} bg={'#ccc'} rounded={'1'} />                 
            </View>
        </View>
        <View style={tw`flex flex-row items-center py-2`}>   
            <Skeleton bg={'#ccc'} rounded={'1000'} twrnc={'w-14 h-14'} />                 
            <View style={tw`mx-2`}>
                <Skeleton w={130} h={20} bg={'#ccc'} rounded={'2'} twrnc={`mb-1`} />                 
                <Skeleton w={60} h={12} bg={'#ccc'} rounded={'1'} />                 
            </View>
        </View>

      </View>

  )
}

export default OnSearchingSkeletion