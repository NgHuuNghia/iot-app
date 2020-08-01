import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Node4 from '../screen/Node/Node4'
import net from 'react-native-tcp';

const Stack = createStackNavigator()

const {Navigator, Screen} = Stack

export default function ManamentStack(props, navigation) {
	React.useEffect(() => {
		  const Clients = net.connect({port: 3333, host: '192.168.1.17'}, () => {
		  Clients.write(JSON.stringify({id_device: 'node4', req_device: '109'}));
		});
	  }, []);
	return (
		<Navigator initialRouteName={'Node4'} >
			<Screen
				name={'Node4'}
				component={Node4}
				options={{
					title: props.title,
					headerTitleAlign: 'center',
					headerPressColorAndroid: '#BCF5A9',
				}}
			/>
		</Navigator>
	)
}
