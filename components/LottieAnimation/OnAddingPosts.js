import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'
import tw from 'twrnc'

const OnAddingPosts = () => {
  return (
    <View style={tw` h-8 overflow-hidden flex flex-row items-center justify-center bg-[#F5F7FA] rounded-full px-2 mx-2`}>
            <LottieView 
                source={require('../../assets/lottieFiles/uploading.json')}
                style={tw`h-6 w-6`}
                autoPlay={true}
                loop={true}
            />
      <Text style={tw`font-light tracking-[.2] text-xs ml-1`}>Uploading posts...</Text>
    </View>
  )
}

export default OnAddingPosts