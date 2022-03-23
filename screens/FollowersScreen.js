import { AntDesign } from '@expo/vector-icons'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Follower from '../components/Follows/Follower'



const FollowersScreen = ({navigation}) => {
  return (
    <SafeAreaView style={tw`bg-white`}>
        <View style={tw`w-full h-full bg-white flex flex-col items-center bg-[#F5F7FA]`}> 
            <View style={tw`justify-center items-center w-full py-3 bg-white px-3 relative`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={tw`absolute left-3 p-2 z-50`}
                >
                    <AntDesign name='left' size={18} />
                </TouchableOpacity>
                <Text style={tw`w-full text-center text-base font-semibold`}>Followers</Text>
            </View>
            <View style={tw`flex flex-col`}>
                <View>
                    <Follower />
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default FollowersScreen