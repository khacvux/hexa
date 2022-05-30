import { FlatList, View } from 'react-native'
import { useSelector } from 'react-redux'
import tw from 'twrnc'
import SongComments from './SongComments'





const ListCommentSongPost = ({refRBSheet}) => {
    // const { listComments } = useSelector(state => state.songReducer)

    return (
        <View>

        </View>
        // <FlatList 
        //     contentContainerStyle={tw`h-full flex flex-col pt-3 px-4 w-full`}
        //     data={listComments}
        //     renderItem={({item}) => {
        //         return <SongComments
        //             item={item}
        //             refRBSheet={refRBSheet}
        //         />
        //     }}
        //     // keyExtractor={comment => comment.postsCommentId}
        // />
    )
}

export default ListCommentSongPost