import React from 'react'
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native'
import Header from '../../components/header'
import net from 'react-native-tcp';
import SocketIO from '../../Socket/socket'

export default function Node5({navigation}) {
  const Clients = net.connect({port: 3333, host: '192.168.1.17'}, () => {
    console.log('connected to server!');
    Clients.write(JSON.stringify({id_device: 'node5', req_device: '109'}));
  });
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
        Clients.write(JSON.stringify({id_device: 'node5', req_device: '109'}));
    });

    return unsubscribe;
  }, [navigation]);
	return (
	<SafeAreaView style={styles.container}>
        <Header header='Node5' />
        <View >
          <StatusBar backgroundColor="#82FA58" barStyle = "dark-content" hidden = {false} translucent = {true} />
          <SocketIO node = "node5" Clients= {Clients}/>
        </View>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
  container: {
    height:"98%",
    fontSize: 13,
  },
  op1: {
    alignItems: 'flex-start',
    width: 370,
    flexDirection: 'row',
  },
})
