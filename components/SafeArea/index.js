import { Platform, StyleSheet, StatusBar } from 'react-native'


export default StyleSheet.create({
    AndroidSafeArea: {
      paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0
    }
  });




