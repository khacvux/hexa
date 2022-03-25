import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { Foundation, Ionicons, MaterialIcons } from '@expo/vector-icons';
import SelectPicture from '../components/Upload/SelectPicture';
import SelectAudio from '../components/Upload/SelectAudio';
import ListPost from '../components/Profile/ListPosts';
import ListTrack from '../components/Profile/ListTrack';



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
                component={SelectPicture} 
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
                component={SelectAudio} 
                
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

export const TabListNavigator = ({postsList}) => {
    console.log(postsList, ' in tab')
    return (
        <TopBar.Navigator
            screenOptions={{
                tabBarStyle: tw`h-11`,
                tabBarIndicatorStyle: tw`bg-[#5EC2EA] rounded-full`,
                tabBarIndicatorContainerStyle: tw``,
                tabBarShowLabel: false,
                tabBarShowIcon: true,
            }}
        >
            <TopBar.Screen 
                name='ListPostTab' 
                component={ListPost} 
                initialParams={{postsList: postsList}} 
                options={{ 
                    tabBarIcon: (({focused}) => 
                        <>
                            {focused ? (
                                <Ionicons name='ios-grid' 
                                    style={tw`text-[#5EC2EA]`}
                                    size={23}
                                />
                            ) : (
                                <Ionicons name='ios-grid-outline' 
                                    style={tw`text-gray-500`}
                                    size={23}
                                />
                            )}
                        </>
                    ),
                }}
            />
            <TopBar.Screen 
                name='ListTrackTab' 
                component={ListTrack}
                options={{ 
                    tabBarIcon: (({focused}) => 
                        <Foundation name='sound' size={23} style={focused ? tw`text-[#5EC2EA]` : tw`text-gray-500`} />
                    ),
                }}
            />
        </TopBar.Navigator>
    )
}
