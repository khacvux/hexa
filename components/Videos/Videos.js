import { View, TouchableOpacity } from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av';
import { useRef, useState } from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';


const Videos = ({ uri }) => {


  const video = useRef(null)
  const [status, setStatus] = useState({});


  return (
    <TouchableOpacity style={tw`relative`}
      activeOpacity={.9}
      onPress={() =>
        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
      }
      
    >
      <View style={tw`absolute top-0 bottom-0 left-0 right-0 items-center justify-center z-100`} >
        {
          !status.isPlaying ? (
            <Ionicons name='play'
              size={45}
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