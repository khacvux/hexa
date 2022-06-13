import { View, Image, Dimensions } from 'react-native'
import { memo } from 'react'
import tw from 'twrnc'


const ImagePlayer = ({ songPlaying }) => {

    const { width: SCREEN_WIDTH } = Dimensions.get('window')
    console.log('image player rerender')

    return (
        <View style={tw`flex-1 w-full items-center justify-center my-1`}>
            <Image
                source={songPlaying?.song.image ? { uri: songPlaying.song.image } : require('../../assets/images/default-song-avatar.jpeg')}
                style={[tw`rounded-xl`, { width: SCREEN_WIDTH - 150, height: SCREEN_WIDTH - 150 }]}
            />
        </View>
    )
}

export default memo(ImagePlayer)