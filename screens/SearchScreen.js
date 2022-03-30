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
import OnSearchingSkeletion from '../components/Skeleton/OnSearchingSkeletion';



const SearchScreen = () => {

  const { listResult, listHistorySearch } = useSelector(state => state.searchReducer)
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
            <TouchableOpacity style={tw`p-1`} 
              onPress={() => setInput('')}
            >
                <Text style={tw`text-sm font-light`}>Cancel</Text>

            </TouchableOpacity>
        </View>
        <View style={tw`h-full w-full px-2`}>
            {
              findUserLoading ? (
                <OnSearchingSkeletion />
              ) :
                (
                  listResult.length ? (
                    <>
                    <Text style={tw`text-base font-light tracking-[.2] mt-3 mb-2`}>Results</Text>
                    <FlatList 
                      data={listResult}
                      renderItem={(item) => (
                        <SearchItem item={item} times={false}/>
                      )}
                      keyExtractor={(item, index) => index.toString()}
                      />
                    </>
                ) : (
                // <FindingAnimation title={'Look for your friend'} />
                  input ? (
                    <View style={tw`px-3 py-5 border-b border-gray-200 `}>
                      <Text style={tw`font-light tracking-[.2]`}>
                        No result were found for '{input}'
                      </Text>
                    </View>
                  ) : (
                    listHistorySearch.length ? (
                      <View>
                        <Text style={tw`text-base font-light tracking-[.2] mt-3 mb-2`}>History</Text>
                        <FlatList 
                          data={listHistorySearch}
                          renderItem={(item) => (
                            <SearchItem item={item} times={true} />
                          )}
                          keyExtractor={(item,  index) => index.toString()}
                        />
                      </View>
                    ) : (
                      <FindingAnimation />
                    )
                  )
                )
              )
            }
        </View>

      </View>
    </SafeAreaView>
  )
} 

export default SearchScreen

//#F5F7FA