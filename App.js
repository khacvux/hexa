import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './navigators/BottomNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

