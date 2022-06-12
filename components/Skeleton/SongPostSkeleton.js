import { View, Text, Dimensions } from 'react-native'
import tw from 'twrnc';
import Skeleton from './Skeleton';

const SongPostSkeleton = () => {

    const { width: SCREEN_WIDTH } = Dimensions.get('window')
    const FRAMESIZE_W = SCREEN_WIDTH;
    const FRAMESIZE_H = SCREEN_WIDTH * 5 / 9;


    return (
        <View style={[tw`mb-3 mt-1 overflow-hidden w-full`]}>
            <View style={[tw`shadow-lg`, { height: FRAMESIZE_H }]} >
                <Skeleton rounded={3} bg={'#C9D8E0'} twrnc={'w-full h-full'} />

                <View style={tw` absolute bottom-1 left-1 right-1 flex flex-row items-center p-1`}>
                    <View>
                        <Skeleton twrnc={'w-12 h-12'} bg={'#ccc'} rounded={99} />
                    </View>
                    <View style={tw`ml-2`}>
                        <View>
                            <Skeleton h={15} w={120} rounded={1} bg={'#ccc'} />
                        </View>
                        <View style={tw`flex flex-row`}>
                            <Skeleton h={15} w={80} rounded={1} bg={'#ccc'} twrnc={'my-[1]'} />

                        </View>
                        <View style={tw`flex flex-row items-center`}>
                            <Skeleton h={10} w={35} rounded={1} bg={'#ccc'} />

                        </View>
                    </View>
                </View>
            </View>
            <View style={tw`flex flex-row items-center justify-between px-3 mt-1`}>
                <View style={tw`flex flex-row items-center `}>
                    <View style={tw`my-1 items-center flex-row`}>
                        <Skeleton twrnc={'w-14 h-6'} rounded={99} bg={'#ccc'} />
                    </View>
                    <View style={tw`my-1 items-center flex-row`}>
                        <Skeleton twrnc={'w-12 h-6 mx-1'} rounded={99} bg={'#ccc'} />

                    </View>
                    <View style={tw`my-1 items-center flex-row`} >
                        <Skeleton twrnc={'w-7 h-6'} rounded={99} bg={'#ccc'} />
                    </View>
                </View>

                {/* CALL OPTION MODAL */}

                <View
                    style={tw`my-1 items-center flex-row`}
                >
                    <Skeleton twrnc={'w-7 h-6'} rounded={99} bg={'#ccc'} />
                </View>
            </View>
        </View>
    )
}

export default SongPostSkeleton