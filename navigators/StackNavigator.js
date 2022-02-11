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


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeStack" component={BottomNavigator} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="DetailFeedsStack" component={DetailFeedsScreen} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="ProfileStack" component={ProfileScreen} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="MenuStack" component={MenuScreen} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="MyProfileStack" component={MyProfileScreen} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="NotificationStack" component={NotificationScreen} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="ChatboxStack" component={ChatboxScreen} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="ChatsStack" component={ChatsScreen} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="CreateNewStack" component={CreateNewScreen} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="MediaSelectorStack" component={MediaSelectorScreen} 
                options={{
                    headerShown: false,
                }}
            />
            
        </Stack.Navigator>
    )
}

export default StackNavigator
