import { View, Text, TextInput, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { AntDesign, EvilIcons } from '@expo/vector-icons'; 
import SearchItem from '../components/Search/SearchItem';
import FindingAnimation from '../components/LottieAnimation/FindAnimation';
import LoadingAnimation from '../components/LottieAnimation/LoadingAnimation';
import { useSelector, useDispatch,} from 'react-redux'
import { findUserByName } from '../redux/actions/searchsAction';
import { TouchableOpacity } from 'react-native-gesture-handler';



const SearchScreen = () => {

  const { listResult } = useSelector(state => state.searchReducer)
  const { findUserLoading } = useSelector(state => state.onLoadingReducer)
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  // console.log(findUserLoading)
  
  useEffect(() => {
    dispatch(findUserByName(input))
  }, [input])
  
 
  return (
    <SafeAreaView style={tw`bg-white w-full h-full`}>
      <View style={tw` px-2 flex flex-col items-center`}>
        <View style={tw`bg-gray-100 rounded-md flex flex-row items-center px-2 m-1`}>
            <EvilIcons name="search" size={24} color="#5EC2EA" />
            <TextInput
              value={input}
              placeholder='Search...'
              style={tw`mx-2 flex-1 py-3`}
              onChangeText={val => setInput(val)}
            />
            <TouchableOpacity style={tw`bg-gray-300 p-1 rounded-full`} 
              onPress={() => setInput('')}
            >
                <AntDesign name='close' />

            </TouchableOpacity>
        </View>
        <View style={tw`h-full w-full px-2`}>
            {/* <Text style={tw`text-base font-light tracking-[.2] mt-3 mb-2`}>History</Text>
            <SearchItem />
          <SearchItem /> */}
            {
              findUserLoading ? (
                <LoadingAnimation />
                ) :
                (listResult ? (
                  <FlatList 
                  data={listResult}
                  renderItem={(item) => (
                    <SearchItem item={item}/>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    />
                    ) : (
                      <FindingAnimation />
                ))
            }
        </View>

      </View>
    </SafeAreaView>
  )
} 

export default SearchScreen

//#F5F7FA