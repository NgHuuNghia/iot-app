import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native'
import net from 'react-native-tcp';
import Header from '../../components/header'
import SocketIO from '../../Socket/socket'

export default function Node4({navigation}) {
  const Clients = net.connect({port: 3333, host: '192.168.1.17'}, () => {
    console.log('connected to server!');
    Clients.write(JSON.stringify({id_device: 'node4', req_device: '109'}));
  });
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
        Clients.write(JSON.stringify({id_device: 'node4', req_device: '109'}));
    });

    return unsubscribe;
  }, [navigation]);
	return (
	<SafeAreaView style={styles.container}>
        <Header header='Node4' />
        <View >
          <StatusBar backgroundColor="#82FA58" barStyle = "dark-content" hidden = {false} translucent = {true} />
          <SocketIO node = "node4" Clients= {Clients}/>
        </View>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
  container: {
    height:"98%",
    fontSize: 13,
  },
})