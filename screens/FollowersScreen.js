import { AntDesign } from '@expo/vector-icons'
import { useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import Empty from '../components/LottieAnimation/EmptyAnimation'
import Follower from '../components/Follows/Follower'
import { getListFollower } from '../redux/actions/followsAction'
import SafeArea from '../components/SafeArea'



const FollowersScreen = ({navigation}) => {

    const dispatch = useDispatch()
    const { userId, token } = useSelector(state => state.authReducer)
    const {followers} = useSelector(state => state.followsReducer)

    
    
    useEffect(() => {
        dispatch(getListFollower({token}))
    }, [])
    

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
                    <Text style={tw`w-full text-center text-base font-semibold`}>Followers</Text>
                </View>
                <View style={tw`flex flex-col w-full`}>
                    {
                        followers == 0 ? (
                            <Empty />
                        ) : (
                            <FlatList 
                                data={followers}
                                renderItem={({item}) => <Follower item={item} />}
                                keyExtractor={(item, index) => index.toString()}
                            />

                                // <Follower />
                           

                        )
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

export default FollowersScreen