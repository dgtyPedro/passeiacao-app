import React from "react";
import {NativeBaseProvider, Box, VStack, Text, Button, Input, Link} from "native-base";

export default function Home() {
    return (
        <NativeBaseProvider>
            <VStack alignItems="center" justifyContent={"center"} flex={1}>
                <Text>Hello world</Text>
            </VStack>
        </NativeBaseProvider>
    );
}