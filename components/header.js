import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { createStyles, maxWidth } from 'react-native-media-queries';

export default function Header({header}) {
  return (
      <View style={styles.bgHeader}>
        <Text style={styles.headerStyle}>{header}</Text>
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
      height: 65
    },
    headerStyle: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: 'black',
      fontWeight: "bold" ,
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
      })
  )