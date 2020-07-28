import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Node5 from '../screen/Node/Node5'

const Stack = createStackNavigator()

const {Navigator, Screen} = Stack

export default function ManamentStack(props) {
	return (
		<Navigator initialRouteName={'Node5'} >
			<Screen
				name={'Node5'}
				component={Node5}
				options={{
					title: props.title,
					headerTitleAlign: 'center',
					headerPressColorAndroid: '#BCF5A9',
				}}
			/>
		</Navigator>
	)
}
