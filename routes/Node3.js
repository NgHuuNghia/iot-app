import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Node3 from '../screen/Node/Node3'

const Stack = createStackNavigator()

const {Navigator, Screen} = Stack

export default function ManamentStack(props) {
	return (
		<Navigator initialRouteName={'Node3'} >
			<Screen
				name={'Node3'}
				component={Node3}
				options={{
					title: props.title,
					headerTitleAlign: 'center',
					headerPressColorAndroid: '#BCF5A9',
				}}
			/>
		</Navigator>
	)
}
