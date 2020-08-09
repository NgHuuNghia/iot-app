import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const CTX = React.createContext();

export {CTX};

export default function Store(props) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    _bootstrapAsync();
  });

  const _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    setToken(userToken);
  };

  const _authenticate = async accessToken => {
    await AsyncStorage.setItem('userToken', accessToken);
    setToken(accessToken);
  };

  const _logout = async () => {
    await AsyncStorage.removeItem('userToken');
    setToken(null);
  };


  return (
    <CTX.Provider value={{token, _authenticate, _logout}}>
      {props.children}
    </CTX.Provider>
  );
}
