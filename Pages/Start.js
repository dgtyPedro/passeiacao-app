import React from "react";
import {NativeBaseProvider, Box, VStack, Text, Button} from "native-base";

export default function Start({ navigation }) {
    return (
        <NativeBaseProvider>
            <VStack alignItems="center" justifyContent={"center"} flex={1}>
                <Text>Passeiacão</Text>
                <Text>O seu app para passeios exclusivos para o
                    seu cão!</Text>
                <Button onPress={() => navigation.navigate('Login')}>Iniciar</Button>
            </VStack>
        </NativeBaseProvider>
    );
}