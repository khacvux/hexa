import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigator from './navigators/StackNavigator';
import { Provider } from 'react-redux';
import Store from './redux/store'




export default function App() {
  return (
    <Provider store={Store}>
      <SafeAreaProvider >
        <NavigationContainer >
          <StackNavigator/>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
