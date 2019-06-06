import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calender from "./calender";
import {Provider} from 'react-redux';
import {store} from "./store/store";

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <View style={styles.container}>
                <Calender/>
        </View>
            </Provider>
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
