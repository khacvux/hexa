import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'


import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeStack" component={HomeScreen} 
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
        </Stack.Navigator>
    )
}

export default StackNavigator
