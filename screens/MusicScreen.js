import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector, useDispatch } from 'react-redux'
import { fetchContactData } from '../redux/actions/contactAPI'

import tw from 'twrnc'


const MusicScreen = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.contactReducer.user)

    useEffect(() => {
        dispatch(fetchContactData())
    }, [])


    return (
        <SafeAreaView style={tw`bg-white`}>
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

export default MusicScreen