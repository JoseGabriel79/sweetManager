import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {AppNavigator} from "./components";


export default function App() {
    return (<View style={style.container}>
        <AppNavigator />
    </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
});