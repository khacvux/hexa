import { View, Text, Image } from 'react-native'
import tw from 'twrnc'
import Skeleton from './Skeleton'



const InformationUserSkeletion = () => {
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
        </View>
  )
}

export default InformationUserSkeletion