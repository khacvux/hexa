import { AntDesign, Entypo, FontAwesome5, Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Modal, ImageBackground, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import tw from 'twrnc'
import Slider from '@react-native-community/slider'


const DetailPlayerModal = ({ showDetailPlayer, setShowDetailPlayer, arraySongs }) => {
  return (
    <Modal
      visible={showDetailPlayer}
      animationType='slide'
    >
      <StatusBar hidden={true} />
      <ImageBackground
        source={arraySongs[0]?.image ? {uri: arraySongs[0]?.image} : require('../../assets/images/default-song-avatar.jpeg')}
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
                  style={tw`p-2 rounded-full mr-3 border border-white`}
                  onPress={() => setShowDetailPlayer(!showDetailPlayer)}
                >
                  <AntDesign
                    name='down'
                    size={20}
                    style={tw`text-white`}
                  />
                </TouchableOpacity>
                <View style={tw`flex-1`}>
                  <Text style={tw`text-2xl font-semibold text-white tracking-[.25]`}>{arraySongs[0].name}</Text>
                  <Text style={tw`text-white text-base`}>{arraySongs[0].userName}</Text>
                </View>

              </View>
              <View style={tw`flex-1 w-full items-center justify-center`}>
                <Image 
                  source={arraySongs[0]?.image ? {uri: arraySongs[0]?.image} : require('../../assets/images/default-song-avatar.jpeg')}
                  style={tw`h-70 w-70 rounded-xl`}
                />
              </View>
              <View style={tw``}>
                  <View style={tw`flex flex-row items-center my-1 justify-around`}>
                    <TouchableOpacity
                      style={tw`p-3 rounded-full `}
                      activeOpacity={.5}
                    >
                      <AntDesign name='stepbackward'
                        size={22}
                        style={tw`text-white`}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={tw`p-6 rounded-full`}
                      activeOpacity={.5}
                    >
                      <FontAwesome5 name='pause'
                        size={28}
                        style={tw`text-white`}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={tw`p-3 rounded-full`}
                      activeOpacity={.5}
                    >
                      <AntDesign name='stepforward'
                        size={24}
                        style={tw`text-white`}
                      />
                    </TouchableOpacity>
                </View>


                {/* SLIDER */}
                <View style={tw`mb-15 mt-5`}>
                  <Slider
                    style={tw``}
                    value={0}
                    minimumValue={0}
                    maximumValue={100}
                    thumbTintColor='#4b5563'
                    minimumTrackTintColor='#4b5563'
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
                  {/* <Text style={tw`font-bold text-white`}>2342</Text> */}
                </TouchableOpacity>
                <TouchableOpacity
                  style={tw`flex flex-row flex-1 items-center justify-center`}
                >
                  <Ionicons name='chatbubble-ellipses-outline' size={30} style={tw`mx-1 text-white`} />
                  {/* <Text style={tw`font-bold text-white`}>2342</Text> */}
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
                <TouchableOpacity
                  style={tw`flex-1 items-center`}
                >
                  <Entypo name='dots-three-horizontal' size={24} style={tw`mx-1 text-white`} />
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