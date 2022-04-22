import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import tw from 'twrnc'
import Comments from './Comments'




const ListCommentOfPost = ({refRBSheet}) => {
    const { listCommentOfPost } = useSelector(state => state.postsReducer)

    return (
        <FlatList 
            contentContainerStyle={tw`h-full flex flex-col pt-3 px-4 w-full`}
            data={listCommentOfPost}
            renderItem={({item}) => {
                return <Comments
                    item={item}
                    refRBSheet={refRBSheet}
                />
            }}
            keyExtractor={comment => comment.postsCommentId}
        />
    )
}

export default ListCommentOfPost