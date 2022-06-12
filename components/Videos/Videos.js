import { View, TouchableOpacity } from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av';
import { useEffect, useRef, useState } from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { pauseSong } from '../../redux/actions/songsAction';



const Videos = ({ uri, currentIndex, currentVisibleIndex }) => {


  const video = useRef(null)
  const dispatch = useDispatch()
  const [status, setStatus] = useState({});

  const handlePlay = () => {
    status.isPlaying
    ? video.current.pauseAsync()
    : video.current.playAsync()
    dispatch(pauseSong())    
  }

  useEffect(() => {
    if(video.current && currentIndex != currentVisibleIndex) {
      video.current.pauseAsync()
    }
  }, [currentVisibleIndex])


 


  return (
    <TouchableOpacity style={tw`relative`}
      activeOpacity={.9}
      onPress={handlePlay}
    >
      <View style={tw`absolute top-0 bottom-0 left-0 right-0 items-center justify-center z-100`} >
        {
          !status.isPlaying ? (
            <Ionicons name='play'
              size={35}
              style={tw`text-white opacity-50`}
            />
          ) : <></>
        }

      </View>
      <View>
        <Video
          source={{ uri: uri }}
          ref={video}
          style={tw`w-full h-full`}
          resizeMode="contain"
          onPlaybackStatusUpdate={status => setStatus(() => status)}
          usePoster
          isLooping
        />
      </View>



    </TouchableOpacity>

  )
}

export default Videos