import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import SocketIO from './Socket/socket';

function App() {
  return (
    <NavigationContainer>
      {/* /*<SocketIO /> */}
      <AppNavigator />
    </NavigationContainer>
  );
}
export default App;
