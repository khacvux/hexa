import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import { signOut } from '../redux/actions/authAction'





const MenuScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const token = useSelector(state => state.authReducer.token)
    
 

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            {
                token ? (
                    <ScrollView contentContainerStyle ={tw`px-3 flex flex-col items-center`}>
                        <TouchableOpacity 
                            style={tw`bg-gray-100 w-full py-3 items-center rounded-lg`}
                            onPress={() => {
                                dispatch(signOut())
                            }}    
                        >
                            <Text style={tw`text-[#dc143c] font-bold`}>Sign out</Text>
                        </TouchableOpacity>
                    </ScrollView>
                ) : (
                    <View style={tw`w-full h-full flex flex-col items-center justify-between px-5`}>
                        <View style={tw`flex-2 w-full justify-end`}>
                            <Image
                                source={require('../assets/images/Chatting-cuate.png')}
                                style={tw`w-full h-85 `}
                                resizeMode={'contain'}
                            />

                        </View>
                        <View style={tw`flex-1 justify-center`} >
                            <TouchableOpacity 
                                style={tw`bg-[#5EC2EA] px-35 py-[9] rounded-lg`}
                                onPress={() => {
                                    navigation.navigate('LoginStack')
                                }}
                            >
                                <Text style={tw`text-xl font-bold text-white`}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
           

        </SafeAreaView>
    )
}

export default MenuScreen
