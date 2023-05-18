import React, {useEffect, useState} from "react";
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
    ScrollView,
    Modal, Pressable
} from "native-base";
import {Keyboard, TouchableWithoutFeedback, View, StyleSheet, Image, Alert} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';

export default function Calendar({navigation}) {

    const [showModal, setShowModal] = useState(false);

    const [showModal2, setShowModal2] = useState(false);

    const [showModal3, setShowModal3] = useState(false);

    const [showModal4, setShowModal4] = useState(false);

    const [dates, setDates] = useState(null);

    useEffect(() => {
        const newDate = [];
        const start = new Date();
        const end = new Date(new Date().setMonth(new Date().getMonth() + 1));
        var day = start;
        while (day <= end) {
            console.log(day.toLocaleString())
            newDate.push({
                month: (day.getMonth() + 1).toString().length === 1 ? `0${day.getMonth() + 1}` : day.getMonth() + 1,
                day: (day.getDate() + 1).toString().length === 1 ? `0${day.getDate() + 1}` : day.getDate() + 1,
            })
            var newDay = day.setDate(day.getDate() + 1);
            day = new Date(newDay)
        }
        setDates(newDate)
    }, [])

    useEffect(() => {
        console.log(showModal)
    }, [showModal])

    return (
        <NativeBaseProvider safeArea>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton/>
                    <Modal.Header>Sobre o Passeio</Modal.Header>
                    <Modal.Body>
                        <Text>Passeio com o João as 15:00</Text>
                        <Text>Endereço: Rua das lágrimas</Text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button onPress={() => {
                                setShowModal(false);
                            }}
                                    background={"#333333"}
                            >
                                OK
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
            <Modal isOpen={showModal2} onClose={() => setShowModal2(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton/>
                    <Modal.Header>Deseja aceitar o passeio?</Modal.Header>
                    <Modal.Body>
                        <Text>Passeio com o João as 15:00</Text>
                        <Text>Endereço: Rua das lágrimas</Text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                setShowModal2(false);
                            }}>
                                Cancelar
                            </Button>
                            <Button onPress={() => {
                                setShowModal2(false);
                            }}
                                    background={"#333333"}
                            >
                                Aceitar
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
            <Modal isOpen={showModal3} onClose={() => setShowModal3(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton/>
                    <Modal.Header>Deseja recusar o passeio?</Modal.Header>
                    <Modal.Body>
                        <Text>Passeio com o João as 15:00</Text>
                        <Text>Endereço: Rua das lágrimas</Text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                setShowModal3(false);
                            }}>
                                Cancelar
                            </Button>
                            <Button onPress={() => {
                                setShowModal3(false);
                            }}
                                    background={"#333333"}
                            >
                                Recusar
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
            <Modal isOpen={showModal4} onClose={() => setShowModal4(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton/>
                    <Modal.Header>Passeio confirmado! :)</Modal.Header>
                </Modal.Content>
            </Modal>
            <VStack alignItems="center" justifyContent={"center"} flex={1} safeArea background={"#333333"}>
                <HStack flex={1} width={"100%"} alignItems={"center"} justifyContent={"space-between"} paddingX={5}
                        style={{borderBottomWidth: 1, borderBottomColor: '#FF8066'}}>
                    <Text bold onPress={() => navigation.goBack()} color={"#FF8066"}>Voltar</Text>
                </HStack>
                <VStack flex={12} width={"100%"}>
                    <ScrollView>
                        {
                            dates?.map((date, index) => {
                                if (index % 3 === 0) {
                                    return (
                                        <HStack width={"100%"} alignItems={"center"} justifyContent={"space-between"}
                                                paddingRight={5}
                                                paddingLeft={2}
                                                paddingY={2}
                                                style={{borderBottomWidth: 1, borderBottomColor: 'white'}}>
                                            <Pressable onPress={() => {
                                                setShowModal(true);
                                            }}>
                                                <HStack style={{width: '50%'}} alignItems={"center"} space={3}>
                                                    <Text color={"white"} bold
                                                          fontSize={"3xl"}>{`${date.day}/${date.month}`}</Text>
                                                    <Text color={"white"} style={{width: '100%', flexWrap: 'wrap'}}>22:00
                                                        ➡️ Passeio com João222222222</Text>
                                                </HStack>
                                            </Pressable>
                                            <HStack alignItems={"center"} borderRadius={20} paddingX={2}>
                                                <Pressable onPress={() => {
                                                    setShowModal4(true);
                                                }}>
                                                    <AntDesign name="like1" size={24} color="#FF8066"/>
                                                </Pressable>
                                            </HStack>
                                        </HStack>
                                    )
                                }
                                return (
                                    <HStack width={"100%"} alignItems={"center"} justifyContent={"space-between"}
                                            paddingRight={5}
                                            paddingLeft={2}
                                            paddingY={2}
                                            style={{borderBottomWidth: 1, borderBottomColor: 'white'}}>
                                        <Pressable onPress={() => {
                                            setShowModal(true);
                                        }}>
                                            <HStack style={{width: '50%'}} alignItems={"center"} space={3}>
                                                <Text color={"white"} bold
                                                      fontSize={"3xl"}>{`${date.day}/${date.month}`}</Text>
                                                <Text color={"white"} style={{width: '100%', flexWrap: 'wrap'}}>22:00 ➡️
                                                    Passeio com João222222222</Text>
                                            </HStack>
                                        </Pressable>
                                        <HStack alignItems={"center"} background={"white"} borderRadius={20}
                                                paddingX={2}>
                                            <Pressable onPress={() => {
                                                setShowModal2(true);
                                            }}>
                                                <Ionicons name="ios-checkmark-circle" size={36} color="#333333"/>
                                            </Pressable>
                                            <Pressable onPress={() => {
                                                setShowModal3(true);
                                            }}>
                                                <Entypo name="circle-with-cross" size={36} color="#DB0012"/>
                                            </Pressable>
                                        </HStack>
                                    </HStack>
                                )
                            })
                        }
                    </ScrollView>
                </VStack>
            </VStack>
        </NativeBaseProvider>
    );
}