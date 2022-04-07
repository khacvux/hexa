import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons'; 
import tw from 'twrnc'
import MenuScreen from '../screens/MenuScreen';

import SvgHome from '../assets/icons/home.svg'
import SvgHomeOutline from '../assets/icons/home-outline.svg'
import MyProfileScreen from '../screens/MyProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import HomeScreen from '../screens/HomeScreen';
import { View, StyleSheet } from 'react-native';
import SearchScreen from '../screens/SearchScreen';
import MusicScreen from '../screens/MusicScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Player from '../components/Player/Player';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {

    return (
        <SafeAreaView style={tw`h-full w-full bg-white relative`} edges={['top']}>
            <Player/>
            <Tab.Navigator>
                <Tab.Screen name="HomeTab" component={HomeScreen} 
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: (({focused}) => 
                            <View style={tw`px-5`}>
                                {focused ? (
                                    <SvgHome width={22} fill={"#5EC2EA"} />
                                ) : (
                                    <SvgHomeOutline width={22} />
                                )}
                            </View>
                        ),
                        tabBarStyle: [tw`bg-[#F5F7FA]`],
                    }}
                />
                <Tab.Screen name="SearchTab" component={SearchScreen}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: (({focused}) => 
                            <View style={tw`py-3 px-5`}>
                                <Ionicons
                                    name={focused ? 'search' : 'search-outline'}
                                    style={focused ? (tw`text-xl text-[#5EC2EA]`) : (tw`text-xl`)}
                                />
                            </View>
                        ),
                        tabBarStyle: [tw`bg-[#F5F7FA]`],
                    }}
                />
                <Tab.Screen name="MusicTab" component={MusicScreen}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: (({focused}) => 
                            <View style={tw`px-5 py-3`}>
                                <MaterialIcons
                                    name='multitrack-audio'
                                    style={focused ? (tw`text-xl text-[#5EC2EA]`) : (tw`text-xl`)}
                                />
                            </View>
                        ),
                        tabBarStyle: [tw`bg-[#F5F7FA]`],
                    }}
                />
                <Tab.Screen name="NotificationTab" component={NotificationScreen}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: (({focused}) => {
                            return(
                                <View style={tw`px-5 py-3`}>
                                    <Ionicons 
                                        name={focused ? 'ios-notifications-sharp' : 'ios-notifications-outline'} 
                                        style={focused ? tw`text-xl text-[#5EC2EA]` : tw`text-xl text-black` }
                                    />

                                </View>
                            )
                        }),
                        tabBarStyle: [tw`bg-[#F5F7FA]`],
                    }}
                />
                <Tab.Screen name="ProfileTab" component={MyProfileScreen}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: (({focused}) => 
                            <View style={tw`py-3 px-5`}>
                                <Feather
                                    name={'user'} 
                                    style={focused ? (tw`text-xl text-[#5EC2EA]`) : (tw`text-xl`)}
                                />
                            </View>
                        ),
                        tabBarStyle: [tw`bg-[#F5F7FA]`],
                    }}
                />
                <Tab.Screen name="MenuTab" component={MenuScreen}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: (({focused}) => 
                            <View style={tw`py-3 px-5`}>
                                <Feather
                                    name='menu'
                                    style={focused ? (tw`text-[#5EC2EA]`) : (tw``)}
                                    size={23}
                                />
                            </View>
                        ),
                        tabBarStyle: [tw`bg-[#F5F7FA]`],
                    }}
                />
                
                
            </Tab.Navigator>
        </SafeAreaView>
    )
}

export default BottomNavigator


const styles = StyleSheet.create({
    bottomtabsHeight: {
        height: 50,
        width: '100%'
    }
})