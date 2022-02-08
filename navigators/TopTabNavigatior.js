import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PostImage from '../components/UpLoad/PostImage';
import PostAudio from '../components/UpLoad/PostAudio';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
const TopTab = createMaterialTopTabNavigator();

const TopTabNavigatior = () => {

    const insets = useSafeAreaInsets();

    return (
        <TopTab.Navigator
            style={[tw`bg-white`, { paddingTop: insets.top }]}
            screenOptions={{
                // tabBarItemStyle: tw`w-35`,
                // tabBarLabelStyle: tw`text-sm normal-case`,
                tabBarStyle: tw`h-11`,
                tabBarIndicatorStyle: tw`bg-[#5EC2EA] rounded-full`,
                tabBarIndicatorContainerStyle: tw``,
                tabBarShowLabel: false,
                tabBarShowIcon: true,
              }}
        >
            <TopTab.Screen 
                name='PostImageTopTap' 
                component={PostImage} 
                options={{ 
                    tabBarIcon: (({focused}) => 
                        <>
                            {focused ? (
                                <Ionicons name='image' 
                                    style={tw`text-[#5EC2EA]`}
                                    size={23}
                                />
                            ) : (
                                <Ionicons name='image-outline' 
                                    style={tw`text-gray-500`}
                                    size={23}
                                />
                            )}
                        </>
                    ),
                }}

            />
            <TopTab.Screen 
                name='PostAudioTopTap' 
                component={PostAudio} 
                options={{ 
                    tabBarIcon: (({focused}) => 
                        <>
                            {focused ? (
                                <MaterialIcons name='multitrack-audio' 
                                    style={tw`text-[#5EC2EA]`}
                                    size={23}
                                />
                            ) : (
                                <MaterialIcons name='multitrack-audio' 
                                    style={tw`text-gray-500`}
                                    size={23}
                                />
                            )}
                        </>
                    ),
                }}
            />
        </TopTab.Navigator>
    );
};

export default TopTabNavigatior;
