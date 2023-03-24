import React from "react";
import {NativeBaseProvider, Box, VStack, Text, Button, Center, HStack} from "native-base";
import {Image} from "react-native";

export default function Start({ navigation }) {
    return (
        <NativeBaseProvider>
            <VStack alignItems="center" justifyContent={"center"} flex={1}>
                <VStack alignItems="center" justifyContent={"center"} flex={1}>
                </VStack>
                <VStack alignItems="center" justifyContent={"center"} flex={1} paddingX={"20%"}>
                    <HStack alignItems="center" justifyContent={"center"}>
                        <Text fontSize={30} fontWeight={"bold"}>Passeia<Text color={"#FF0000"}>cão</Text></Text>
                        <Image
                            style={{
                                width: 50,
                                resizeMode: 'contain',
                            }}
                            source={require('../assets/img_1.png')}
                        />
                    </HStack>
                    <Text fontSize={15} textAlign={"center"} fontWeight={"bold"}>O seu app para passeios exclusivos para o
                        seu cão!</Text>
                </VStack>
                <VStack alignItems="center" justifyContent={"center"} flex={1} width={"80%"}>
                    <Button onPress={() => navigation.navigate('Login')}
                            width={"100%"}
                            style={{
                                backgroundColor: "#D9D9D9",
                                borderRadius: 30,
                                color: "#FF0000",
                                height: 80,
                                textAlign: "center"
                            }}
                    >
                        <Text color={"#FF0000"} fontSize={25} fontWeight={"bold"}>Iniciar</Text>
                    </Button>
                </VStack>
            </VStack>
        </NativeBaseProvider>
    );
}