import { View, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import { postRequestFollow } from '../../redux/actions/searchsAction'
import LottieView from 'lottie-react-native'
import { getPost, setPaginationNumber } from '../../redux/actions/postsAction'
import { useEffect } from 'react'



const Contact = ({follow, followerId}) => {

    const dispatch = useDispatch()
    const { userId, token } = useSelector(state => state.authReducer)
    const { buttonLoading } = useSelector(state => state.onLoadingReducer)


    const handlePostRequest = () => {
        dispatch(postRequestFollow({userIdRecipient: followerId, token}))
    }
    useEffect(() => {
        if(follow == 1) {
            dispatch(setPaginationNumber(0))
            dispatch(getPost({ token, paginationNumber: 0 }))
        }
    }, [follow])
   


    return (
        <View>
            <View style={tw`flex flex-row items-center mt-2 px-5`}>
                {   
                    buttonLoading ? (
                        <View style={tw`flex-2 bg-white h-10 items-center justify-center flex border  border-[#56C4F4] rounded-sm overflow-hidden`}>
                             <LottieView 
                                source={require('../../assets/lottieFiles/loading.json')}
                                style={tw`w-15 h-15`}
                                autoPlay
                                loop={true}
                            />
                        </View>
                    ) : (
                        follow ? (
                            follow == 1 ? (
                                <TouchableOpacity 
                                    style={tw`flex-2 bg-white h-10 items-center justify-center flex border  border-[#56C4F4] rounded-sm`}
                                    activeOpacity={.8}  
                                    onPress={handlePostRequest}    
                                >
                                    <Text style={tw`text-[#56C4F4] font-bold`}>Following</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity 
                                    style={tw`flex-2 bg-[#56C4F4] h-10 items-center justify-center flex  border  border-[#56C4F4] rounded-sm`}
                                    activeOpacity={.8}  
                                    onPress={handlePostRequest}  
                                >
                                    <Text style={tw`text-white font-bold`}>Follow</Text>
                                </TouchableOpacity>
                            )
    
                        ) : (
                            <TouchableOpacity 
                                style={tw`flex-2 bg-white h-10 items-center justify-center flex border  border-[#56C4F4] rounded-sm`}
                                activeOpacity={.8} 
                                onPress={handlePostRequest}     
                            >
                                <Text style={tw`text-[#56C4F4] font-bold`}>Waiting</Text>
                            </TouchableOpacity>
                        )

                    )
                }
                <TouchableOpacity 
                    style={
                        follow == 1 ? tw`flex-1 bg-[#56C4F4] h-10 items-center justify-center ml-1 flex border border-[#56C4F4] rounded-sm`
                            : tw`flex-1 bg-white h-10 items-center justify-center ml-1 flex border border-[#56C4F4] rounded-sm`
                    }
                    activeOpacity={.8}    
                >
                    <Text 
                        style={ follow == 1 ? tw`text-white font-bold` : tw`text-[#56C4F4] font-bold`}
                    >
                            Message
                    </Text>
                </TouchableOpacity>
            </View>
                  
        </View>
    )
}

export default Contact
