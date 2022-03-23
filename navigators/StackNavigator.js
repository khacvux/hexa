import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'


import ChatboxScreen from '../screens/ChatboxScreen';
import ChatsScreen from '../screens/ChatsScreen';
import MenuScreen from '../screens/MenuScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UpLoadScreen from '../screens/UpLoadScreen';
import DetailFeedsScreen from '../screens/DetailFeedsScreen';
import BottomNavigator from './BottomNavigator';
import LoginScreen from '../screens/LoginScreen';
import UpLoadPictureScreen from '../screens/UpLoadPictureScreen';
import ListTrackScreen from '../screens/ListTrackScreen';
import { useSelector } from 'react-redux';
import FollowRequestsScreen from '../screens/FollowRequestsScreen';
import FollowersScreen from '../screens/FollowersScreen'


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
                        <Stack.Screen name="UpLoadStack" component={UpLoadScreen} />
                        <Stack.Screen name="UpLoadPictureStack" component={UpLoadPictureScreen} />
                        <Stack.Screen name="ListTrackStack" component={ListTrackScreen} />
                        <Stack.Screen name="FollowRequestsStack" component={FollowRequestsScreen} />
                        <Stack.Screen name="FollowersStack" component={FollowersScreen} />
                    </>
                ) : (
                    <Stack.Screen name="LoginStack" component={LoginScreen} />
                )
            }
            
            
        </Stack.Navigator>
    )
}

export default StackNavigator
