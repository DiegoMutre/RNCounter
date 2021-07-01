import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fab from '../components/Fab';

export default function CounterScreen() {
    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter: {counter}</Text>
            <Fab
                onPress={() => setCounter(counter - 1)}
                title="-1"
                position="bl"
            />
            <Fab onPress={() => setCounter(counter + 1)} title="+1" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        top: -15,
        textAlign: 'center',
    },
});
