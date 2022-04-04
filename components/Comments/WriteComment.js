import { View, Image, TextInput } from 'react-native';
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { commentPost } from '../../redux/actions/postsAction';


const WriteComment = ({postId}) => {

  const dispatch = useDispatch()
  const { avatar, token, userId, name } = useSelector(state => state.authReducer)
  const [isComment, setComment] = useState()

  const handleComment = () => {
    dispatch(commentPost({token, userId, postId, comment: isComment, avatar, name}))
    setComment('')
  }


  return (
    <View style={tw`bg-gray-100 py-2 px-4 flex flex-row items-center`}>   
        <Image source={avatar ? {uri: avatar} : require('../../assets/images/defaultAvatar.png')} 
            style={tw`w-10 h-10 rounded-full mr-4`}
        />
        <TextInput
            style={tw`bg-white flex-1 py-3 rounded-full px-3`}
            placeholder='Write your comment...'
            value={isComment}
            onChangeText={val => setComment(val)}
            onEndEditing={handleComment}
        />
    </View>
  );
};

export default WriteComment;
