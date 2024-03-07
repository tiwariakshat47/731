import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Input, Image } from "react-native-elements"
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                navigation.replace('Home')
            }
        });
        
        return unsubscribe;
    }, []);

    const signIn = () => {};

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar style="light" />
        <Image
        source = {{
            uri:
            "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=1060&t=st=1709791081~exp=1709791681~hmac=a512719c0bdd3a25e919fd4a80109079a68c618e9ae8dbb6a9180cba37d7a86a",
        }}
        style={{ width: 200, height: 200}}
        />
        <View style={styles.inputContainer}>
            <Input 
                placeholder="Email" 
                autoFocus 
                type = "Email" 
                value={email} 
                onChangeText={(text) => setEmail(text)}/>
            <Input 
                placeholder="Password" 
                secureTextEntry 
                type = "Password" 
                value={password} 
                onChangeText={(text) => setPassword(text)}/>

        </View>
        <Button 
            containerStyle={styles.button} 
            onPress={signIn}
            title="Login" />
        <Button 
            onPress={() => navigation.navigate("Register")}
            containerStyle={styles.button} 
            type = "outline" 
            title="Register" />
        <View style={{ height:100 }} />
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300, 
    },
    button: {
        width: 200,
        marginTop: 10,
    },
})