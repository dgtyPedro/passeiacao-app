import React from "react";
import {NativeBaseProvider, Box, VStack, Text, Button, Input, Link} from "native-base";
import {Keyboard, TouchableWithoutFeedback, View, StyleSheet} from "react-native";

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

                        <Text fontSize={30} fontWeight={"bold"}>Register</Text>
                        <Text fontSize={15} fontWeight={"bold"}>You are only a few step away,just provide some details below to register.</Text>
                        <View height={2} width={"40%"} backgroundColor={"#FF0000"} marginTop={10}></View>
                        <View height={"15%"}></View>
                    </VStack>
                    <VStack alignItems="center" justifyContent={"start"} flex={2}>
                        <View alignItems="center" justifyContent={"center"} width={"100%"}>

                            <Input borderRadius={30} placeholder={"Email"} fontSize={18} width={"80%"} backgroundColor={"#EBEBEB"} height={60} marginBottom={10}></Input>
                            <Input borderRadius={30} placeholder={"Username"} fontSize={18} width={"80%"} backgroundColor={"#EBEBEB"} height={60} marginBottom={10}></Input>
                            <Input borderRadius={30} placeholder={"Password"} fontSize={18} width={"80%"} backgroundColor={"#EBEBEB"} height={60} marginBottom={10}></Input>
                            <Input borderRadius={30} placeholder={"Confirm Password"} fontSize={18} width={"80%"} backgroundColor={"#EBEBEB"} height={60} marginBottom={10}></Input>

                            <Button width={"80%"}
                                    style={{
                                        backgroundColor: "#D9D9D9",
                                        borderRadius: "30px",
                                        color: "#FF0000",
                                        height: 80,
                                        textAlign: "center",
                                    }}
                                    marginBottom={10} onPress={() => navigation.navigate('Home')}>
                                <Text color={"#FF0000CF"} fontSize={25} fontWeight={"bold"}>Register</Text>
                            </Button>
                        </View>

                        <View flex={1}>
                            <Text fontSize={15} color={"#FF0000CF"} onPress={() => navigation.navigate('Login')}>Don't have an account? Register</Text>
                        </View>
                    </VStack>
                </View>
            </DismissKeyboard>
        </NativeBaseProvider>
    );
}