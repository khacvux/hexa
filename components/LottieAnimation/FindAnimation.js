import { View, Text } from 'react-native'
import tw from 'twrnc'
import LottieView from 'lottie-react-native';



const FindingAnimation = ({title}) => {
  return (
    <View style={tw`w-full h-full justify-center items-center`}>
      <View style={tw`flex-4 justify-end`}>
        <LottieView 
          source={require('../../assets/lottieFiles/searching.json')}
          style={tw`w-70 h-70`}
          autoPlay
          loop={true}
        />
      </View>
      <View style={tw`flex-5`}>
        <Text style={tw`text-lg tracking-[.2] my-3 font-light`}>
          {title}
        </Text>
      </View>
    </View>
  )
}

export default FindingAnimation