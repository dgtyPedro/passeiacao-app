import React, {useEffect} from "react";
import {
    NativeBaseProvider,
    Box,
    VStack,
    Text,
    Button,
    Input,
    Link,
    HStack,
    Select,
    CheckIcon,
    Pressable
} from "native-base";
import {Keyboard, TouchableWithoutFeedback, View, StyleSheet, Image, Alert} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

export default function Home({navigation}) {

    // useEffect(() => {
    //     Alert.alert('Bem vindo Pedro Caires!', 'Número de passeios de hoje: 0', [
    //         {text: 'Continuar', onPress: () => console.log('OK Pressed')},
    //     ]);
    // }, [])
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
                            backgroundColor: '#e1e4e8',
                        }}
                        source={require('../assets/img.png')}
                    />
                    <VStack flex={1} paddingX={5} paddingBottom={10} paddingTop={5}>
                        <HStack justifyContent={"space-around"} alignItems={"center"}>
                            <Text fontSize={20} textAlign={"center"} fontWeight={"bold"}>Disponíveis hoje</Text>
                        </HStack>
                        <VStack alignItems={"center"} justifyContent={"space-between"} flex={1}>
                            <VStack flex={1} width={"100%"}>
                                <HStack width={"100%"} alignItems={"center"} justifyContent={"space-between"}
                                        paddingRight={5}
                                        paddingLeft={2}
                                        paddingY={2}

                                        style={{
                                            borderBottomWidth: 1,
                                            borderBottomColor: '#FF0000',
                                        }}>

                                    <HStack style={{width: '80%'}} alignItems={"center"} space={3}>
                                        <FontAwesome name="user-circle" size={56} color="black"/>
                                        <Text style={{width: '100%', flexWrap: 'wrap'}}>Pedro Passeador</Text>
                                    </HStack>
                                </HStack>
                                <HStack width={"100%"} alignItems={"center"} justifyContent={"space-between"}
                                        paddingRight={5}
                                        paddingLeft={2}
                                        paddingY={2}

                                        style={{
                                            borderBottomWidth: 1,
                                            borderBottomColor: '#FF0000',
                                        }}>

                                    <HStack style={{width: '80%'}} alignItems={"center"} space={3}>
                                        <FontAwesome name="user-circle" size={56} color="black"/>
                                        <Text style={{width: '100%', flexWrap: 'wrap'}}>Felipe Murata</Text>
                                    </HStack>
                                </HStack>
                            </VStack>

                            <Button onPress={() => navigation.navigate('Schedule')}
                                    width={"80%"}
                                    style={{
                                        backgroundColor: "#FA5050",
                                        borderRadius: 30,
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
                        <Pressable onPress={() => navigation.navigate('ClientCalendar')}>
                            <Image
                                style={{
                                    width: 50,
                                    resizeMode: 'contain',
                                    height: 30,
                                }}
                                source={require('../assets/img_3.png')}
                            />
                            <Text>Agenda</Text>
                        </Pressable>
                    </VStack>
                </HStack>
            </VStack>
        </NativeBaseProvider>
    );
}