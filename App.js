import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import ContextProvider from './tools/context'

function App() {
  return (
    <ContextProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
    </ContextProvider>
  );
}
export default App;
