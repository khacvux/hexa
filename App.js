import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigator from './navigators/StackNavigator';
import { Provider } from 'react-redux';
import Store, { persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider as PaperProvider } from 'react-native-paper';



export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={ persistor } >
        <PaperProvider>
          <SafeAreaProvider>
            <NavigationContainer >
              <StackNavigator/>
            </NavigationContainer>
          </SafeAreaProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
