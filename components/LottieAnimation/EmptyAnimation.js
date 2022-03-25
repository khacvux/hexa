import { View } from 'react-native'
import tw from 'twrnc'
import LottieView from 'lottie-react-native'


const Empty = () => {
  return (
    <View style={tw`w-full h-full justify-around items-center`}>
      <LottieView 
        source={require('../../assets/lottieFiles/empty.json')}
        style={tw`w-35 h-35`}
        autoPlay
        loop={true}
      />
      <View></View>
    </View>
  )
}

export default Empty