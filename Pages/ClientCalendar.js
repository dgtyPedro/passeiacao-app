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
import {MaterialIcons} from '@expo/vector-icons';

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
            newDate.push({
                month: (day.getMonth() + 1).toString().length === 1 ? `0${day.getMonth() + 1}` : day.getMonth() + 1,
                day: (day.getDate() + 1).toString().length === 1 ? `0${day.getDate() + 1}` : day.getDate() + 1,
                hour: '22:30'
            })
            var newDay = day.setDate(day.getDate() + 1);
            day = new Date(newDay)
        }
        setDates(newDate)
    }, [])


    return (
        <NativeBaseProvider safeArea background={"white"}>
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
            <Modal isOpen={showModal3} onClose={() => setShowModal3(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton/>
                    <Modal.Header>O passeador ainda não aceitou seu convite...</Modal.Header>
                </Modal.Content>
            </Modal>
            <Modal isOpen={showModal4} onClose={() => setShowModal4(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton/>
                    <Modal.Header>Passeio confirmado! :)</Modal.Header>
                </Modal.Content>
            </Modal>
            <VStack alignItems="center" justifyContent={"center"} flex={1} safeArea background={"white"}>
                <HStack flex={1} width={"100%"} alignItems={"center"} justifyContent={"space-between"} paddingX={5}
                        style={{borderBottomWidth: 1, borderBottomColor: '#FF0000', backgroundColor: '#FF0000'}}>
                    <Text bold onPress={() => navigation.navigate('Home')} color={"white"}>Home</Text>
                </HStack>
                <VStack flex={12} width={"100%"}>
                    <ScrollView>
                        <HStack width={"100%"} alignItems={"center"} justifyContent={"space-between"}
                                paddingRight={5}
                                paddingLeft={2}
                                paddingY={2}
                                style={{borderBottomWidth: 1, borderBottomColor: '#FF0000', backgroundColor: 'white'}}>
                            <Pressable>
                                <HStack style={{width: '50%'}} alignItems={"center"} space={3}>
                                    <Text bold
                                          fontSize={"3xl"}>{`20/05`}</Text>
                                    <Text style={{width: '100%', flexWrap: 'wrap'}}>22:00
                                        ➡️ Passeio com Felipe Murata</Text>
                                </HStack>
                            </Pressable>
                            <HStack alignItems={"center"} borderRadius={20} paddingX={2}>
                                <Pressable onPress={() => {
                                    setShowModal4(true);
                                }}>
                                    <AntDesign name="like1" size={24} color="#FF0000"/>
                                </Pressable>
                            </HStack>
                        </HStack>
                        <HStack width={"100%"} alignItems={"center"} justifyContent={"space-between"}
                                paddingRight={5}
                                paddingLeft={2}
                                paddingY={2}
                                style={{borderBottomWidth: 1, borderBottomColor: '#FF0000', backgroundColor: 'white'}}>
                            <Pressable>
                                <HStack style={{width: '50%'}} alignItems={"center"} space={3}>
                                    <Text bold
                                          fontSize={"3xl"}>{`22/05`}</Text>
                                    <Text style={{width: '100%', flexWrap: 'wrap'}}>10:15
                                        ➡️ Passeio com Pedro Passeador</Text>
                                </HStack>
                            </Pressable>
                            <HStack alignItems={"center"} borderRadius={20} paddingX={2}>
                                <Pressable onPress={() => {
                                    setShowModal3(true);
                                }}>
                                    <MaterialIcons name="pending" size={24} color="#FF0000"/>
                                </Pressable>
                            </HStack>
                        </HStack>
                        {/*{*/}
                        {/*    dates?.map((date, index) => {*/}
                        {/*        if (index % 3 === 0) {*/}
                        {/*            return (*/}
                        {/*                <HStack width={"100%"} alignItems={"center"} justifyContent={"space-between"}*/}
                        {/*                        paddingRight={5}*/}
                        {/*                        paddingLeft={2}*/}
                        {/*                        paddingY={2}*/}
                        {/*                        key={index}*/}
                        {/*                        style={{borderBottomWidth: 1, borderBottomColor: '#FF0000', backgroundColor: 'white'}}>*/}
                        {/*                    <Pressable onPress={() => {*/}
                        {/*                        setShowModal(true);*/}
                        {/*                    }}>*/}
                        {/*                        <HStack style={{width: '50%'}} alignItems={"center"} space={3}>*/}
                        {/*                            <Text bold*/}
                        {/*                                  fontSize={"3xl"}>{`${date.day}/${date.month}`}</Text>*/}
                        {/*                            <Text style={{width: '100%', flexWrap: 'wrap'}}>22:00*/}
                        {/*                                ➡️ Passeio com Felipe Murata</Text>*/}
                        {/*                        </HStack>*/}
                        {/*                    </Pressable>*/}
                        {/*                        <HStack alignItems={"center"} borderRadius={20} paddingX={2}>*/}
                        {/*                            <Pressable onPress={() => {*/}
                        {/*                                setShowModal3(true);*/}
                        {/*                            }}>*/}
                        {/*                                <MaterialIcons name="pending" size={24} color="#FF0000" />*/}
                        {/*                            </Pressable>*/}
                        {/*                        </HStack>*/}
                        {/*                </HStack>*/}
                        {/*            )*/}
                        {/*        }*/}
                        {/*        return (*/}
                        {/*            <HStack width={"100%"} alignItems={"center"} justifyContent={"space-between"}*/}
                        {/*                    paddingRight={5}*/}
                        {/*                    paddingLeft={2}*/}
                        {/*                    paddingY={2}*/}
                        {/*                    key={index}*/}
                        {/*                    style={{borderBottomWidth: 1, borderBottomColor: '#FF0000', backgroundColor: 'white'}}>*/}
                        {/*                <Pressable onPress={() => {*/}
                        {/*                    setShowModal(true);*/}
                        {/*                }}>*/}
                        {/*                    <HStack style={{width: '50%'}} alignItems={"center"} space={3}>*/}
                        {/*                        <Text bold*/}
                        {/*                              fontSize={"3xl"}>{`${date.day}/${date.month}`}</Text>*/}
                        {/*                        <Text style={{width: '100%', flexWrap: 'wrap'}}>22:00 ➡️*/}
                        {/*                            Passeio com João222222222</Text>*/}
                        {/*                    </HStack>*/}
                        {/*                </Pressable>*/}
                        {/*                <HStack alignItems={"center"} borderRadius={20} paddingX={2}>*/}
                        {/*                    <Pressable onPress={() => {*/}
                        {/*                        setShowModal4(true);*/}
                        {/*                    }}>*/}
                        {/*                        <AntDesign name="like1" size={24} color="#FF0000"/>*/}
                        {/*                    </Pressable>*/}
                        {/*                </HStack>*/}
                        {/*            </HStack>*/}
                        {/*        )*/}
                        {/*    })*/}
                        {/*}*/}
                    </ScrollView>
                </VStack>
            </VStack>
        </NativeBaseProvider>
    );
}