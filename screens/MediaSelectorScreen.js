import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'


import MediaSelector from '../components/Upload/MediaSelector'



const MediaSelectorScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <MediaSelector />
    </SafeAreaView>
  )
}

export default MediaSelectorScreen