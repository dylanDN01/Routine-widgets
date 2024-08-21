import React from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions} from "react-native";

import LocalTime from '../components/time';
import Schedule from '../components/schedule';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default function Index() {


  return (
    <View style = {styles.container}>
      <StatusBar hidden/>

      <View  style = {styles.dateTime}><LocalTime/></View>

      <View style = {styles.message}>
        <Text style = {styles.messageText}>
          Hello There
        </Text>
      </View>

      <View style = {styles.schedule}>
        <Schedule/>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    flex: 1
  },
  message: {
    position: 'absolute',
    top: screenHeight * 0.04,
    right: 40,
    alignItems: 'flex-end'
  },
  messageText: {
    fontSize: 20
  },
  dateTime: {
    position: 'absolute',
    top: 20,
    left: '2%',
  },
  schedule: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginLeft: '3%',
    transform: [{scale: 0.75}],
    flex: 1,

  }
});