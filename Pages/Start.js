import React from "react";
import {NativeBaseProvider, Box, VStack, Text, Button, Center} from "native-base";

export default function Start({ navigation }) {
    return (
        <NativeBaseProvider>
            <VStack alignItems="center" justifyContent={"center"} flex={1}>
                <VStack alignItems="center" justifyContent={"center"} flex={1}>
                </VStack>
                <VStack alignItems="center" justifyContent={"center"} flex={1} paddingX={"20%"}>
                    <Text fontSize={30} fontWeight={"bold"}>Passeia<Text color={"#FF0000"}>cão</Text></Text>
                    <Text fontSize={15} textAlign={"center"} fontWeight={"bold"}>O seu app para passeios exclusivos para o
                        seu cão!</Text>
                </VStack>
                <VStack alignItems="center" justifyContent={"center"} flex={1} width={"80%"}>
                    <Button onPress={() => navigation.navigate('Login')}
                            width={"100%"}
                            style={{
                                backgroundColor: "#D9D9D9",
                                borderRadius: "30px",
                                color: "#FF0000",
                                height: 80,
                                textAlign: "center"
                            }}
                    >
                        <Text color={"#FF0000"} fontSize={25} fontWeight={"bold"}>Iniciar</Text></Button>
                </VStack>
            </VStack>
        </NativeBaseProvider>
    );
}