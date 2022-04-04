import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const OnAddingSuccess = () => {
  return (
    <View style={tw` h-8 overflow-hidden flex flex-row items-center justify-center bg-[#F5F7FA] rounded-full px-2 mx-2`}>
            <LottieView 
                source={require('../../assets/lottieFiles/check-okey-done.json')}
                style={tw`h-6 w-6`}
                autoPlay={true}
                loop={true}
            />
      <Text style={tw`font-light tracking-[.2] text-xs ml-1`}>Success!!</Text>
    </View>
  )
}

export default OnAddingSuccess