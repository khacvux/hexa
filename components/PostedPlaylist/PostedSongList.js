import { useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import { getListPostedSongsOfUser } from '../../redux/actions/songsAction'
import SongSkeleton from '../Skeleton/SongSkeleton'
import EmptyList from '../Static/EmptyList'
import PostedSongItem from './PostedSongItem'



const PostedSongList = ({ userId }) => {

    const { token } = useSelector(state => state.authReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListPostedSongsOfUser({ userId, token }))
    }, [])

    const { listPostedSongsOfUser } = useSelector(state => state.songReducer)
    const { getListPostedSongLoading } = useSelector(state => state.onLoadingReducer)

    return (
        <View style={tw`w-full h-full bg-white px-4`} >
            {
                getListPostedSongLoading ? (
                    <View>
                        <SongSkeleton />
                        <SongSkeleton />
                        <SongSkeleton />
                    </View>
                ) : (
                    <FlatList
                        data={listPostedSongsOfUser}
                        renderItem={item =>
                            <PostedSongItem item={item} />
                        }
                        keyExtractor={item => item.songId}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={
                            <View style={tw`w-full h-100 items-center justify-center`}>
                                <EmptyList title={'No posts yet!!'} />
                            </View>
                        }
                    />
                )
            }

        </View>
    )
}

export default PostedSongList