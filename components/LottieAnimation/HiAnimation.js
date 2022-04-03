import { Text, View, TouchableOpacity, Image } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import SvgHomeOutline from '../../assets/icons/home-outline.svg'



const HiAnimation = ({h1, h5}) => {
    const navigation = useNavigation();


    return (
        <View style={tw`w-full h-full justify-around items-center`}>
        <View style={tw`flex-6 justify-end`}>
            <View style={tw`border w-25 h-25 items-center justify-center rounded-full mb-10 overflow-hidden bg-white`}>
                {/* <SvgHomeOutline width={50}  /> */}
                <Image 
                    style={tw`w-20 h-20`}
                    source={require('../../assets/images/home-outline.jpg')}
                />
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