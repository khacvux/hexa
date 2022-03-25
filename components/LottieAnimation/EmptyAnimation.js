import { Text, View } from 'react-native'
import tw from 'twrnc'
import LottieView from 'lottie-react-native'


const Empty = ({title}) => {
  return (
    <View style={tw`w-full h-full justify-around items-center`}>
     <View style={tw`flex-4 justify-end`}>
        <LottieView 
          source={require('../../assets/lottieFiles/empty.json')}
          style={tw`w-35 h-35`}
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

export default Empty