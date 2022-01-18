import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, Text } from 'react-native'
import StackNavigator from './StackNavigator';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'; 
import tw from 'twrnc'
import Post from '../components/Home/Post';
import ProfileScreen from '../screens/ProfileScreen';


const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeTab" component={StackNavigator} 
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({focused}) => 
                        <AntDesign 
                            name='home'
                            style={focused ? tw`text-2xl text-[#5EC2EA]` : tw`text-2xl text-black` }
                        />
                    ),
                    tabBarStyle: tw`bg-[#F5F7FA]`,

                }}
            />
            <Tab.Screen name="FriendTab" component={Post}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({focused}) => 
                        <Feather 
                            name="users" 
                            style={focused ? tw`text-2xl text-[#5EC2EA]` : tw`text-2xl text-black` }
                        />
                    ),
                    tabBarStyle: tw`bg-[#F5F7FA]`,
                }}
            />
            <Tab.Screen name="ProfileTab" component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({focused}) => 
                        <AntDesign 
                            name="user" 
                            style={focused ? tw`text-2xl text-[#5EC2EA]` : tw`text-2xl text-black` }
                        />
                    ),
                    tabBarStyle: tw`bg-[#F5F7FA]`,
                }}
            />
            <Tab.Screen name="MenuTab" component={Post}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({focused}) => 
                        <Feather
                            name="menu" 
                            style={focused ? tw`text-2xl text-[#5EC2EA]` : tw`text-2xl text-black` }
                        />
                    ),
                    tabBarStyle: tw`bg-[#F5F7FA]`,
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigator
