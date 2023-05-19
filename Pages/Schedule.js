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
import {FontAwesome} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';

export default function Schedule({navigation}) {

    const [showModal, setShowModal] = useState(false);

    const [showModal2, setShowModal2] = useState(false);

    const [showModal3, setShowModal3] = useState(false);

    const [showModal4, setShowModal4] = useState(false);

    const [dates, setDates] = useState(null);

    const horas = [
        '00:00', '00:15', '00:30', '00:45', '01:00', '01:15', '01:30', '01:45', '02:00', '02:15', '02:30', '02:45',
        '03:00', '03:15', '03:30', '03:45', '04:00', '04:15', '04:30', '04:45', '05:00', '05:15', '05:30', '05:45',
        '06:00', '06:15', '06:30', '06:45', '07:00', '07:15', '07:30', '07:45', '08:00', '08:15', '08:30', '08:45',
        '09:00', '09:15', '09:30', '09:45', '10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30', '11:45',
        '12:00', '12:15', '12:30', '12:45', '13:00', '13:15', '13:30', '13:45', '14:00', '14:15', '14:30', '14:45',
        '15:00', '15:15', '15:30', '15:45', '16:00', '16:15', '16:30', '16:45', '17:00', '17:15', '17:30', '17:45',
        '18:00', '18:15', '18:30', '18:45', '19:00', '19:15', '19:30', '19:45', '20:00', '20:15', '20:30', '20:45',
        '21:00', '21:15', '21:30', '21:45', '22:00', '22:15', '22:30', '22:45', '23:00', '23:15', '23:30', '23:45'];

    useEffect(() => {
        const newDate = [];
        const start = new Date();
        const end = new Date(new Date().setMonth(new Date().getMonth() + 1));
        var day = start;
        while (day <= end) {
            newDate.push({
                month: (day.getMonth() + 1).toString().length === 1 ? `0${day.getMonth() + 1}` : day.getMonth() + 1,
                day: (day.getDate() + 1).toString().length === 1 ? `0${day.getDate() + 1}` : day.getDate() + 1,
            })
            var newDay = day.setDate(day.getDate() + 1);
            day = new Date(newDay)
        }
        setDates(newDate)
    }, [])

    return (
        <NativeBaseProvider safeArea background={"white"}>
            <Modal isOpen={showModal2} onClose={() => setShowModal2(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton/>
                    <Modal.Header>Agendar passeio com Pedro Passeador</Modal.Header>
                    <Modal.Body>
                        <Link href={'https://wa.me/5511980666371'}>
                            <Text>Telefone: 11 986341150</Text>
                        </Link>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                setShowModal2(false);
                            }}>
                                Cancelar
                            </Button>
                            <Button onPress={() => {
                                navigation.navigate('ClientCalendar')
                            }}
                                    background={"#333333"}
                            >
                                Mandar Convite
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
            <VStack alignItems="center" justifyContent={"center"} flex={1} safeArea background={"white"}>
                <HStack flex={1} width={"100%"} alignItems={"center"} justifyContent={"space-between"} paddingX={5}
                        style={{borderBottomWidth: 1, borderBottomColor: '#FF0000', backgroundColor: '#FF0000'}}>
                    <Text bold onPress={() => navigation.goBack()} color={"white"}>Voltar</Text>
                    <Select minWidth={"40%"} placeholderTextColor={'white'} accessibilityLabel="Data" placeholder="Data"
                            borderRadius={30} color={'white'}>
                        {dates?.map((date, index) => {
                            return (
                                <Select.Item key={index} color={'white'} label={`${date.day}/${date.month}`}
                                             value={`${date.day}/${date.month}`}/>
                            )
                        })}
                    </Select>
                    <Select minWidth={"40%"} color={'white'} placeholderTextColor={'white'} accessibilityLabel="Horário"
                            placeholder="Horário" borderRadius={30}>
                        {horas?.map((hora, index) => {
                            return (
                                <Select.Item key={index} color={'white'} label={hora} value={hora}/>
                            )
                        })}
                    </Select>
                </HStack>
                <VStack flex={12} width={"100%"}>
                    <ScrollView>
                        <Pressable onPress={() => setShowModal2(true)}>
                            <HStack width={"100%"} alignItems={"center"} justifyContent={"space-between"}
                                    paddingRight={5}
                                    paddingLeft={2}
                                    paddingY={2}

                                    style={{
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#FF0000',
                                        backgroundColor: 'white'
                                    }}>

                                <HStack style={{width: '80%'}} alignItems={"center"} space={3}>
                                    <FontAwesome name="user-circle" size={56} color="black"/>
                                    <Text style={{width: '100%', flexWrap: 'wrap'}}>Pedro Passeador</Text>
                                </HStack>
                            </HStack>
                        </Pressable>
                        <Pressable onPress={() => setShowModal2(true)}>
                            <HStack width={"100%"} alignItems={"center"} justifyContent={"space-between"}
                                    paddingRight={5}
                                    paddingLeft={2}
                                    paddingY={2}

                                    style={{
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#FF0000',
                                        backgroundColor: 'white'
                                    }}>

                                <HStack style={{width: '80%'}} alignItems={"center"} space={3}>
                                    <FontAwesome name="user-circle" size={56} color="black"/>
                                    <Text style={{width: '100%', flexWrap: 'wrap'}}>Felipe Murata</Text>
                                </HStack>
                            </HStack>
                        </Pressable>
                    </ScrollView>
                </VStack>
            </VStack>
        </NativeBaseProvider>
    );
}