import React from "react";
import {NativeBaseProvider, Box, VStack, Text, Button, Input, Link, HStack} from "native-base";
import {Keyboard, TouchableWithoutFeedback, View, StyleSheet, Image, Alert} from "react-native";

export default function Register({navigation}) {
    const DismissKeyboard = ({children}) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );
    return (
        <NativeBaseProvider>
            <DismissKeyboard>
                <View flex={1}>
                    <VStack alignItems="flex-start" justifyContent={"flex-end"} flex={1} paddingX={"15%"}>
                        <HStack alignItems="center" justifyContent={"center"}>
                            <Text fontSize={30} fontWeight={"bold"}>Registro</Text>
                            <Image
                                style={{
                                    width: 50,
                                    resizeMode: 'contain',
                                }}
                                source={require('../assets/img_1.png')}
                            />
                        </HStack>

                        <Text fontSize={15} fontWeight={"bold"}>Você está a alguns passos de criar sua conta no app Passeiacão, insira suas credenciais.</Text>
                        <View height={2} width={"40%"} backgroundColor={"#FF0000"} marginTop={10}></View>
                        <View height={"15%"}></View>
                    </VStack>
                    <VStack alignItems="center" justifyContent={"start"} flex={2}>
                        <View alignItems="center" justifyContent={"center"} width={"100%"}>

                            <Input borderRadius={30} placeholder={"e-mail"} fontSize={18} width={"80%"} backgroundColor={"#EBEBEB"} height={60} marginBottom={10}></Input>
                            <Input borderRadius={30} placeholder={"nome completo"} fontSize={18} width={"80%"} backgroundColor={"#EBEBEB"} height={60} marginBottom={10}></Input>
                            <Input borderRadius={30} type={"password"} placeholder={"senha"} fontSize={18} width={"80%"} backgroundColor={"#EBEBEB"} height={60} marginBottom={10}></Input>
                            <Input borderRadius={30} type={"password"} placeholder={"confirmar senha"} fontSize={18} width={"80%"} backgroundColor={"#EBEBEB"} height={60} marginBottom={10}></Input>

                            <Button width={"80%"}
                                    style={{
                                        backgroundColor: "#D9D9D9",
                                        borderRadius: 30,
                                        color: "#FF0000",
                                        height: 80,
                                        textAlign: "center",
                                    }}
                                    marginBottom={10} onPress={() =>
                                Alert.alert('Conta criada!', 'Conta criada com sucesso, prossiga com o Login.', [
                                    {text: 'OK', onPress: () => navigation.navigate('Login')},
                                ])}>
                                <Text color={"#FF0000CF"} fontSize={25} fontWeight={"bold"}>Criar Conta</Text>
                            </Button>
                        </View>

                        <View flex={1}>
                            <Text fontSize={15} color={"#FF0000CF"} onPress={() => navigation.navigate('Login')}>Já tem uma conta? Faça Login</Text>
                        </View>
                    </VStack>
                </View>
            </DismissKeyboard>
        </NativeBaseProvider>
    );
}