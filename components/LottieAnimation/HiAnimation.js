import { Text, View } from 'react-native'
import tw from 'twrnc'
import LottieView from 'lottie-react-native'


const HiAnimation = ({h1, h5}) => {
  return (
    <View style={tw`w-full h-full justify-around items-center`}>
     <View style={tw`flex-6 justify-end`}>
        <LottieView 
          source={require('../../assets/lottieFiles/hi-animation.json')}
          style={tw`w-35 h-35`}
          autoPlay
          loop={true}
        />
      </View>
      <View style={tw`flex-5 px-20`}>
        <Text style={tw`text-lg tracking-[.2] my-3 font-semibold text-center`}>
          {h1}
        </Text>
        <Text style={tw`text-sm tracking-[.2] my-1 font-light text-center`}>
            {h5}
        </Text>
      </View>
    </View>
  )
}

export default HiAnimation