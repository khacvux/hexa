import { View, Text, SafeAreaView, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const DetailFeedsScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaProvider>
            <View style={tw`bg-white h-full`}>
            <TouchableOpacity
                style={tw`absolute top-5 left-3 z-50`}
                onPress={() => navigation.goBack()}
            >
                <Ionicons 
                    name='chevron-back' 
                    size={25}
                    style={tw`text-white`}    
                />
            </TouchableOpacity>
            <ScrollView 
                contentContainerStyle={tw`flex items-center`}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                // bounces={false} 
            >
                <StatusBar hidden={true} />
                <View style={tw`h-150 w-full bg-gray-200`}>
                    <Image 
                        source={{uri: 'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/272240035_4765652023512709_1336414235647239198_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=feOqJD9iQXsAX-adX23&_nc_ht=scontent.fhan3-3.fna&oh=00_AT-IQ0ck6ykJTqiYjLocKsIwJhc04vx28FX0gcnHW8NqPQ&oe=6207BC7F'}} 
                        style={tw`w-full h-full`}    
                    />
                    
                </View>
                <View style={tw`w-full px-5`}> 
                    <View style={tw`flex flex-row items-center`}>
                        <View style={tw`flex flex-row items-center justify-between w-full`}>
                            <View>
                                <Image
                                    style={tw`w-12 h-12 rounded-full absolute -top-3 bg-gray-300`}
                                    source={{uri: 'https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/272193349_4765652010179377_189781419500184775_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=uz6eaHVt4ywAX9KPkeP&_nc_ht=scontent.fhan4-2.fna&oh=00_AT9A8ok2owhqJqPUFRxYomR68Ha-SKbo_K65QRlbLjFalw&oe=6208DF38'}}
                                />
                                <View style={tw`ml-14 flex`}>
                                    <Text style={tw`font-bold text-lg`}>user name</Text>  
                                    <Text style={[{fontSize: 11 }, tw`font-light`]}>3 munites ago</Text>
                                </View>
                            </View>
                            <View style={tw`flex flex-row items-center justify-center bg-gray-200 px-5 rounded-xl`}>
                                <TouchableOpacity
                                    activeOpacity={.7}
                                    style={tw` items-center flex flex-row`}
                                >
                                    <Text>123</Text>
                                    <Ionicons name="heart"
                                        style={ tw`text-[#ED4366] ml-1 mr-3`}
                                        size={24}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={.7}
                                    style={tw``}
                                >
                                    <FontAwesome name="send"
                                        style={tw`text-[#5EC2EA]`}
                                        size={18}
                                    />
                                </TouchableOpacity>

                            </View>
                        </View>

                    </View>
                    <View>
                        <Text style={tw` my-3  pl-3`}>
                            Thằng em mình học bách khoa cơ khí, sinh năm 96. Tự mày mò học code rồi đi làm remote cho công ty Mỹ 2 năm nay. Mỗi tối online 3-4 giờ là xong việc. Lương tháng 3k6. Nhưng thu nhập chính vẫn là từ nhận các project bên ngoài làm thêm. Tuần làm 2,3 cái nhẹ nhàng 9,10k tiền tươi thóc thật không phải đóng thuế. Làm gần được 3 năm mà nhà xe nó đã mua đủ cả. Nghĩ mà thèm.
                        </Text>
                        
                        <View style={tw`w-full flex justify-center items-center`}>
                            <View style={tw`bg-gray-200 rounded-full w-2/5 h-[1] items-center my-5`} />
                        </View>
                        
                    </View>
                </View>
            </ScrollView>

            </View>
        </SafeAreaProvider>
    )
}

export default DetailFeedsScreen