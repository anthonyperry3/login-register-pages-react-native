import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon, Input } from 'react-native-elements'

export default function RegisterScreen({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.back}>
            <Text style={styles.title}>Register</Text>
            <Input placeholder='Email' leftIcon={<Icon name='envelope' type='font-awesome' color='#444'/>}/>
            <Input placeholder='Password' secureTextEntry={true} leftIcon={<Icon name='lock' type='font-awesome' color='#444'/>}/>
            <Input placeholder='Confirm Password' secureTextEntry={true} leftIcon={<Icon name='check' type='font-awesome' color='#444'/>}/>
            <TouchableOpacity style={styles.btn}>Register</TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Login')}>Login</TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',   
    },
    title: {
        fontSize: 25,
        fontWeight: '400',       
        alignItems: 'center',
        textAlign: 'center',
    },
    btn: {
       flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        backgroundColor: 'orange',
        height: 100,
        // width: 75,
    },
    btn2: {
        alignItems: 'center',
        marginTop: 4,
        textDecorationLine: 'underline'
    },
    btn2: {
        alignItems: 'center',
        marginTop: 4,
        textDecorationLine: 'underline'
    },
})