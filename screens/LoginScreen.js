import { View, Text } from 'react-native'
import React from 'react'
import LoginOptions from '../components/Login/LoginOptions'
import AuthLoadingModal from '../components/Modal/AuthLoadingModal'
import { useSelector } from 'react-redux'


const LoginScreen = () => {
  const authLoading = useSelector(state => state.onLoadingReducer.authLoading)

  return (
    <View>
      <LoginOptions />
      <AuthLoadingModal authLoading={authLoading} />
    </View>
  )
}

export default LoginScreen