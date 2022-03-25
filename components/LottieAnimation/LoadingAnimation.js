import { View } from 'react-native'
import tw from 'twrnc'
import LottieView from 'lottie-react-native'


const LoadingAnimation = () => {
  return (
    <View style={tw`w-full h-full justify-around items-center`}>
      <LottieView 
        source={require('../../assets/lottieFiles/loading.json')}
        style={tw`w-35 h-35`}
        autoPlay={true}
        loop={true}
      />
      <View></View>
    </View>
  )
}

export default LoadingAnimation