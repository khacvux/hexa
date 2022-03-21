import { View, Text, ImageBackground, TextInput, Image, KeyboardAvoidingView, Platform } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BlurView } from 'expo-blur'
import RBSheet from 'react-native-raw-bottom-sheet'

import { useSelector, useDispatch,} from 'react-redux'
import { signIn, signUp } from '../../redux/actions/authAction'


const LoginOptions = () => {

    const navigation = useNavigation();
    const refRBSheet = useRef();

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [numberPhone, setNumberPhone] = useState('')
    const [crPassword, setCrPassword] = useState('')
    const [cfCrPass, setCfCrPass] = useState('')

    const [signInWarn, setSignInWarn] = useState('')
    const [signUpWarn, setSignUpWarn] = useState('')

    const dispatch = useDispatch()

    const handleSignIn = () => {
        if(!userName) {
            setSignInWarn(`Please enter your email!`)
        }
        else if(!password){
            setSignInWarn(`Please enter your password!`)
        }else{
            dispatch(signIn({userName, password}))
        }
    }

    const handleSignUp = () => {
        if(!firstName || !lastName) {
            setSignUpWarn(`Please enter your name!`)
        }
        else if(!email){
            setSignUpWarn(`Please enter your email!`)
        }
        else if(!numberPhone){
            setSignUpWarn(`Please enter your number phone!`)
        }
        else if(crPassword != cfCrPass){
            setSignUpWarn(`Confirm password doesn't match!`)
        }
        else{
            dispatch(signUp({firstName, lastName, email, numberPhone, crPassword}))
        }
    }
    
    return (
        <ImageBackground
            source={require('../../assets/images/login_background.jpeg')}
            style={tw`w-full h-full`}
        >
            <SafeAreaView style={tw`py-2 flex flex-col  h-full`}>
                <View>
                    <View style={tw`w-full px-10 py-3 mt-15 mb-17`}>
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
                            placeholder='Email'
                            value={userName}
                            onChangeText={val => setUsername(val)}
                        />
                        
                        <TextInput
                            style={tw`w-full p-3 rounded-[2] bg-[#F3F0F6] items-center mb-2`}
                            placeholder='Password'
                            secureTextEntry={true}
                            value={password}
                            onChangeText={val => setPassword(val)}
                        />
                        <TouchableOpacity>
                            <Text style={tw`text-xs mb-1 px-2 text-[#00A3EA]`}>Forgot your password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={tw`w-full p-[9] bg-[#5EC2EA] items-center rounded-[2] mt-2`}
                            onPress={handleSignIn}
                        >
                            <Text style={tw`text-white font-bold text-base`}>
                                Login
                            </Text>
                        </TouchableOpacity>
                        {
                            signInWarn ? (
                                <View style={tw`h-6 justify-center px-3 mb-2`}>
                                    <Text style={tw`font-light tracking-[.20] text-red-600`}>{signInWarn}</Text>
                                </View>
                            ) : <></>                        
                        }
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
                    height={420}
                    openDuration={250}
                    customStyles={{
                        wrapper: tw`bg-black bg-opacity-30`,
                        container: tw`bg-white rounded-t-lg flex flex-col px-7`
                    }}
                >
                    <Text style={tw`text-xl mb-5 text-[#00A3EA] px-1 font-bold`}>
                        Create account
                    </Text>
                    <View style={tw` flex flex-row items-center overflow-hidden`}>
                        <TextInput 
                            style={tw`flex-3 mr-1 p-3 rounded-[2] bg-[#F3F0F6] mb-3`}
                            placeholder='First name'
                            placeholderTextColor='#ccc'
                            value={firstName}
                            onChangeText={val => setFirstName(val)}

                        />
                        <TextInput 
                            style={tw`flex-2 ml-1 p-3 rounded-[2] bg-[#F3F0F6] mb-3`}
                            placeholder='Last name'
                            placeholderTextColor='#ccc'
                            value={lastName}
                            onChangeText={val => setLastName(val)}
                        />

                    </View>
                    <TextInput 
                        placeholder='Email'
                        style={tw`p-3 rounded-[2] bg-[#F3F0F6] mb-3`}
                        placeholderTextColor='#ccc'                    
                        value={email}
                        onChangeText={val => setEmail(val)}
                    />
                    <TextInput 
                        placeholder='Number phone'
                        style={tw`p-3 rounded-[2] bg-[#F3F0F6] mb-3`}
                        placeholderTextColor='#ccc'       
                        keyboardType="numeric"             
                        value={numberPhone}
                        onChangeText={val => setNumberPhone(val)}
                    />
                    <TextInput 
                        placeholder='Password'
                        style={tw`p-3 rounded-[2] bg-[#F3F0F6] mb-3`}
                        secureTextEntry={true}
                        placeholderTextColor='#ccc'
                        value={crPassword}
                        onChangeText={val => setCrPassword(val)}

                    />
                    <TextInput 
                        placeholder='Confirm Password'
                        style={tw`p-3 rounded-[2] bg-[#F3F0F6] mb-3`}
                        secureTextEntry={true}
                        placeholderTextColor='#ccc'
                        value={cfCrPass}
                        onChangeText={val => setCfCrPass(val)}
                    />
                    {
                        signUpWarn ? (
                            <View style={tw`h-6 justify-center px-3 mb-2`}>
                                <Text style={tw`font-light tracking-[.20] text-red-600`}>{signUpWarn}</Text>
                            </View>
                        ) : <></>                        
                    }
                    <TouchableOpacity 
                        style={tw`w-full p-[9] bg-[#5EC2EA] items-center rounded-[2] mt-2`}
                        onPress={handleSignUp}
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