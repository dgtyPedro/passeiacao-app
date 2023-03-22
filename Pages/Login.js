import React from "react";
import {NativeBaseProvider, Box, VStack, Text, Button, Input, Link} from "native-base";
import {Keyboard, TouchableWithoutFeedback, View, StyleSheet} from "react-native";

export default function Login({navigation}) {
    const DismissKeyboard = ({children}) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );

    return (
        <NativeBaseProvider>
            <DismissKeyboard>
                <View flex={1}>
                    <VStack alignItems="flex-start" justifyContent={"flex-end"} flex={4} paddingX={"15%"}>

                        <Text fontSize={30} fontWeight={"bold"}>Login</Text>
                        <Text fontSize={15} fontWeight={"bold"}>Enter your username and password
                            to login</Text>
                        <View height={2} width={"40%"} backgroundColor={"#FF0000"} marginTop={10}></View>
                        <View height={"15%"}></View>
                    </VStack>
                    <VStack alignItems="center" justifyContent={"start"} flex={5}
                            style={{
                                backgroundColor: "rgba(255, 0, 0, 0.59)",
                                borderRadius: "62px",
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                            }}>
                        <View flex={4} alignItems="center" justifyContent={"center"} width={"100%"}>

                            <Input borderRadius={30} placeholder={"Username"} fontSize={18} width={"80%"} backgroundColor={"#EBEBEB"} height={60} marginBottom={10}></Input>
                            <Input borderRadius={30} placeholder={"Password"} fontSize={18} width={"80%"} backgroundColor={"#EBEBEB"} height={60} marginBottom={10}></Input>

                            <Button width={"80%"}
                                    style={{
                                        backgroundColor: "#D9D9D9",
                                        borderRadius: "30px",
                                        color: "#FF0000",
                                        height: 80,
                                        textAlign: "center",
                                    }}
                                    marginBottom={10} onPress={() => navigation.navigate('Home')}>
                                <Text color={"black"} fontSize={25} fontWeight={"bold"}>Sign up</Text>
                            </Button>
                        </View>

                        <View flex={1}>
                            <Text fontSize={15} color={"white"} onPress={() => navigation.navigate('Register')}>Don't have an account? Register</Text>
                        </View>
                    </VStack>
                </View>
            </DismissKeyboard>
        </NativeBaseProvider>
    );
}