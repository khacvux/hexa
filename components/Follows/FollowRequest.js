import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import { confirmRequestFollow } from '../../redux/actions/searchsAction';

const FollowRequest = ({item}) => {

    const dispatch = useDispatch();
    const { token } = useSelector(state => state.authReducer)


    const handleAccept = () => dispatch(confirmRequestFollow({token, userId: item.userId}))

    return (
        <View style={tw`flex flex-row justify-between items-center py-2`}>
            <View style={tw`w-full px-3 justify-between flex flex-row`}>
                <View style={tw`flex flex-row items-center`}>
                    <Image 
                        style={tw`w-14 h-14 rounded-full border-2 border-gray-200 mr-2`}
                        resizeMode='cover'
                        source={item.userImage ? {uri: item.userImage} : require('../../assets/images/defaultAvatar.png')}
                    />
                    <View>
                        <Text style={tw`text-base font-semibold`}>{item.userName}</Text>
                        <Text style={tw`text-xs font-light text-gray-600`}>@kieutrinh123</Text>
                    </View>
                </View>
                <View style={tw`flex flex-row items-center`}>
                    <TouchableOpacity 
                        style={tw` bg-[#5EC2EA] px-4 py-2 rounded-lg`}
                        activeOpacity={.4}    
                        onPress={handleAccept}
                    >
                        <Text style={tw`text-white font-bold text-xs`}>
                            Accept
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={tw`border border-gray-300 px-[13] py-[7] ml-1 rounded-lg`}
                        activeOpacity={.4}    
                    >
                        <Text style={tw`font-bold text-xs`}>
                            Delete
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default FollowRequest