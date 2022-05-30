import { View, Image, TextInput } from 'react-native';
import { BlurView } from 'expo-blur';
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { commentSong } from '../../redux/actions/songsAction';



const WriteCommentSongs = ({ songId }) => {
  
  const dispatch = useDispatch()
  const { avatar, token, userId } = useSelector(state => state.authReducer)
  const [isComment, setComment] = useState('')
  const handleComment = () => {
    if(isComment){
      dispatch(commentSong({token, userId, tusId: songId, comment: isComment }))
      setComment('')
    }
  }

  return (
    <BlurView
      style={tw`py-2 px-3 flex flex-row items-center`}
      intensity={20}
      tint='light'
    >
      <Image source={avatar ? { uri: avatar } : require('../../assets/images/defaultAvatar.png')}
        style={tw`w-12 h-12 rounded-full mr-2 border border-gray-200`}
      />
      <TextInput
        style={tw`bg-white flex-1 py-3 rounded-xl px-3 border border-gray-200`}
        placeholder='Write your comment...'
        placeholderTextColor='#ccc'
        value={isComment}
        onChangeText={val => setComment(val)}
        onEndEditing={handleComment}
      />
    </BlurView>
  )
}

export default WriteCommentSongs