import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import tw from 'twrnc'


const EmptyList = ({title, dark}) => {
  return (
    <View style={tw`w-full h-full justify-around items-center`}>
     <View style={tw`flex-4 justify-end mb-5 items-center`}>
        <View style={[tw`rounded-full border border-black items-center justify-center h-23 w-23`, dark ? tw`border-white` : tw``]}>
            {/* <EvilIcons 
                name='close'
                size={40}
            /> */}
            <Ionicons 
              name='information-outline'
              size={40}
              style={dark ? tw`text-white` : tw``}
            />
        </View>
        
      </View>
      <View style={tw`flex-5`}>
        <Text style={[tw`text-lg tracking-[.2] my-3 font-light`, dark ? tw`text-white` : tw``]}>
          {title}
        </Text>
      </View>
    </View>
  )
}

export default EmptyList