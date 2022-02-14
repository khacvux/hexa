import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'


import ChatboxScreen from '../screens/ChatboxScreen';
import ChatsScreen from '../screens/ChatsScreen';

import MenuScreen from '../screens/MenuScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreateNewScreen from '../screens/CreateNewScreen';
import MediaSelectorScreen from '../screens/MediaSelectorScreen';
import DetailFeedsScreen from '../screens/DetailFeedsScreen';
import BottomNavigator from './BottomNavigator';
import LoginScreen from '../screens/LoginScreen';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="HomeStack" component={BottomNavigator} />
            <Stack.Screen name="DetailFeedsStack" component={DetailFeedsScreen} />
            <Stack.Screen name="ProfileStack" component={ProfileScreen} />
            <Stack.Screen name="MenuStack" component={MenuScreen} />
            <Stack.Screen name="MyProfileStack" component={MyProfileScreen} />
            <Stack.Screen name="NotificationStack" component={NotificationScreen} />
            <Stack.Screen name="ChatboxStack" component={ChatboxScreen} />
            <Stack.Screen name="ChatsStack" component={ChatsScreen} />
            <Stack.Screen name="CreateNewStack" component={CreateNewScreen} />
            <Stack.Screen name="MediaSelectorStack" component={MediaSelectorScreen} />
            <Stack.Screen name="LoginStack" component={LoginScreen} />
            
            
        </Stack.Navigator>
    )
}

export default StackNavigator
