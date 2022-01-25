import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, Text } from 'react-native'
import StackNavigator from './StackNavigator';
import { Ionicons, Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import tw from 'twrnc'
import Post from '../components/Home/Post';
import MenuScreen from '../screens/MenuScreen';

import SvgHome from '../icons/home.svg'
import SvgHomeOutline from '../icons/home-outline.svg'
import MyProfileScreen from '../screens/MyProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';


const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeTab" component={StackNavigator} 
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({focused}) => 
                        <>
                            {focused ? (
                                <SvgHome width={26} fill={"#5EC2EA"} />
                            ) : (
                                <SvgHomeOutline width={26} />
                            )}
                        </>


                    ),
                    tabBarStyle: tw`bg-[#F5F7FA]`,

                }}
            />
            <Tab.Screen name="SearchTab" component={MenuScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({focused}) => 
                        <Ionicons
                            name={focused ? 'search' : 'search-outline'}
                            style={focused ? (tw`text-2xl text-[#5EC2EA]`) : (tw`text-2xl`)}
                        />
                    ),
                    tabBarStyle: tw`bg-[#F5F7FA]`,
                }}
            />
            <Tab.Screen name="MusicTab" component={MenuScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({focused}) => 
                        <Ionicons
                            name={focused ? 'md-musical-notes' : 'md-musical-notes-outline'}
                            style={focused ? (tw`text-2xl text-[#5EC2EA]`) : (tw`text-2xl`)}
                        />
                    ),
                    tabBarStyle: tw`bg-[#F5F7FA]`,
                }}
            />
            <Tab.Screen name="NotificationTab" component={NotificationScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({focused}) => 
                        <Ionicons 
                            name={focused ? 'ios-notifications-sharp' : 'ios-notifications-outline'} 
                            style={focused ? tw`text-2xl text-[#5EC2EA]` : tw`text-2xl text-black` }
                        />
                    ),
                    tabBarStyle: tw`bg-[#F5F7FA]`,
                }}
            />
            <Tab.Screen name="ProfileTab" component={MyProfileScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({focused}) => 
                        <Feather
                            name={'user'} 
                            style={focused ? (tw`text-2xl text-[#5EC2EA]`) : (tw`text-2xl`)}
                        />
                    ),
                    tabBarStyle: tw`bg-[#F5F7FA]`,
                }}
            />
            
        </Tab.Navigator>
    )
}

export default BottomNavigator
