import { Text, View, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'
import SvgHomeOutline from '../../assets/icons/home-outline.svg'



const HiAnimation = ({h1, h5}) => {
    const navigation = useNavigation();


    return (
        <View style={tw`w-full h-full justify-around items-center`}>
        <View style={tw`flex-6 justify-end`}>
            {/* <LottieView 
            source={require('../../assets/lottieFiles/hi-animation.json')}
            style={tw`w-60 h-60`}
            autoPlay
            loop={true}
            /> */}
            <View style={tw`border-2 w-25 h-25 items-center justify-center rounded-full mb-10`}>
                <SvgHomeOutline width={50}  />
            </View>
        </View>
        <View style={tw`flex-5 px-13`}>
            <Text style={tw`text-lg tracking-[.2] mt-4 font-semibold text-center`}>
            {h1}
            </Text>
            <Text style={tw`text-sm tracking-[.2] mb-5 font-light text-center`}>
                {h5}
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('SearchTab')}
                style={tw`py-3 items-center bg-[#5EC2EA] rounded my-4`}
                activeOpacity={.5}
            >
                <Text style={tw`text-white font-bold tracking-[.2]`}>Find People to Follow</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}

export default HiAnimation