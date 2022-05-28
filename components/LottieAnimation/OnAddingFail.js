import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'
import tw from 'twrnc'

const OnAddingFail = () => {
  return (
    <View style={tw` h-8 overflow-hidden flex flex-row items-center justify-center bg-[#F5F7FA] rounded-full px-2 ml-1 mr-2`}>
            <LottieView 
                source={require('../../assets/lottieFiles/error-animation.json')}
                style={tw`h-8 w-8`}
                autoPlay={true}
                loop={true}
            />
      <Text style={tw`font-light tracking-[.2] text-xs ml-1`}>Upload Failed!</Text>
    </View>
  )
}

export default OnAddingFail