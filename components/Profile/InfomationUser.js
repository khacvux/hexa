import { View, Text, Image } from 'react-native'
import tw from 'twrnc'


const InfomationUser = ({isFirstName, 
            isLastName, 
            avatar, 
            isAvatar, 
            email, 
            numberOfPosts, 
            numberOfFollowing, 
            numberOfFollower, 
            bio, 
            name
        }) => {

    return (
        <View style={tw`pt-2 px-5`}>
           <View style={tw`flex flex-row items-center justify-between`}>
                <Image 
                    source={
                        isAvatar ? {uri: isAvatar.uri} : (
                            avatar ? {uri: avatar} : (
                                require('../../assets/images/defaultAvatar.png'
                                )
                            )
                        )
                    }
                    style={[{width: 75, height: 75},tw`rounded-full mr-4 border-2 border-gray-200`]}
                />
                <View style={tw`flex-1 flex flex-row items-center`}>
                    <View style={tw`flex-1 flex items-center`}>
                        <Text style={tw`font-bold text-gray-400 `}>Post</Text>   
                        <Text style={tw`font-bold text-xl`}>{numberOfPosts}</Text>                     
                    </View>
                    <View style={tw`flex-1 flex items-center`}>
                        <Text style={tw`font-bold text-gray-400 `}>Following</Text>   
                        <Text style={tw`font-bold text-xl`}>{numberOfFollowing}</Text>                     
                    </View>
                    <View style={tw`flex-1 flex items-center`}>
                        <Text style={tw`font-bold text-gray-400 `}>Followers</Text>   
                        <Text style={tw`font-bold text-xl`}>{numberOfFollower}</Text>                     
                    </View>
                </View>
           </View>
           <View style={tw`mt-1`}>
               <Text style={tw`text-gray-500 text-xs`}>
                    {email}
               </Text>
               <Text style={tw`text-2xl font-semibold`}>
                   {
                       isFirstName ? (
                        `${isFirstName} ${isLastName}`
                       ) : (
                           `${name}`
                       )
                   }
               </Text>
               {
                   bio ? (
                    <Text style={tw`mt-5`}>
                        {bio}
                    </Text>
                   ) : (
                       <></>
                   )
               }
           </View>
        </View>
    )
}

export default InfomationUser
