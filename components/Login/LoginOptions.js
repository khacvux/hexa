import { View, Text, ImageBackground, TextInput, Image, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useRef } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BlurView } from 'expo-blur'
import RBSheet from 'react-native-raw-bottom-sheet'


const LoginOptions = () => {

    const navigation = useNavigation();
    const refRBSheet = useRef();


    return (
        <ImageBackground
            source={require('../../assets/images/login_background.jpeg')}
            style={tw`w-full h-full`}
        >
            <SafeAreaView style={tw`py-2 flex flex-col  h-full`}>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={tw`w-15 items-center`}
                    >
                        <BlurView
                            intensity={40}
                            style={tw`rounded-full overflow-hidden w-9 h-9 flex items-center justify-center`}
                        >
                            <Ionicons name='ios-chevron-back-outline' 
                                style={tw`text-white`}
                                size={23}
                            />    
                        </BlurView>
                    </TouchableOpacity>
                    <View style={tw`w-full px-15 py-3 mt-15 mb-17`}>
                        <Text style={tw`text-5xl font-bold text-white`}>
                            Hello!
                        </Text>
                        <Text style={tw`text-lg tracking-wide text-white`}>
                            Sign in to your account.
                        </Text>
                    </View>
                </View>
                <View style={tw`w-full px-8`}>
                
                    <BlurView
                        intensity={20}
                        style={tw`w-full rounded-xl overflow-hidden px-3 py-3`}
                    >
                        <TextInput
                            style={tw`w-full p-3 rounded-[2] bg-[#F3F0F6] items-center mb-2`}
                            placeholder='Username'
                        />
                        
                        <TextInput
                            style={tw`w-full p-3 rounded-[2] bg-[#F3F0F6] items-center mb-2`}
                            placeholder='Password'
                            secureTextEntry={true}
                        />
                        <TouchableOpacity>
                            <Text style={tw`text-xs mb-1 px-2 text-[#00A3EA]`}>Forgot your password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={tw`w-full p-[9] bg-[#5EC2EA] items-center rounded-[2] mt-2`}
                        >
                            <Text style={tw`text-white font-bold text-base`}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </BlurView>

                    <Text style={tw`text-center text-white font-bold`}>
                        or
                    </Text>
                    <BlurView
                        intensity={20}
                        style={tw`w-full rounded-xl overflow-hidden px-3 py-3 mt-1`}
                    >
                        <TouchableOpacity style={tw`flex flex-row items-center w-full px-5`}>
                            <Image 
                                style={tw`w-6 h-6`}
                                source={require('../../icons/google_icon.png')}
                            />
                            <Text style={tw`flex-1 text-center`}>Continue with Google</Text>

                        </TouchableOpacity>
                    </BlurView>
                    <TouchableOpacity style={tw`px-5`}
                        onPress={() => refRBSheet.current.open()}
                    >
                        <Text style={tw`my-3`}>
                            Don't have any account?<Text style={tw`text-[#00A3EA] font-bold`}> Sign up</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    height={500}
                    openDuration={250}
                    customStyles={{
                        wrapper: tw`bg-black bg-opacity-30`,
                        container: tw`bg-white rounded-t-lg flex flex-col px-7`
                    }}
                >
                    <Text style={tw`text-xl mb-5 text-[#00A3EA] px-1 font-bold`}>
                        Create account
                    </Text>
                    <TextInput 
                        placeholder='User name'
                        style={tw`p-3 rounded-[2] bg-[#F3F0F6] mb-3`}
                    />
                    <TextInput 
                        placeholder='Password'
                        style={tw`p-3 rounded-[2] bg-[#F3F0F6] mb-3`}
                        secureTextEntry={true}
                    />
                    <TextInput 
                        placeholder='Confirm Password'
                        style={tw`p-3 rounded-[2] bg-[#F3F0F6] mb-3`}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity 
                        style={tw`w-full p-[9] bg-[#5EC2EA] items-center rounded-[2] mt-2`}
                    >
                        <Text style={tw`text-white font-bold text-base`}>
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </RBSheet>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default LoginOptions