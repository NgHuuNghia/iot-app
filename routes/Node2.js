import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Node2 from '../screen/Node/Node2'

const Stack = createStackNavigator()

const {Navigator, Screen} = Stack

export default function ManamentStack(props) {
	return (
		<Navigator initialRouteName={'Node2'} >
			<Screen
				name={'Node2'}
				component={Node2}
				options={{
					title: props.title,
					headerTitleAlign: 'center',
					headerPressColorAndroid: '#BCF5A9',
				}}
			/>
		</Navigator>
	)
}
