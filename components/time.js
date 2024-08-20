import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import dayjs from 'dayjs';

const TimeComponent = () => {
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(dayjs());
    }, 30000); // Update every 30 seconds (in case of mistimed load)

    return () => clearInterval(intervalId);
  }, []);
  
  // date time object
  return (
    <View>
      <Text style={styles.date}>{currentTime.format('dddd, DD MMMM')}</Text>
      <Text style={styles.time}>{currentTime.format('hh:mm A')}</Text>
    </View>
  );
};

export default TimeComponent;

 const styles = StyleSheet.create({
    date: {
        fontSize: 20,
        fontWeight: 'bold',
        alignContent: 'center',
        borderRadius: 2,
    },
    time: {
        fontSize: 30,
    }
 });