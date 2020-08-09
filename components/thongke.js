import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { createStyles, maxWidth } from 'react-native-media-queries';


export default function ThongKe({node}) {
  return(
    <View style= {styles.sc1}>
            <View style={styles.op1}>
                <Image
                    source={require('../assets/op1/nhietdo.png')}
                    style={styles1.logo}
                />
                <Text style= {{paddingTop: 15, paddingRight: 30, fontSize: 13}}>Temperature:  {node.temp} °C</Text>
                <Image
                    source={require('../assets/op1/dat.png')}
                    style={styles1.logo}
                />
                <Text style= {{paddingTop: 15, fontSize: 13, paddingRight: 25}}>Soil:</Text>
                <Text style= {{paddingTop: 16, fontSize: 13}}>{node.soil} %</Text>
            </View>
            <View style={styles.op1}>
                <Image
                    source={require('../assets/op1/giotnuoc.png')}
                    style={styles1.logo}
                />
                <Text style= {{paddingTop: 15, paddingRight: 30, fontSize: 13}}>Humidity:</Text>
                <Text style= {{paddingTop: 16, fontSize: 13, paddingRight: 40}}>{node.humi} %</Text>
                <Image
                    source={require('../assets/op1/air.png')}
                    style={styles1.logo}
                />
                <Text style= {{paddingTop: 15, fontSize: 13, paddingRight: 25}}>  Air:</Text>
                <Text style= {{paddingTop: 16, fontSize: 13}}>{node.air} %</Text>
            </View>
        </View>
  )
}
const styles = StyleSheet.create({
    op1: {
      alignItems: 'flex-start',
      width: 370,
      flexDirection: 'row',
    },
    sc1: {
      backgroundColor: '#E6F8E0',
      borderColor: '#BCF5A9',
      borderWidth: 3,
      borderRadius: 10,
      marginBottom: 2,
    },
  })
  const base = {
      logo: {
          width: 55,
          height: 55,
      },
  }
  const styles1 = createStyles(
      base,
      maxWidth(360, {
          logo: {
              width: 40,
              height: 40,
          },
      })
  )
  