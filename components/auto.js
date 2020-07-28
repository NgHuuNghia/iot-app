import React, { useState } from 'react'
import {Text, StyleSheet, View, Switch, Image, TouchableOpacity} from 'react-native'
import { createStyles, maxWidth } from 'react-native-media-queries';
import dataNode from './data/data.json'


export default function Auto({node}) {
  var check = 0;
  dataNode.map((data, index) => {
    if(data.node === node) {
      check = index;
    }
  })
    const [isEnabled, setIsEnabled] = useState(dataNode[check].auto)
    const [pump1, setPump1] = useState(dataNode[check].pump1)
    const [pump2, setPump2] = useState(dataNode[check].pump2)
    const [pump3, setPump3] = useState(dataNode[check].pump3)
    const [dew, setDew] = useState(dataNode[check].dew)
    const [fan, setFan] = useState(dataNode[check].fan)
    function onClickPump1() {
      if(isEnabled)
        {
          setPump1(!pump1)
          //const  data =  dataNode.map( node => node.node === check ? {...node, pump1: !pump1} : node)
          var path = fs.DocumentDirectoryPath + '../textfile.txt';
 
          // write the file
          fs.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
            .then((success) => {
              console.log('FILE WRITTEN!');
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
    }
    function onClickPump2() {
      if(isEnabled)
      {
        setPump2(!pump2)
      }
    }
    function onClickPump3() {
      if(isEnabled)
      {
        setPump3(!pump3)
      }
    }
    function onClickFan() {
      if(isEnabled)
      {
        setFan(!fan)
      }
    }
    function onClickDew() {
      if(isEnabled)
      {
        setDew(!dew)
      }
    }
    const toggleSwitch = () => {
      setIsEnabled(previousState => !previousState);
    }
    return(
      <View style= {styles.sc1}>
          <View style= {styles.op3}>
            <Image
                source={require('../assets/auto/setting.png')}
                style={styles1.logo}
            />
            <Text style={styles1.text}> Chế độ Auto </Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#81b0ff" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style= {styles1.sw}
            />
          </View>
          <View style = {styles.op3}>
            <View style = {styles.op6}>
              <View style = {styles.op4}>
                <Image
                  source={require('../assets/auto/3nuoc.png')}
                  style={styles1.logo}
                />
                <TouchableOpacity onPress= {() => {onClickDew()}}>
                  {(dew) ? <View style= {styles1.radiobtn1} /> : <View style= {styles1.radiobtn} />}
                </TouchableOpacity>
              </View>
              <Text >Dew</Text>
            </View >
            <View style = {styles.op6}>
              <View style = {styles.op4}>
              <Image
                source={require('../assets/auto/quat.png')}
                style={styles1.logo}
              />
                <TouchableOpacity onPress= {() => {onClickFan()}}>
                {(fan) ? <View style= {styles1.radiobtn1} /> : <View style= {styles1.radiobtn} />}
                </TouchableOpacity >
              </View>
              <Text >fan</Text>
            </View >
          </View>

          <View style = {styles.op3}>
            <View style= {styles1.op7}>
              <View style = {styles1.op5}>
              <Image
                source={require('../assets/auto/maybom.png')}
                style={styles1.logo}
              />
                <TouchableOpacity onPress= {() => {onClickPump3()}}>
                {(pump3) ? <View style= {styles1.radiobtn1} /> : <View style= {styles1.radiobtn} />}
                </TouchableOpacity>
              </View >
              <Text>Pump 3</Text>
            </View>
            <View style= {styles1.op7}>
              <View style = {styles1.op5}>
              <Image
                source={require('../assets/auto/maybom.png')}
                style={styles1.logo}
              />
                <TouchableOpacity onPress= {() => {onClickPump2()}}>
                {(pump2) ? <View style= {styles1.radiobtn1} /> : <View style= {styles1.radiobtn} />}
                </TouchableOpacity>
              </View >
              <Text>Pump 2</Text>
            </View>

            <View style= {styles1.op7}>
              <View style = {styles1.op5}>
              <Image
                source={require('../assets/auto/maybom.png')}
                style={styles1.logo}
              />
                <TouchableOpacity onPress= {() => {onClickPump1()}}>
                  {(pump1) ? <View style= {styles1.radiobtn1} /> : <View style= {styles1.radiobtn} />}
                </TouchableOpacity>
              </View >
              <Text>Pump 1</Text>
            </View>
      </View>
    </View>
    )
}
const styles = StyleSheet.create({
  sc1: {
    backgroundColor: '#E6F8E0',
    borderColor: '#BCF5A9',
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 10
    },
    op3: {
        alignItems: 'flex-start',
        width: 370,
        flexDirection: 'row',
    },
    op4: {
      alignItems: 'center',
      flexDirection: 'row',
      textAlign: 'center',
    },
    op6: {
      alignItems: 'center',
      width: 90,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#0040FF',
      textAlign: 'center',
      marginLeft: 50, 
      marginTop: 2,
      marginBottom: 10
    }
})
const base = {
  logo: {
      width: 55,
      height: 55,
    },
  text: {
    paddingTop: 18
  },
  sw: {
    paddingRight: 150, 
    paddingTop: 25
  },
  radiobtn: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#424242'
  },
  radiobtn1: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E2EFE'
  },
  op5: {
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'center',
  },
  op7: {
    alignItems: 'center',
    width: 90,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#0040FF',
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 5
  }
}
const styles1 = createStyles(
  base,
  maxWidth(360, {
      logo: {
          width: 40,
          height: 40,
      },
      text: {
        paddingTop: 10
      },
      sw: {
        paddingRight: 140, 
        paddingTop: 15
      },
      op5: {
        marginLeft: 17,
      }
  })
)