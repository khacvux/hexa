import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'


import ChatboxScreen from '../screens/ChatboxScreen';
import ChatsScreen from '../screens/ChatsScreen';
import MenuScreen from '../screens/MenuScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SelectFilesScreen from '../screens/SelectFilesScreen';
import DetailFeedsScreen from '../screens/DetailFeedsScreen';
import BottomNavigator from './BottomNavigator';
import LoginScreen from '../screens/LoginScreen';
import UpLoadPictureScreen from '../screens/UpLoadPictureScreen';
import { useSelector } from 'react-redux';
import FollowRequestsScreen from '../screens/FollowRequestsScreen';
import FollowersScreen from '../screens/FollowersScreen'
import FollowingsScreen from '../screens/FollowingsScreen';
import SongsPostScreen from '../screens/SongsPostScreen'
import MusicScreen from '../screens/MusicScreen';
import PlaylistScreen from '../screens/PlaylistScreen';
import UploadAudioScreen from '../screens/UploadAudioScreen';
import CreatePlaylistScreen from '../screens/CreatePlaylistScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    const token = useSelector(state => state.authReducer.token)


    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {
                token ? (
                    <>
                        <Stack.Screen name="HomeStack" component={BottomNavigator} />
                        <Stack.Screen name="DetailFeedsStack" component={DetailFeedsScreen} />
                        <Stack.Screen name="ProfileStack" component={ProfileScreen} />
                        <Stack.Screen name="MenuStack" component={MenuScreen} />
                        <Stack.Screen name="MyProfileStack" component={MyProfileScreen} />
                        <Stack.Screen name="NotificationStack" component={NotificationScreen} />
                        <Stack.Screen name="ChatboxStack" component={ChatboxScreen} />
                        <Stack.Screen name="ChatsStack" component={ChatsScreen} />
                        <Stack.Screen name="SelectFilesStack" component={SelectFilesScreen} />
                        <Stack.Screen name="UpLoadPictureStack" component={UpLoadPictureScreen} />
                        <Stack.Screen name="FollowRequestsStack" component={FollowRequestsScreen} />
                        <Stack.Screen name="FollowersStack" component={FollowersScreen} />
                        <Stack.Screen name="FollowingsStack" component={FollowingsScreen} />
                        <Stack.Screen name="PlaylistStack" component={PlaylistScreen} />
                        <Stack.Screen name="SongsPostStack" component={SongsPostScreen} />
                        <Stack.Screen name="UpLoadAudioStack" component={UploadAudioScreen} />
                        <Stack.Screen name="CreatePlaylistStack" component={CreatePlaylistScreen} />
                    </>
                ) : (
                    <Stack.Screen name="LoginStack" component={LoginScreen} />
                )
            }
            
            
        </Stack.Navigator>
    )
}

// const MusicStackNavigator = ({setTabBarHeight}) => {
//     return (
//         <Stack.Navigator
//             screenOptions={{
//                 headerShown: false,
//             }}
//             >
//             <Stack.Screen name="MusicStack"
//                 children={() => <MusicScreen setTabBarHeight={setTabBarHeight} />}
//             />
//             <Stack.Screen name="SongsPostStack" component={SongsPostScreen} />
//             <Stack.Screen name="ListTrackStack" component={ListTrackScreen} />
//         </Stack.Navigator>
//     )
// }


// export { MusicStackNavigator };

export default StackNavigator
