import { View, Text } from 'react-native'
import tw from 'twrnc'
import Skeleton from './Skeleton'




const SongSkeleton = () => {
  return (
    <View
    style={tw`flex flex-row items-center bg-[#F5F7FA] p-2 rounded-lg my-1 justify-between`}
>
    <View style={tw`flex flex-row items-center flex-1`}>
        <Skeleton twrnc={'h-11 w-11'} rounded={2} bg={'#B4D8E0'} />
        <Skeleton twrnc={'h-5 w-40 ml-1'} bg={'#B4D8E0'} rounded={1} />
    </View>
    <View style={tw`flex flex-row items-center `}>
        {/* <TouchableOpacity>
            <FontAwesome5 
                name='play'
                size={18}
                style={tw`text-[#5EC2EA] mx-2`}
            />
        </TouchableOpacity>
        <TouchableOpacity>
            <FontAwesome5 
                name='heart'
                size={18}
                style={tw`text-gray-300 mr-4 ml-3`}
            />
        </TouchableOpacity> */}
        <Skeleton twrnc={'h-6 w-10 mr-3'} bg={'#B4D8E0'} rounded={1} />
       
    </View>

</View>
  )
}

export default SongSkeleton