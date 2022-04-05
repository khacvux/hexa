import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addHistorySearch, deleteHistorySearch } from '../../redux/actions/searchsAction'


const SearchItem = ({ item, times }) => {
    
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const { userId } = useSelector(state => state.authReducer)

    const handleSelect = () => {
        navigation.navigate('ProfileStack', {
            myUserId: userId,
            userId: item.item.userId  
        })
        
        dispatch(addHistorySearch({
            avatar: item.item.avatar, 
            name: item.item.name, 
            email: item.item.email, 
            userId: item.item.userId
        }))
    }

    const handleDelete = () => {
        dispatch(deleteHistorySearch({
            userId: item.item.userId,
        }))
    }


    return (
        <View style={tw`flex flex-row items-center justify-between py-2`}>   
            <TouchableOpacity 
                style={tw`flex flex-row items-center flex-1`}
                onPress={handleSelect}
            >
                <Image 
                    source={require('../../assets/images/defaultAvatar.png')}
                    style={tw`w-14 h-14 rounded-full border border-blue-300 mr-2`}
                />
                <View>
                    <Text style={tw`text-base font-semibold`}>{item.item.name}</Text>
                    <Text style={tw`text-xs font-light`}>@{item.item.email}</Text>
                </View>
            </TouchableOpacity>
            {
                times ? (
                    <TouchableOpacity
                        onPress={handleDelete}
                    >
                        <AntDesign name='close' size={16} style={tw`p-2`} />
                    </TouchableOpacity> 
                ) : <></>
            }
        </View>

    )
} 
export default SearchItem