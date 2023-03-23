import React from "react";
import {NativeBaseProvider, Box, VStack, Text, Button, Input, Link, HStack, Select, CheckIcon} from "native-base";
import {Keyboard, TouchableWithoutFeedback, View, StyleSheet, Image} from "react-native";

export default function Home() {
    return (
        <NativeBaseProvider safeArea>
            <VStack alignItems="center" justifyContent={"center"} flex={1} safeArea>
                <HStack flex={1} alignItems={"center"} justifyContent={"center"}>
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
                </HStack>
                <VStack flex={12} width={"100%"}>
                    <Image
                        style={{
                            width: "100%",
                            resizeMode: 'cover',
                            height: "30%",
                        }}
                        source={require('../assets/img.png')}
                    />
                    <VStack flex={1} paddingX={5} paddingBottom={10} paddingTop={5}>
                        <HStack justifyContent={"space-around"} alignItems={"center"}>
                            <Text fontSize={20} textAlign={"center"} fontWeight={"bold"}>Disponíveis hoje</Text>
                            <Select minWidth={"40%"} accessibilityLabel="Distância" placeholder="Distância" mt={1} borderRadius={30}>
                                <Select.Item label="<= 1km" value="ux"/>
                                <Select.Item label="<= 3km" value="ux"/>
                                <Select.Item label="<= 5km" value="ux"/>
                                <Select.Item label="<= 10km" value="web"/>
                                <Select.Item label="<= 15km" value="cross"/>
                            </Select>
                        </HStack>
                        <VStack alignItems={"center"} justifyContent={"space-between"} flex={1}>
                            <VStack flex={1} alignItems={"center"} justifyContent={"center"}>
                                <Text fontSize={20} textAlign={"center"}>Não existem passeadores disponíveis
                                    para o dia de hoje :(</Text>
                            </VStack>

                            <Button onPress={() => navigation.navigate('Login')}
                                    width={"80%"}
                                    style={{
                                        backgroundColor: "#FA5050",
                                        borderRadius: "30px",
                                        color: "white",
                                        height: 80,
                                        textAlign: "center",
                                    }}
                            >
                                <Text color={"white"} fontSize={25} fontWeight={"bold"}>Agende um passeio</Text>
                            </Button>
                        </VStack>
                    </VStack>

                </VStack>
                <HStack width={"100%"} flex={1} alignItems={"space-around"} justifyContent={"space-around"} borderTopWidth={1} borderTopColor={"#E5E5E5"}>
                    <VStack alignItems="center" justifyContent={"center"}>
                        <Image
                            style={{
                                width: 30,
                                resizeMode: 'contain',
                                height: 30,
                            }}
                            source={require('../assets/img_2.png')}
                        />
                        <Text>Home</Text>
                    </VStack>
                    <VStack alignItems="center" justifyContent={"center"}>
                        <Image
                            style={{
                                width: 50,
                                resizeMode: 'contain',
                                height: 30,
                            }}
                            source={require('../assets/img_3.png')}
                        />
                        <Text>Agenda</Text>
                    </VStack>
                </HStack>
            </VStack>
        </NativeBaseProvider>
    );
}