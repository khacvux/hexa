import { View, TouchableOpacity } from 'react-native'
import { memo } from 'react'
import tw from 'twrnc'
import { Entypo, Ionicons, SimpleLineIcons } from '@expo/vector-icons'



const ButtonPlayer = () => {
    console.log('button player rerender')
    return (
        <View style={tw`flex flex-row items-center py-5`}>
            <TouchableOpacity
                style={tw`flex flex-row flex-1 items-center justify-center`}>
                <Ionicons name='heart-outline' size={25} style={tw`mx-1 text-white`} />
                {/* <Text style={tw`font-bold text-white`}>2342</Text> */}
            </TouchableOpacity>
            <TouchableOpacity
                style={tw`flex flex-row flex-1 items-center justify-center`}
            >
                <Ionicons name='chatbubble-ellipses-outline' size={26} style={tw`mx-1 text-white`} />
                {/* <Text style={tw`font-bold text-white`}>2342</Text> */}
            </TouchableOpacity>
            <TouchableOpacity
                style={tw`flex-1 items-center`}
            >
                <Ionicons name='md-share-social-outline' size={25} style={tw`mx-1 text-white`} />
            </TouchableOpacity>
            <TouchableOpacity
                style={tw`flex-1 items-center`}
            >
                <SimpleLineIcons name='loop' size={25} style={tw`mx-1 text-white`} />
            </TouchableOpacity>
            <TouchableOpacity
                style={tw`flex-1 items-center`}
            >
                <Entypo name='dots-three-horizontal' size={22} style={tw`mx-1 text-white`} />
            </TouchableOpacity>
        </View>
    )
}

export default memo(ButtonPlayer)