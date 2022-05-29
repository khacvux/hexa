import { AntDesign, Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Switch  } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import { signOut, setFollowStatus } from '../redux/actions/authAction'
import OnLoadingModal from '../components/Modal/OnLoadingModal'
import SafeArea from '../components/SafeArea'





const MenuScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const { followStatus, token, userId } = useSelector(state => state.authReducer)
    const { followStatusLoading } = useSelector(status => status.onLoadingReducer)
    const [ privateAccount, setPrivateAccount] = useState(followStatus);
    console.log(followStatusLoading)

    const handlePressFollowStatus = () => {
        dispatch(setFollowStatus({token, userId}))
        setPrivateAccount(!privateAccount)
    }


    return (
        <SafeAreaView style={[tw`bg-white h-full`, SafeArea.AndroidSafeArea]}>
            <View style={tw`flex flex-row items-center px-3 my-2`}>
                <Ionicons 
                    name='menu'
                    size={29}
                    style={tw`mx-1`}
                />
                <Text style={tw`font-semibold text-2xl`}>Menu</Text>

            </View>
            <ScrollView contentContainerStyle ={tw`px-3 flex flex-col items-center`}>
                <TouchableOpacity 
                    style={tw`w-full py-3 px-2 flex flex-row justify-between`}
                    onPress={() => navigation.navigate('FollowersStack')}
                >
                    <Text style={tw`text-base`}>
                        Followers
                    </Text>
                    <AntDesign name='right' />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={tw`w-full py-3 px-2 flex flex-row justify-between`}
                    onPress={() => navigation.navigate('FollowingsStack')}
                >
                    <Text style={tw`text-base`}>
                        Followings
                    </Text>
                    <AntDesign name='right' />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={tw`w-full py-3 px-2 flex flex-row justify-between items-center`}
                    // onPress={}
                >
                    <Text style={tw`text-base`}>
                        Private Account ?                        
                    </Text>
                    <Switch
                        trackColor={{ false: "#C6CBD9", true: "#5EC2EA" }}
                        thumbColor={"#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={handlePressFollowStatus}
                        value={!privateAccount}
                    />
                </TouchableOpacity>
                    {
                        followStatus ? (
                                <></>
                            ) : (
                            <TouchableOpacity 
                                style={tw`w-full py-3 px-2 flex flex-row justify-between`}
                                onPress={() => navigation.navigate('FollowRequestsStack')}
                                >
                                <Text style={tw`text-base`}>
                                    Follow Requests
                                </Text>
                                <AntDesign name='right' />
                            </TouchableOpacity>

                        )
                    }



                <View style={tw`py-3 border-t w-full border-gray-200`}>
                    <TouchableOpacity 
                        style={tw`bg-gray-100 w-full py-[16] items-center rounded-lg`}
                        onPress={() => {
                            dispatch(signOut())
                        }}    
                    >
                        <Text style={tw`text-[#dc143c] font-bold`}>Sign out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {/* <OnLoadingModal showLoading={followStatusLoading}/> */}
        </SafeAreaView>
    )
}

export default MenuScreen
