import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import tw from 'twrnc'
import { EvilIcons, Ionicons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux';
import { hidePlayerBar, pauseSong, playSong } from '../../redux/actions/songsAction';
import DetailPlayerModal from '../Modal/DetailPlayerModal';



const Player = ({ }) => {
  const dispatch = useDispatch()
  const { songPlaying, tabBarHeight, statusPlayer } = useSelector(state => state.songReducer)
  const [showDetailPlayer, setShowDetailPlayer] = useState(false)

  const handleClose = () => {
    return dispatch(hidePlayerBar())
  }

  const handlePause = () => {
    dispatch(pauseSong())
  }

  const handlePlay = () => {
    dispatch(playSong())
  }



  return (
    <View style={[tw`bg-white border-t border-gray-100 py-2 px-3 absolute left-0 right-0 bottom-[45px] z-100 flex flex-row items-center`, { bottom: tabBarHeight }]}>
      <TouchableOpacity style={tw`w-full`}
        onPress={() => setShowDetailPlayer(true)}
      >
        <View style={tw`flex flex-row justify-between items-center`}>
          <View style={tw`flex flex-row items-center w-1/2`}
          >
            <Image
              style={tw`w-10 h-10 rounded mr-2`}
              source={songPlaying?.song?.image ? { uri: songPlaying?.song.image } : require('../../assets/images/default-song-avatar.jpeg')}
            />
            <View>
              <Text numberOfLines={1}>{songPlaying?.song.name}</Text>
              <Text style={tw`text-xs font-light`}>{songPlaying?.song.songUserList[0].name}</Text>
            </View>
          </View>
          <View style={tw`flex flex-row items-center`}>
            <View style={tw`px-2 flex-row items-center`}>
              {
                statusPlayer == 'pause' ? (
                  <TouchableOpacity
                    onPress={handlePlay}
                  >
                    <Ionicons name="play" size={23} style={tw`p-2 text-gray-600`} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={handlePause}
                  >
                    <Ionicons name="ios-pause-outline" size={23} style={tw`p-2 text-[#5EC2EA]`} />
                  </TouchableOpacity>
                )
              }


            </View>
            <TouchableOpacity
              style={tw`py-2 px-2`}
              onPress={handleClose}
            >
              <EvilIcons name='close' size={23} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <DetailPlayerModal
        setShowDetailPlayer={setShowDetailPlayer}
        showDetailPlayer={showDetailPlayer}
        songPlaying={songPlaying}
      />
    </View>
  )
}

export default Player