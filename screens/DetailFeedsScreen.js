import { View, Text, SafeAreaView, Image, StatusBar, ScrollView, TouchableOpacity, Animated, FlatList, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useRef, useState } from 'react'
import tw from 'twrnc'
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import ImageItem from '../components/Home/ImageItem'
import Paginator from '../components/Home/Paginator'
import { LinearGradient } from 'expo-linear-gradient'
import WriteComment from '../components/Comments/WriteComment'
import { BlurView } from 'expo-blur'
import Comments from '../components/Comments/Comments'

const DetailFeedsScreen = ({route}) => {

    const navigation = useNavigation();
    const { post } = route.params
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;


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
                    <View style={tw`h-140 w-full bg-gray-200`}>
                        <FlatList
                            data={post.images}
                            renderItem={ ({item}) => {
                                return <ImageItem image={item} />
                            }}
                            keyExtractor={item => item}
                            pagingEnabled
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            bounces={false} 
                            onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}],{
                                useNativeDriver: false,
                            })}
                            scrollEventThrottle={32}
                            onViewableItemsChanged={viewableItemsChanged}
                            viewabilityConfig={viewConfig}
                            ref={slidesRef}
                        />
                        <LinearGradient
                            colors={['rgba(0, 0, 0, 0.0003)', 'rgba(0, 0, 0, 0.2)']}
                            style={tw`w-full h-15 py-3 absolute bottom-0 right-0 left-0 flex flex-col justify-end z-0`}
                        >   
                            {(post.images.length > 1) ? (
                                <Paginator data={post.images} scrollX={scrollX} />
                            ) : (
                                <></>
                            )}
                        
                        </LinearGradient>
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
                                        <Text style={tw`font-bold text-lg`}>{post.name}</Text>  
                                        <Text style={[{fontSize: 11 }, tw`font-light`]}>3 munites ago</Text>
                                    </View>
                                </View>
                                <View style={tw`flex flex-row items-center justify-center bg-gray-200 px-5 py-[1] rounded-xl`}>
                                    <TouchableOpacity
                                        activeOpacity={.7}
                                        style={tw` items-center flex flex-row`}
                                    >
                                        <Text>{post.heart}</Text>
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
                                            style={tw`text-[#FEFEFD]`}
                                            size={18}
                                        />
                                    </TouchableOpacity>

                                </View>
                            </View>

                        </View>
                        <View>
                            <Text style={tw` my-3  pl-3`}>
                                {post.body}
                            </Text>
                            
                            <View style={tw`w-full flex justify-center items-center`}>
                                <View style={tw`bg-gray-200 rounded-full w-2/5 h-[1] items-center my-5`} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={2}
                >
                    <WriteComment />
                </KeyboardAvoidingView>
            </View>
        </SafeAreaProvider>
    )
}

export default DetailFeedsScreen