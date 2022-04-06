import { AntDesign } from '@expo/vector-icons'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import Empty from '../components/LottieAnimation/EmptyAnimation'
import FollowRequest from '../components/Follows/FollowRequest'
import SafeArea from '../components/SafeArea'
import { useEffect } from 'react'
import { getListFollowRequest } from '../redux/actions/followsAction'



const FollowRequestsScreen = ({navigation}) => {

    const dispatch = useDispatch()
    const { followRequests } = useSelector(state => state.followsReducer)
    const { token, userId } = useSelector(state => state.authReducer)

    useEffect(() => {
        dispatch(getListFollowRequest({userId, token}))
    }, [])
    // console.log(followRequests)


  return (
    <SafeAreaView style={[tw`bg-white`, SafeArea.AndroidSafeArea]}>
        <View style={tw`w-full h-full bg-white flex flex-col items-center bg-[#F5F7FA]`}> 
            <View style={tw`justify-center items-center w-full py-3 bg-white px-3 relative`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={tw`absolute left-3 p-2 z-50`}
                >
                    <AntDesign name='left' size={18} />
                </TouchableOpacity>
                <Text style={tw`w-full text-center text-base font-semibold`}>Follow Requests</Text>
            </View>
            <View style={tw`flex flex-col`}>
                {
                    followRequests.length == 0 ? (
                        <Empty /> 
                    ) : (
                        <FlatList 
                            data={followRequests}
                            renderItem={({item}) => <FollowRequest item={item} />}
                            keyExtractor={item => item.followId}
                            showsVerticalScrollIndicator={false}
                        />
                        // <View>
                        //     <FollowRequest />
                        //     <FollowRequest />
                        //     <FollowRequest />
                        // </View>
                    )
                }
            </View>
        </View>
    </SafeAreaView>
  )
}

export default FollowRequestsScreen