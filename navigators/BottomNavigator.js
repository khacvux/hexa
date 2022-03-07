import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons'; 
import tw from 'twrnc'
import MenuScreen from '../screens/MenuScreen';

import SvgHome from '../icons/home.svg'
import SvgHomeOutline from '../icons/home-outline.svg'
import MyProfileScreen from '../screens/MyProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import HomeScreen from '../screens/HomeScreen';
import { View } from 'react-native';
import SearchScreen from '../screens/SearchScreen';
import MusicScreen from '../screens/MusicScreen';


const Tab = createBottomTabNavigator();

const BottomNavigator = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeTab" component={HomeScreen} 
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({focused}) => 
                        <>
                            {focused ? (
                                <SvgHome width={22} fill={"#5EC2EA"} />
                            ) : (
                                <SvgHomeOutline width={22} />
                            )}
                        </>


                    ),
                    tabBarStyle: tw`bg-[#F5F7FA]`,

                }}
            />
            <Tab.Screen name="SearchTab" component={SearchScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({focused}) => 
                        <Ionicons
                            name={focused ? 'search' : 'search-outline'}
                            style={focused ? (tw`text-xl text-[#5EC2EA]`) : (tw`text-xl`)}
                        />
                    ),
                    tabBarStyle: tw`bg-[#F5F7FA]`,
                }}
            />
            <Tab.Screen name="MusicTab" component={MusicScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({focused}) => 
                        <MaterialIcons
                            name='multitrack-audio'
                            style={focused ? (tw`text-xl text-[#5EC2EA]`) : (tw`text-xl`)}
                        />
                    ),
                    tabBarStyle: tw`bg-[#F5F7FA]`,
                }}
            />
            <Tab.Screen name="NotificationTab" component={NotificationScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({focused}) => {
                        return(
                            <View>
                                <Ionicons 
                                    name={focused ? 'ios-notifications-sharp' : 'ios-notifications-outline'} 
                                    style={focused ? tw`text-xl text-[#5EC2EA]` : tw`text-xl text-black` }
                                />

                            </View>
                        )
                    }),
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
                            style={focused ? (tw`text-xl text-[#5EC2EA]`) : (tw`text-xl`)}
                        />
                    ),
                    tabBarStyle: tw`bg-[#F5F7FA]`,
                }}
            />
            <Tab.Screen name="MenuTab" component={MenuScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({focused}) => 
                        <Feather
                            name='menu'
                            style={focused ? (tw`text-[#5EC2EA]`) : (tw``)}
                            size={23}
                        />
                    ),
                    tabBarStyle: tw`bg-[#F5F7FA]`,
                }}
            />
            
            
        </Tab.Navigator>
    )
}

export default BottomNavigator
