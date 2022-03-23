import { View, Text } from 'react-native'
import React from 'react'
import LoginOptions from '../components/Login/LoginOptions'
import OnLoadingModal from '../components/Modal/OnLoadingModal'
import { useSelector } from 'react-redux'


const LoginScreen = () => {
  const authLoading = useSelector(state => state.onLoadingReducer.authLoading)

  return (
    <View>
      <LoginOptions />
      <OnLoadingModal showLoading={authLoading} />
    </View>
  )
}

export default LoginScreen