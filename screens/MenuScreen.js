import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import { fetchContactData } from '../redux/actions/contactAPI'




const MenuScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.contactReducer.user)
    
    useEffect(() => {
        dispatch(fetchContactData())
    }, [])

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
           {users.map(user => (
                <View style={tw`flex flex-col`} key={user.id}>      
                    <Text style={tw` w-full`}>
                        {user.name}
                        <View>
                            <Text >{user.phone}</Text>
                        </View>
                    </Text>
                </View>
            ))}


        </SafeAreaView>
    )
}

export default MenuScreen
