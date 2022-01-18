import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, Text } from 'react-native'
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeTab" component={StackNavigator} 
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigator
