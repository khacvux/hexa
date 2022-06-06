import { View, Text } from 'react-native'
import { useEffect } from 'react'
import tw from 'twrnc'
import { FlatGrid } from 'react-native-super-grid';
import ListCategoryItem from './ListCategoryItem';
import { useDispatch, useSelector } from 'react-redux';





const ListCategoryMusic = () => {

    const dispatch = useDispatch()
    const { listCategorySong } = useSelector(state => state.songReducer)

   

    return (
        <View style={tw`w-full py-2 mb-3 shadow-[#5EC2EA]`}>
            <View style={tw`flex flex-row items-center mb-3`}>
                <View style={tw`h-9`}>
                    <Text style={tw`text-2xl px-2 font-light tracking-[.25] ml-2`}>Maybe you like this</Text>
                </View>
                <View style={tw`h-9 justify-center`}>
                    <View style={tw`bg-[#5EC2EA] px-.8 py-[2] rounded-xl`}>
                        <Text style={tw`px-1.3 text-white`}>{listCategorySong ? listCategorySong.length : 0}</Text>
                    </View>
                </View>
            </View>
            <View style={tw`px-1`}>
                {
                    !listCategorySong ? <></> : (
                        <FlatGrid
                        data={listCategorySong}
                        itemDimension={150}
                        renderItem={(item) =>
                            <ListCategoryItem
                                item={item}
                                dispatch={dispatch}
                            />
                        }
                        // keyExtractor={(item, index) => index}
                        style={tw`pt-2`}
                        spacing={15}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                    />
                    )
                }
              
            </View>


        </View>
    )
}

export default ListCategoryMusic