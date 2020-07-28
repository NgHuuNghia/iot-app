import React, {useState, useEffect, useRef} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import net from 'react-native-tcp';
import DropdownAlert from 'react-native-dropdownalert';
import {PORT, HOST} from '@env';

function Socket() {
  const dropdownAlertRef = useRef();
  const [chat, setChat] = useState('');
  const [chats, setChats] = useState([]);
  const [clients, setClients] = useState(null);

  useEffect(() => {
    const Clients = net.connect({port: PORT, host: HOST}, () => {
      // console.log('connected to server!');
      dropdownAlertRef.current.alertWithType('success', 'Connected to server!');
      // Clients.write('world!\r\n');
    });
    Clients.on('data', (data) => {
      // console.log('GET DATA: ', data.toString());
      const newData = chats;
      newData.push(data.toString());
      setChats(newData);
    });
    Clients.on('error', (error) => {
      // console.log('error', error);
      dropdownAlertRef.current.alertWithType('error', 'Error:', error.message);
      Clients.end();
    });
    Clients.on('end', () => {
      dropdownAlertRef.current.alertWithType(
        'warn',
        'Warning: ',
        'disconnected from server',
      );
      Clients.end();
      // console.log('disconnected from server');
    });
    setClients(Clients);
  }, []);

  const submitChatMessage = async () => {
    await clients.write(chat);
    setChat('');
  };

  return (
    <View style={styles.container}>
      {chats &&
        chats.map((chatMessage, index) => (
          <Text key={index} style={{borderWidth: 2, top: 500}}>
            {chatMessage}
          </Text>
        ))}
      <TextInput
        style={{height: 40, borderWidth: 2, top: 600}}
        autoCorrect={false}
        value={chat}
        onSubmitEditing={() => submitChatMessage()}
        onChangeText={(chat) => {
          setChat(chat);
        }}
      />
      <DropdownAlert ref={dropdownAlertRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default Socket;
