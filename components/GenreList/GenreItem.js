import { Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc'



const GenreItem = ({genre, setGenre, setShowModal }) => {
  return (
    <TouchableOpacity
        style={tw`px-6 py-2 mx-2 mt-[2] border-b border-gray-200 bg-gray-100 mb-1 rounded `}
        activeOpacity={.6}
        onPress={() => {
          setGenre({
            idGenre: genre.item.songCategoryId,
            genre: genre.item.name,
          })
          setShowModal(false)
        }
         
        }
    >
        <Text style={tw`text-lg font-light text-gray-600 tracking-[.2]`}>
            {genre.item.name}
        </Text>
    </TouchableOpacity>
  )
}

export default GenreItem