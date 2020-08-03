import React, { useState, useEffect } from 'react'
import {Text, StyleSheet, View, Switch, Image, TouchableOpacity} from 'react-native'
import { createStyles, maxWidth } from 'react-native-media-queries';


export default function Auto({node, Clients}) {
    const [isEnabled, setIsEnabled] = useState(null)
    const [pump1, setPump1] = useState(null)
    const [pump2, setPump2] = useState(null)
    const [pump3, setPump3] = useState(null)
    const [dew, setDew] = useState(null)
    const [fan, setFan] = useState(null)
    useEffect(() => {
      setIsEnabled(+node.mode)
      setPump1(+node.ctrl1)
      setPump2(+node.ctrl2)
      setPump3(+node.ctrl3)
      setDew(+node.ctrl4)
      setFan(+node.ctrl5)
  }, [node])
    function onClickPump1() {
      if(isEnabled)
        {
          const rs = +!pump1;
          setPump1(rs)
          Clients.write(JSON.stringify(
            {"id_device":node.id_device,"ctrl1":rs.toString(),"ctrl2":pump2.toString(),"ctrl3":pump3.toString(),"ctrl4":dew.toString(),"ctrl5":fan.toString(),"req_device":"104"}
          ));
          setTimeout(()=>{Clients.write(JSON.stringify({id_device: node.id_device, req_device: '109'}))}, 5000);
        }
    }
    function onClickPump2() {
      if(isEnabled)
      {
        const rs = +!pump2;
        setPump2(rs)
        Clients.write(JSON.stringify(
          {"id_device":node.id_device,"ctrl1":pump1.toString(),"ctrl2":rs.toString(),"ctrl3":pump3.toString(),"ctrl4":dew.toString(),"ctrl5":fan.toString(),"req_device":"104"}
        ));
        setTimeout(()=>{Clients.write(JSON.stringify({id_device: node.id_device, req_device: '109'}))}, 5000);
      }
    }
    function onClickPump3() {
      if(isEnabled)
      {
        const rs = +!pump3;
        setPump3(rs)
        Clients.write(JSON.stringify(
          {"id_device":node.id_device,"ctrl1":pump1.toString(),"ctrl2":pump2.toString(),"ctrl3":rs.toString(),"ctrl4":dew.toString(),"ctrl5":fan.toString(),"req_device":"104"}
        ));
        setTimeout(()=>{Clients.write(JSON.stringify({id_device: node.id_device, req_device: '109'}))}, 5000);
      }
    }
    function onClickFan() {
      if(isEnabled)
      {
        const rs = +!fan
        setFan(rs)
        Clients.write(JSON.stringify(
          {"id_device":node.id_device,"ctrl1":pump1.toString(),"ctrl2":pump2.toString(),"ctrl3":pump3.toString(),"ctrl4":dew.toString(),"ctrl5":rs.toString(),"req_device":"104"}
        ));
        setTimeout(()=>{Clients.write(JSON.stringify({id_device: node.id_device, req_device: '109'}))}, 5000);
      }
    }
    function onClickDew() {
      if(isEnabled)
      {
        const rs= +!dew
        setDew(rs)
        Clients.write(JSON.stringify(
          {"id_device":node.id_device,"ctrl1":pump1.toString(),"ctrl2":pump2.toString(),"ctrl3":pump3.toString(),"ctrl4":rs.toString(),"ctrl5":fan.toString(),"req_device":"104"}
        ));
        setTimeout(()=>{Clients.write(JSON.stringify({id_device: node.id_device, req_device: '109'}))}, 5000);
      }
    }
    const toggleSwitch = () => {
      const rs = (previousState => !previousState)
      setIsEnabled(rs);
      const rs1 = +!isEnabled;
      Clients.write(JSON.stringify(
        {"id_device":node.id_device,"mode":rs1.toString(),"req_device":"108"}
      ));
      setTimeout(()=>{Clients.write(JSON.stringify({id_device: node.id_device, req_device: '109'}))}, 5000);
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
                value={isEnabled ? true : false}
                style= {styles1.sw}
            />
          </View>
          <View style = {styles.op3}>
            <View style = {styles1.op6}>
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
            <View style = {styles1.op6}>
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
  op6: {
    alignItems: 'center',
    width: 90,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#0040FF',
    textAlign: 'center',
    marginLeft: 62,
    marginTop: 2,
    marginBottom: 10
  },
  op7: {
    alignItems: 'center',
    width: 90,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#0040FF',
    marginLeft: 25,
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
      },
      op6: {
        marginLeft: 40,
      },
      op7: {
        marginLeft: 15,
      }
  })
)