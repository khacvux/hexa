import { View, Dimensions } from 'react-native'
import tw from 'twrnc'
import Skeleton from './Skeleton'



const SkeletonFeeds = () => {
    const {width: SCREEN_WIDTH} = Dimensions.get('window');
    // frame size 3:2
    const FRAMESIZE_W = SCREEN_WIDTH;
    const FRAMESIZE_H = SCREEN_WIDTH/2*3;

  return (
    <View style={[tw` overflow-hidden flex bg-[#F5F7FA]`,  { width: FRAMESIZE_W, height: FRAMESIZE_H}]}>
        <View style={tw`absolute right-3 top-40`}>
            <Skeleton w={50} h={150} rounded={2} bg={'#8BC2D040'} />
        </View>
        <View
            style={tw`w-full h-45 py-3 absolute bottom-0 right-0 left-0 flex flex-col justify-end z-0`}
        >
            <View style={tw`px-4 flex flex-row items-center`}>
                <View style={tw`mr-2`}>
                    <Skeleton w={35} h={35} rounded={100} bg={'#8BC2D020'} />
                </View>
                <View>
                    <Skeleton w={150} h={20} rounded={1} bg={'#8BC2D035'} />
                </View>
            </View>
            <View style={tw`text-white my-2 px-5`}>
                <Skeleton w={350} h={60} rounded={2} bg={'#8BC2D050'} />
            </View>
            <View style={tw`flex flex-row h-4 w-full absolute bottom-0 left-0 right-0 items-center justify-center`}>
                <View  style={tw`mx-[1]`}>
                    <Skeleton w={7} h={5} rounded={10} bg={'#8BC2D040'} />
                </View>
                <View  style={tw`mx-[2]`}>
                    <Skeleton w={15} h={5} rounded={10} bg={'#8BC2D040'} />
                </View>
                <View  style={tw`mx-[1]`}>
                    <Skeleton w={7} h={5} rounded={10} bg={'#8BC2D040'} />
                </View>

            </View>
        </View>
    </View>
  )
}

export default SkeletonFeeds