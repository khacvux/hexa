import { View, TouchableOpacity } from 'react-native'
import { memo, useRef, useState } from 'react'
import tw from 'twrnc'
import { Entypo, Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { isLoopSong } from '../../redux/actions/songsAction'
import RBSheet from 'react-native-raw-bottom-sheet'
import ListCommentSongPost from '../SongComments/ListCommentSongPost'
import WriteCommentSongs from '../SongComments/WriteCommentSongs'



const ButtonPlayer = ({ songId }) => {
    console.log('button player rerender')

    const refRBSheet = useRef();
    const { loopSong } = useSelector(state => state.songReducer)
    const dispatch = useDispatch()

    const [isHeart, setHeart] = useState(false)

    const setLoopSong = () => {
        dispatch(isLoopSong(true))
    }
    const unsetLoopSong = () => {
        dispatch(isLoopSong(false))
    }

    return (
        <View style={tw`flex flex-row items-center py-5 h-18`}>
            {/* REACT SONG */}
            {
                !isHeart ? (
                    <TouchableOpacity
                        style={tw`flex flex-row flex-1 items-center justify-center`}
                        onPress={() => setHeart(true)}
                        >
                        <Ionicons name='heart-outline' size={25} style={tw`mx-1 text-white`} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={tw`flex flex-row flex-1 items-center justify-center`}
                        onPress={() => setHeart(false)}
                        >
                        <Ionicons name='heart' size={25} style={tw`mx-1 text-[#ED4366]`} />
                    </TouchableOpacity>
                )
            }
            {/* COMMENT SONG */}
            <TouchableOpacity
                style={tw`flex flex-row flex-1 items-center justify-center`}
                activeOpacity={.9}
                onPress={() => refRBSheet.current.open()}
            >
                <Ionicons name='chatbubble-ellipses-outline' size={26} style={tw`mx-1 text-white`} />
                {/* <Text style={tw`font-bold text-white`}>2342</Text> */}
            </TouchableOpacity>
            {/* SHARE  */}
            <TouchableOpacity
                style={tw`flex-1 items-center`}
            >
                <Ionicons name='md-share-social-outline' size={25} style={tw`mx-1 text-white`} />
            </TouchableOpacity>

            {/* SET LOOP SONG  */}
            {
                !loopSong ? (
                    <TouchableOpacity
                        style={tw`flex-1 items-center`}
                        activeOpacity={.9}
                        onPress={setLoopSong}
                    >
                        <SimpleLineIcons name='loop' size={25} style={tw`mx-1 text-white`} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={tw`flex-1 items-center`}
                        activeOpacity={.9}
                        onPress={unsetLoopSong}
                    >
                        <View style={tw`p-2 border border-white rounded-full bg-white`}>
                            <SimpleLineIcons name='loop' size={17} style={tw`mx-1 text-black`} />
                        </View>
                    </TouchableOpacity>
                )
            }
            <TouchableOpacity
                style={tw`flex-1 items-center`}
            >
                <Entypo name='dots-three-horizontal' size={22} style={tw`mx-1 text-white`} />
            </TouchableOpacity>

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={520}
                openDuration={250}
                customStyles={{
                    wrapper: tw`bg-black bg-opacity-30`,
                    container: tw`bg-gray-100 rounded-t-lg flex flex-col`
                }}
            >
                <View
                    style={tw`flex-1 flex flex-col w-full`}
                >
                    <ListCommentSongPost refRBSheet={refRBSheet} />
                </View>
                <View style={tw`mb-2 w-full`} >
                    <WriteCommentSongs songId={songId} />
                </View>

            </RBSheet>
        </View>
    )
}

export default memo(ButtonPlayer)