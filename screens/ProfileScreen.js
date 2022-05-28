import { useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import InfomationUser from '../components/Profile/InfomationUser'
import tw from 'twrnc'
import ListPost from '../components/Profile/ListPosts'
import Contact from '../components/Profile/Contact'
import { useNavigation } from '@react-navigation/native'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileUserByID } from '../redux/actions/searchsAction'
import { TabListNavigator, TabListOfUserNavigator } from '../navigators/TopTabNavigatior'
import ProfileSkeletion from '../components/Skeleton/ProfileSkeletion'
import SafeArea from '../components/SafeArea'


const ProfileScreen = ({route}) => {


    const navigation = useNavigation();
    const dispatch = useDispatch();

    const { token } = useSelector(state => state.authReducer)

    const handleGoBack = () => {
        // dispatch(getListPostUser({userId, token}))
        navigation.goBack()
    }
    
    useEffect(() => {
        dispatch(getProfileUserByID({userId: route.params.userId, token: token }))
    }, [route.params.userId])
    
    
    const { profileUser } = useSelector(state => state.searchReducer)

    return (
        <SafeAreaView style={[tw`bg-white h-full`, SafeArea.AndroidSafeArea]}>
            <View style={tw`flex flex-row items-center justify-between pt-1 pb-2 px-4`}>
                <TouchableOpacity
                    activeOpacity={.6}
                    onPress={handleGoBack}
                >
                    <Ionicons name='chevron-back' size={23} />
                </TouchableOpacity>
                <Text style={tw`text-base font-bold`}>Profile</Text>
                <TouchableOpacity>
                    <Entypo name="dots-three-horizontal" size={18} color="black" />
                </TouchableOpacity>
            </View>
            {
                profileUser ? (
                    <View style={tw`flex flex-1`}>
                        <InfomationUser 
                            name={profileUser?.name} 
                            avatar={profileUser?.avatar} 
                            email={profileUser?.email}
                            numberOfFollower={profileUser?.numberOfFollower}
                            numberOfPosts={profileUser?.numberOfPosts}
                            numberOfFollowing={profileUser?.numberOfFollowing}
                        />  
                        <Contact
                            follow={profileUser?.follow}
                            followerId={route.params?.userId}
                        />
                        <View style={tw`mt-1 flex flex-1`}>
                            <TabListOfUserNavigator
                                numberOfPosts={profileUser?.numberOfPosts} 
                                userId={profileUser?.userId} 
                            />
                        </View>

                    </View>
                ) : (
                    <View style={tw`flex flex-1`}>
                        <ProfileSkeletion />     
                    </View>
                )
            }

        </SafeAreaView>
    )
}

export default ProfileScreen
