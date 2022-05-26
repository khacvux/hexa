import { AntDesign, FontAwesome5, Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Modal, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import Slider from '@react-native-community/slider'


const DetailPlayerModal = ({ showDetailPlayer, setShowDetailPlayer }) => {
  return (
    <Modal
      visible={showDetailPlayer}
      animationType='slide'
    >
      <StatusBar hidden={true} />
      <ImageBackground
        source={require('../../assets/images/song_image.jpeg')}
        style={tw`w-full h-full`}
        resizeMode='cover'
      >
        <BlurView
          intensity={40}
          style={tw`w-full h-full`}
          tint='dark'
        >
          <SafeAreaView style={tw`h-full`}>
            <View style={tw`px-5 flex flex-col h-full justify-between`} >
              <View style={tw`flex flex-row items-center my-5`}>
                <TouchableOpacity
                  style={tw`bg-gray-100 p-2 rounded-full mr-3`}
                  onPress={() => setShowDetailPlayer(!showDetailPlayer)}
                >
                  <AntDesign
                    name='down'
                    size={20}
                  />
                </TouchableOpacity>
                <View style={tw`flex-1`}>
                  <Text style={tw`text-2xl font-semibold text-white tracking-[.25]`}>Name Song</Text>
                  <Text style={tw`text-white text-base`}>@auther</Text>
                </View>

              </View>
              <View style={tw`flex-1 justify-end`}>
                  <View style={tw`flex flex-row items-center my-3 justify-around`}>
                    <TouchableOpacity
                      style={tw`p-3 bg-gray-700 rounded-full `}
                      activeOpacity={.5}
                    >
                      <AntDesign name='stepbackward'
                        size={22}
                        style={tw`text-white`}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={tw`p-6 bg-gray-700 rounded-full`}
                      activeOpacity={.5}
                    >
                      <FontAwesome5 name='pause'
                        size={28}
                        style={tw`text-white`}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={tw`p-3 bg-gray-700 rounded-full`}
                      activeOpacity={.5}
                    >
                      <AntDesign name='stepforward'
                        size={24}
                        style={tw`text-white`}
                      />
                    </TouchableOpacity>
                </View>


                {/* SLIDER */}
                <View style={tw`my-15`}>
                  <Slider
                    style={tw``}
                    value={0}
                    minimumValue={0}
                    maximumValue={100}
                    thumbTintColor='#5EC2EA'
                    minimumTrackTintColor='#5EC2EA'
                    maximumTrackTintColor='#F5F7FA'
                  />
                  <View style={tw`flex flex-row items-center justify-between`}>
                    <Text style={tw`font-bold text-white`}>00:00</Text>
                    <Text style={tw`font-bold text-white`}>03:00</Text>
                  </View>
                </View>


              </View>
              <View style={tw`flex flex-row items-center py-5`}>
                <TouchableOpacity
                  style={tw`flex flex-row flex-1 items-center justify-center`}>
                  <Ionicons name='heart-outline' size={33} style={tw`mx-1 text-white`} />
                  <Text style={tw`font-bold text-white`}>2342</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={tw`flex flex-row flex-1 items-center justify-center`}
                >
                  <Ionicons name='chatbubble-ellipses-outline' size={30} style={tw`mx-1 text-white`} />
                  <Text style={tw`font-bold text-white`}>2342</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={tw`flex-1 items-center`}
                >
                  <Ionicons name='md-share-social-outline' size={30} style={tw`mx-1 text-white`} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={tw`flex-1 items-center`}
                >
                  <SimpleLineIcons name='loop' size={30} style={tw`mx-1 text-white`} />
                </TouchableOpacity>
              </View>
            </View>

          </SafeAreaView>
        </BlurView>
      </ImageBackground>
    </Modal>
  )
}

export default DetailPlayerModal