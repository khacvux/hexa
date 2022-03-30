import { View } from 'react-native'
import tw from 'twrnc'
import Skeleton from './Skeleton'



const ProfileSkeletion = () => {
  return (
    <View style={tw`pt-2 px-5`}>
           <View style={tw`flex flex-row items-center justify-between`}>
                <Skeleton w={70} h={70} bg={'#ccc'} rounded={'1000'} />
                <View style={tw`flex-1 flex flex-row items-center`}>
                    <View style={tw`flex-1 flex items-center`}>
                        <View>
                            <Skeleton w={70} h={16} bg={'#ccc'} rounded={'1'} />                 
                        </View>  
                        <View style={tw`mt-1`}>
                            <Skeleton w={50} h={16} bg={'#ccc'} rounded={'1'} />                 
                        </View>  
                    </View>
                    <View style={tw`flex-1 flex items-center`}>
                        <View>
                            <Skeleton w={70} h={16} bg={'#ccc'} rounded={'1'} />                 
                        </View>  
                        <View style={tw`mt-1`}>
                            <Skeleton w={50} h={16} bg={'#ccc'} rounded={'1'} />                 
                        </View>                 
                    </View>
                    <View style={tw`flex-1 flex items-center`}>
                        <View>
                            <Skeleton w={70} h={16} bg={'#ccc'} rounded={'1'} />                 
                        </View>  
                        <View style={tw`mt-1`}>
                            <Skeleton w={50} h={16} bg={'#ccc'} rounded={'1'} />                 
                        </View>                     
                    </View>
                </View>
           </View>
           <View style={tw`mt-4`}>
                <View >
                    <Skeleton w={75} h={14} bg={'#ccc'} rounded={'1'} />   
                </View>
                <View style={tw`mt-1 mb-3`}>
                    <Skeleton w={160} h={25} bg={'#ccc'} rounded={'1'} />   
                </View>
                <View >
                    <Skeleton w={300} h={40} bg={'#ccc'} rounded={'1'} />   
                </View>
                
            </View>
            <View style={tw`flex flex-row items-center mt-2`}>
                <View 
                    style={tw`flex-2`}   
                >
                    <Skeleton w={245} h={45} bg={'#ccc'} rounded={'1'} />
                </View>
                <View
                    style={tw`flex-1 ml-3`}
                    activeOpacity={.8}    
                >
                    <Skeleton w={125} h={45} bg={'#ccc'} rounded={'1'} />
                </View>
            </View>
            <View style={tw`mt-5 mb-1`}>
                <Skeleton w={379} h={30} bg={'#ccc'} rounded={'1'} />
            </View>
            <View style={tw`flex flex-row items-center mt-1`}>
                <Skeleton w={180} h={300} bg={'#ccc'} rounded={'2'} />
            </View>
        </View>
  )
}

export default ProfileSkeletion