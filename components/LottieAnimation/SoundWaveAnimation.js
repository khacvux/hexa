import { Text, View } from 'react-native'
import tw from 'twrnc'
import LottieView from 'lottie-react-native'


const SoundWaveAnimation = () => {
  return (
    <LottieView 
        source={require('../../assets/lottieFiles/sound-wave.json')}
        style={tw`w-8 h-8`}
        autoPlay
        loop={true}
    />
  )
}

export default SoundWaveAnimation