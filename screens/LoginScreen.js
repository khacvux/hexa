import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginOptions from '../components/Login/LoginOptions'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const LoginScreen = () => {
  return (
    <LoginOptions />
  )
}

export default LoginScreen