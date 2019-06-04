import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calender from "./calender";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Calender/>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50


    },
});
