import { View, Image, TextInput } from 'react-native';
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { commentPost } from '../../redux/actions/postsAction';
import { BlurView } from 'expo-blur';


const WriteComment = ({postId}) => {

  const dispatch = useDispatch()
  const { avatar, token, userId, name } = useSelector(state => state.authReducer)
  const [isComment, setComment] = useState()

  const handleComment = () => {
    if(isComment){
      dispatch(commentPost({token, userId, postId, comment: isComment, avatar, name}))
      setComment('')
    }
  }


  return (
    <BlurView 
      style={tw`py-2 px-3 flex flex-row items-center`}
      intensity={20}
      tint='light'
    >   
        <Image source={avatar ? {uri: avatar} : require('../../assets/images/defaultAvatar.png')} 
            style={tw`w-12 h-12 rounded-full mr-2 border border-gray-200`}
        />
        <TextInput
            style={tw`bg-white flex-1 py-3 rounded-xl px-3 border border-gray-200`}
            placeholder='Write your comment...'
            value={isComment}
            onChangeText={val => setComment(val)}
            onEndEditing={handleComment}
        />
    </BlurView>
  );
};

export default WriteComment;
