import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Node1 from '../screen/Node/Node1'
import Node2 from '../screen/Node/Node2'
import Node3 from '../screen/Node/Node3'
import Node4 from '../screen/Node/Node4'
import Node5 from '../screen/Node/Node5'

const Tab = createBottomTabNavigator()

export default function BottomTabNavigator (props) {
  //const Clients = net.connect({port: 3333, host: '192.168.1.17'});
  return (
    <Tab.Navigator
      initialRouteName={'Node1'}
      tabBarOptions={{
        activeTintColor: 'black',
        showLabel: true,
        inactiveBackgroundColor: '#82FA58'
      }}>
      <Tab.Screen
        name='Node1'
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name={'home'} color={'black'} size={size} />
          )
        }}
        component={Node1}
      />
      <Tab.Screen
        name='Node2'
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name={'home'} color={'black'} size={size} />
          )
        }}
        component={Node2}
      />
      <Tab.Screen
        name='Node3'
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name={'home'} color={'black'} size={size} />
          )
        }}
        component={Node3}
      />
      <Tab.Screen
        name='Node4'
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name={'home'} color={'black'} size={size} />
          )
        }}
        title="1"
        component={Node4}
      />
      <Tab.Screen
        name='Node5'
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name={'home'} color={'black'} size={size} />
          )
        }}
        component={Node5}
      />
    </Tab.Navigator>
  )
}
