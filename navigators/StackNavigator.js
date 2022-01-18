import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'


import HomeScreen from '../screens/HomeScreen';
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
        </Stack.Navigator>
    )
}

export default StackNavigator
