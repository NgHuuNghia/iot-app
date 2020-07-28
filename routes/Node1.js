import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {
	HOME,
} from '../constants/index'
import Node1 from '../screen/Node/Node1'

const Stack = createStackNavigator()

const {Navigator, Screen} = Stack

export default function ManamentStack(props) {
	return (
		<Navigator initialRouteName={'Node1'} >
			<Screen
				name={'Node1'}
				component={Node1}
				options={{
					title: props.title,
					headerTitleAlign: 'center',
					headerPressColorAndroid: '#BCF5A9',
				}}
			/>
		</Navigator>
	)
}
