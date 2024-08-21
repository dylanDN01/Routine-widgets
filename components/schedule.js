import React, {useRef, useMemo, useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import moment from 'moment'

export default function Schedule() {
    const hours = [
        {index: 1, Hour: "1 AM"},
        {index: 2, Hour: "2 AM"},
        {index: 3, Hour: "3 AM"},
        {index: 4, Hour: "4 AM"},
        {index: 5, Hour: "5 AM"},
        {index: 6, Hour: "6 AM"},
        {index: 7, Hour: "7 AM"},
        {index: 8, Hour: "8 AM"},
        {index: 9, Hour: "9 AM"},
        {index: 10, Hour: "1 AM"},
        {index: 11, Hour: "11 AM"},
        {index: 12, Hour: "12 PM"},
        {index: 13, Hour: "1 PM"},
        {index: 14, Hour: "2 PM"},
        {index: 15, Hour: "3 PM"},
        {index: 16, Hour: "4 PM"},
        {index: 17, Hour: "5 PM"},
        {index: 18, Hour: "6 PM"},
        {index: 19, Hour: "7 PM"},
        {index: 20, Hour: "8 PM"},
        {index: 21, Hour: "9 PM"},
        {index: 22, Hour: "10 PM"},
        {index: 23, Hour: "11 PM"},
        {index: 24, Hour: "12 AM"},
    ]

    const [currentTime, setCurrentTime] = useState(moment());
    const [previousHour, setPreviousHour] = useState(moment().hour());



    const formattedTime = useMemo( () => {
        return currentTime.format('h A')
    }, [currentTime]);

    const isHour = (hour) => {
        
        return formattedTime === (hour.Hour);
    }

    useEffect( () => {
        const intervalId = setInterval( () => {
            const newTime = moment(); // get the time
            const currentHour = newTime.hour(); // get the hour
            
            if (currentHour !== previousHour) {
                setCurrentTime(newTime);
                setPreviousHour(currentHour);
                
            }
        }, 60 * 1000); // minutely update

        return () => clearInterval(intervalId);
    }, []);

    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style= {styles.headerText}> Time </Text>
                <Text style = {styles.headerText}> Task </Text>
            </View>
            <View style={styles.schedule}>
                {hours.map((hour) => {
                    const inputRef = useRef(null);

                    const handleFocus = () => {
                        inputRef.current?.focus();
                    };
                    return (
                        <GestureHandlerRootView key ={hour.index} style = {[styles.scheduleEntry, isHour(hour) && styles.highlighted]}>
                            <View style = {styles.scheduleRow}>
                                <Text style = {styles.timeEntry}> {hour.Hour} </Text>
                                <TextInput 
                                    ref={inputRef}
                                    style={styles.taskEntry}
                                    multiline={true}
                                    onFocus={handleFocus}
                                    placeholder='Free Space'/>
                            </View>
                        </GestureHandlerRootView>
                    );
                })}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    scheduleRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1

    },
    container: {
        display: 'flex',
        flex: 1, 
        position: 'absolute',
        flexDirection: 'column',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 20,
        backgroundColor: 'lightgray'
        
    },
    schedule: {
        backgroundColor: 'white',
        
    },
    scheduleEntry: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 3,
        paddingTop: 2,
    },
    highlighted: {
        backgroundColor: 'yellow'
    },
    timeEntry: {
        paddingRight: 12,
        flexDirection: 'row'
        
    },
    taskEntry: {
        flexDirection: 'row',
        paddingLeft: 10,
        width: Dimensions.get('window').width
    },
});