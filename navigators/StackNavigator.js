import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import Home from '../components/Home/Home';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeStack" component={Home} 
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator
