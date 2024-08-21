import React from 'react';
import {View, Text, StyleSheet, Dimensions, KeyboardAvoidingView} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function selector() {
    const days = [
        {day: "Mon", index: 1},
        {day: "Tue", index: 2},
        {day: "Wed", index: 3},
        {day: "Thur", index: 4},
        {day: "Fri", index: 5},
        {day: "Sat", index: 6},
        {day: "Sun", index: 7},
      ]

      return (
        <View style = {styles.dateSelector}>
            {days.map( (day) => {
                return (
                    <KeyboardAvoidingView key={day.index} style = {styles.dateEntry}>

                        <Text>{day.day}</Text>

                    </KeyboardAvoidingView>
                );
            })}
        </View>
      );
}

const styles = StyleSheet.create({
    dateSelector: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        justifyContent: 'space-around'
    },
    dateEntry: {
        backgroundColor: 'lightgray',
        borderRadius: 2,
        borderStyle: 'solid'
    }
});
