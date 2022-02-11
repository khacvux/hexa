import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import CreateNewFeeds from '../components/Upload/CreateNewFeeds';
import CreateNewTrack from '../components/Upload/CreateNewTrack';

const TopBar = createMaterialTopTabNavigator();

export const UpLoadNavigatior = () => {

    const insets = useSafeAreaInsets();

    return (
        <TopBar.Navigator
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
            <TopBar.Screen 
                name='CreateNewFeedTopBar' 
                component={CreateNewFeeds} 
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
            <TopBar.Screen 
                name='CreateNewTrackTopBar' 
                component={CreateNewTrack} 
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
        </TopBar.Navigator>
    );
};

// export default TopTabNavigatior;
