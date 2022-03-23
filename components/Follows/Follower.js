import { View, Text, Image, TouchableOpacity } from 'react-native'
import tw from 'twrnc'

const Follower = () => {
  return (
    <View style={tw`flex flex-row items-center py-2 px-3`}>
        <View style={tw`w-full px-3 justify-between flex flex-row`}>
            <View style={tw`flex flex-row items-center`}>
                <Image 
                    style={tw`w-14 h-14 rounded-full border-2 border-gray-200 mr-2`}
                    resizeMode='cover'
                    source={{uri: 'https://ss-images.saostar.vn/wp700/2018/03/29/2485559/ongngoai_9.jpg'}}
                />
                <View>
                    <Text style={tw`text-base font-semibold`}>Kieu Trinh</Text>
                    <Text style={tw`text-xs font-light text-gray-600`}>@kieutrinh123</Text>
                </View>
            </View>
            <View style={tw`flex flex-row items-center`}>
                <TouchableOpacity 
                    style={tw` bg-[#5EC2EA] px-6 py-2 rounded-lg`}
                    activeOpacity={.4}    
                >
                    <Text style={tw`text-white font-bold text-xs`}>
                        Follow
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Follower