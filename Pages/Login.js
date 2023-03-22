import React from "react";
import {NativeBaseProvider, Box, VStack, Text, Button, Input, Link} from "native-base";

export default function Login({navigation}) {
    return (
        <NativeBaseProvider>
            <VStack alignItems="center" justifyContent={"center"} flex={1}>
                <Text>Login</Text>
                <Text>Enter your username and  password
                    to login</Text>
                <Input></Input>
                <Input></Input>
                <Button onPress={() => navigation.navigate('Home')}>Sign Up</Button>
                <Link onPress={() => navigation.navigate('Register')}>dont have an account? Register</Link>
            </VStack>
        </NativeBaseProvider>
    );
}