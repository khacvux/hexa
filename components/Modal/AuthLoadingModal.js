import { View, Text, Modal } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native';
import tw from 'twrnc';

const AuthLoadingModal = ({authLoading}) => {
      

  return (
    <Modal
        transparent={true}
        visible={authLoading}
    >   
        <View style={tw`w-full h-full items-center justify-center bg-[#CCCCCC40]`}>
            <LottieView 
                source={require('../../assets/images/loading.json')}
                style={tw`w-30 h-30`}
                autoPlay
                loop={true}
            />
        </View>

    </Modal>
  )
}

export default AuthLoadingModal