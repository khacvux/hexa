import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './navigators/BottomNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigator/>
    </NavigationContainer>
  );
}

