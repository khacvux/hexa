import { View, Dimensions } from 'react-native'
import tw from 'twrnc'
import Skeleton from './Skeleton'



const SkeletonFeeds = () => {
    const {width: SCREEN_WIDTH} = Dimensions.get('window');
    // frame size 3:2
    const FRAMESIZE_W = SCREEN_WIDTH;
    const FRAMESIZE_H = SCREEN_WIDTH/2*3.15;

  return (
    <View style={[tw` overflow-hidden flex bg-gray-300 my-2`,  { width: FRAMESIZE_W, height: FRAMESIZE_H}]}>
        <View style={tw`absolute right-2 top-40`}>
            <Skeleton w={50} h={170} rounded={2} bg={'#ccc'} twrnc={'bg-gray-100'} />
        </View>
        <View
            style={tw`w-full h-45 py-3 absolute bottom-0 right-0 left-0 flex flex-col justify-end z-0`}
        >
            <View style={tw`px-4 flex flex-row items-center`}>
                <View style={tw`mr-2`}>
                    <Skeleton w={40} h={40} rounded={100} bg={'#ccc'} twrnc={'bg-gray-100'}  />
                </View>
                <View>
                    <Skeleton w={150} h={20} rounded={1} bg={'#ccc'} twrnc={'bg-gray-100'}  />
                </View>
            </View>
            <View style={tw`text-white my-2 px-5`}>
                <Skeleton w={350} h={40} rounded={2} bg={'#ccc'} twrnc={'bg-gray-100'}  />
            </View>
            <View style={tw`flex flex-row h-4 w-full absolute bottom-0 left-0 right-0 items-center justify-center`}>
                <View  style={tw`mx-[1]`}>
                    <Skeleton w={7} h={5} rounded={10} bg={'#ccc'} twrnc={'bg-gray-100'}  />
                </View>
                <View  style={tw`mx-[2]`}>
                    <Skeleton w={15} h={5} rounded={10} bg={'#ccc'} twrnc={'bg-gray-100'}  />
                </View>
                <View  style={tw`mx-[1]`}>
                    <Skeleton w={7} h={5} rounded={10} bg={'#ccc'} twrnc={'bg-gray-100'}  />
                </View>

            </View>
        </View>
    </View>
  )
}

export default SkeletonFeeds