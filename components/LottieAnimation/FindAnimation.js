import { View } from 'react-native'
import tw from 'twrnc'
import LottieView from 'lottie-react-native';



const FindingAnimation = () => {
  return (
    <View style={tw`w-full h-full justify-around items-center`}>
      <LottieView 
        source={require('../../assets/lottieFiles/searching.json')}
        style={tw`w-70 h-70`}
        autoPlay
        loop={true}
      />
      <View></View>
    </View>
  )
}

export default FindingAnimation