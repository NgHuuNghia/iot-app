import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { createStyles, maxWidth } from 'react-native-media-queries';
import { CTX } from '../tools/context'

export default function Header({header}) {
  const authContext = useContext(CTX)
	const {_logout} = authContext
  function onLogout() {
    _logout()
  }
  return (
      <View style={styles.bgHeader}>
        <Text style={styles.headerStyle}>{header}</Text>
        <TouchableOpacity onPress={() => { onLogout() }}>
          <Image
              source={require('../assets/logout.png')}
              style={styles.logo}
          />
        </TouchableOpacity>

      </View>
  )
}

  const base = {
    bgHeader: {
      backgroundColor: 'white',
      justifyContent:'center',
      alignItems:'center',
      marginTop: 28,
      width: '100%',
      height: 65,
      flexDirection: 'row',
      textDecoration: 'underline'
    },
    headerStyle: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: 'black',
      fontWeight: "bold" ,
      marginRight: 100,
      paddingLeft: 120,
      textDecoration: 'underline'
    },
    button: {
      borderRadius: 5,
      width: 10,
      height: 10,
      backgroundColor: '#4871E0',
    },
    logo: {
      width: 25,
      height: 25
    },
  }
  const styles = createStyles(
      base,
      maxWidth(360, {
        bgHeader: {
          marginTop: 25,
          width: '100%',
          height: 50
        },
        headerStyle: {
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
          color: 'black',
          fontWeight: "bold" ,
        },
        logo: {
          width: 20,
          height: 20,
        },
      })
  )