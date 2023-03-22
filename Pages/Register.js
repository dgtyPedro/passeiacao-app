import React from "react";
import {NativeBaseProvider, Box, VStack, Text, Button, Input, Link} from "native-base";

export default function Register({navigation}) {
    return (
        <NativeBaseProvider>
            <VStack alignItems="center" justifyContent={"center"} flex={1}>
                <Text>Registro</Text>
                <Text>You are only a few step away,just provide
                    some details below to register.</Text>
                <Input></Input>
                <Input></Input>
                <Input></Input>
                <Input></Input>
                <Button onPress={() => navigation.navigate('Login')}>Register</Button>
                <Link onPress={() => navigation.navigate('Login')}>Already have an account? Sign In</Link>
            </VStack>
        </NativeBaseProvider>
    );
}