import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Button} from 'react-native';


export default function Schedule() {
    const hours = [
        {index: 1, Hour: "1:00 AM"},
        {index: 2, Hour: "2:00 AM"},
        {index: 3, Hour: "3:00 AM"},
        {index: 4, Hour: "4:00 AM"},
        {index: 5, Hour: "5:00 AM"},
        {index: 6, Hour: "6:00 AM"},
        {index: 7, Hour: "7:00 AM"},
        {index: 8, Hour: "8:00 AM"},
        {index: 9, Hour: "9:00 AM"},
        {index: 10, Hour: "10:00 AM"},
        {index: 11, Hour: "11:00 AM"},
        {index: 12, Hour: "12:00 PM"},
        {index: 13, Hour: "1:00 PM"},
        {index: 14, Hour: "2:00 PM"},
        {index: 15, Hour: "3:00 PM"},
        {index: 16, Hour: "4:00 PM"},
        {index: 17, Hour: "5:00 PM"},
        {index: 18, Hour: "6:00 PM"},
        {index: 19, Hour: "7:00 PM"},
        {index: 20, Hour: "8:00 PM"},
        {index: 21, Hour: "9:00 PM"},
        {index: 22, Hour: "10:00 PM"},
        {index: 23, Hour: "11:00 PM"},
        {index: 24, Hour: "12:00 AM"},
    ]

    return (
        <SafeAreaView>
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <Text style= {styles.headerText}>
                        Time
                    </Text>
                </View>

            </View>

            <View style={styles.schedule}>
                {hours.map((hour) => {
                    return (
                        <View key ={hour.index} style = {styles.scheduleEntry}>
                            <Text>
                                {hour.Hour}
                            </Text>
                        </View>
                    );
                })}
            </View>

            <View style = {styles.editButton}>
                <Button title = "Edit"
                onPress={() => {
                    console.log("button pressed");
                }}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        display: 'flex'
    },
    header: {
        
    },
    headerText: {
        fontSize: 20,
        backgroundColor: 'lightgray'
    },
    schedule: {
        backgroundColor: 'white'
    },
    scheduleEntry: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 3,
        paddingTop: 2
    },
    editButton: {
        backgroundColor: 'yellow'
    }
});