import React, {useState, useEffect, useRef} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import net from 'react-native-tcp';
import DropdownAlert from 'react-native-dropdownalert';
import Loading from '../components/Loading';
import ThongTin from '../components/thongtin';
import ThongKe from '../components/thongke';
import Auto from '../components/auto';
import {PORT, HOST} from '@env';

function Socket({node, Clients}) {
  const dropdownAlertRef = useRef();
  const [chat, setChat] = useState('');
  const [clients, setClients] = useState(null);
  const [obj, setObj] = useState('');
  const [loading, setLoading] = useState(true);
  const [chats, setChats] = useState({
    node1: {
      "id_device":"node1","temp":"00.00","humi":"40.00","air":"00.75","soil":"00.00","ctrl1":"0","ctrl2":"0","ctrl3":"0","ctrl4":"0","ctrl5":"0","mode":"0","th_temp":"26.00","th_humi":"90.00","timer1":"0001","timer2":"0001","timer3":"0001"
    },
    node2: {
      "id_device":"node2","temp":"00.00","humi":"60.00","air":"40.75","soil":"00.00","ctrl1":"0","ctrl2":"0","ctrl3":"0","ctrl4":"0","ctrl5":"0","mode":"0","th_temp":"26.00","th_humi":"90.00","timer1":"0001","timer2":"0001","timer3":"0001"
    },
  });

  console.log(node);
  useEffect(() => {
    /*const Clients = net.connect({port: PORT, host: '192.168.1.17'}, () => {
      console.log('connected to server!');
      Clients.write(JSON.stringify({id_device: node, req_device: '109'}));
      //dropdownAlertRef.current.alertWithType('success', 'Connected to server!');
      // Clients.write('world!\r\n');
    });*/
    Clients.on('data', (data) => {
      // console.log('GET DATA: ', data.toString());
      const data1 = JSON.parse(data.toString());
      setChats({ ...chats, [node]: data1 })
      setObj(data1);
      setLoading(false);
    });
    Clients.on('error', (error) => {
      console.log('error', error);
      //   dropdownAlertRef.current.alertWithType('error', 'Error:', error.message);
      Clients.end();
    });
    Clients.on('end', () => {
      /*dropdownAlertRef.current.alertWithType(
        'warn',
        'Warning: ',
        'disconnected from server',
      );*/
      Clients.end();
      // console.log('disconnected from server');
    });
    setClients(Clients);
  }, []);
  console.log(node, obj.id_device);
  return loading || node != obj.id_device ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <ThongKe node={obj}  />
      <ThongTin node={obj} Clients={Clients} />
      <Auto node={obj} Clients={Clients} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    height: '98%',
  },
});

export default Socket;
