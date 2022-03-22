import { AntDesign } from '@expo/vector-icons'
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import { signOut } from '../redux/actions/authAction'





const MenuScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const token = useSelector(state => state.authReducer.token)
    
 

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <ScrollView contentContainerStyle ={tw`px-3 flex flex-col items-center`}>
                <TouchableOpacity 
                    style={tw`w-full py-3 px-2 my-3 flex flex-row justify-between`}
                    onPress={() => navigation.navigate('FollowRequestsStack')}
                >
                    <Text style={tw`text-base`}>
                        Follow Requests
                    </Text>
                    <AntDesign name='right' />
                </TouchableOpacity>



                <View style={tw`py-3 border-t w-full border-gray-200`}>
                    <TouchableOpacity 
                        style={tw`bg-gray-100 w-full py-3 items-center rounded-lg`}
                        onPress={() => {
                            dispatch(signOut())
                        }}    
                    >
                        <Text style={tw`text-[#dc143c] font-bold`}>Sign out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MenuScreen
