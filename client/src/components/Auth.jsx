import React, { useState, useEffect, useContext } from "react";
import {
    Box,
    Button,
    HStack,
    Text,
    useToast
} from "@chakra-ui/react";

import { auth, provider } from "./firebase"
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import Store from "../context/myContext";

const Auth = ({ onLoginStatusChange }) => {
    const { data, setData, setEmail, gData, setgData } = useContext(Store)
    const toast = useToast();

    const handleGoogleLogin = async () => {
        if (!data) {
            // If user is already logged in, log them out
            await signOut(auth);
            toast({
                title: 'SignOut',
                description: "SignOut Successfull.",
                status: "warning",
                duration: 5000,
                isClosable: true,
            });
        } else {
            // If user is not logged in, show Google login popup
            signInWithPopup(auth, provider).then((data) => {
                setgData(data.user.displayName);
                setEmail(data.user.email);

                toast({
                    title: 'SignIn',
                    description: "SignIn Successfull.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
                onLoginStatusChange(true); // Notify parent component of login status change
            });
        }
        setData(!data);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setgData(user.displayName);
                setEmail(user.email);
                setData(false);
                onLoginStatusChange(true); // Notify parent component of login status change
            } else {
                setgData("");
                setData(true);
                onLoginStatusChange(false); // Notify parent component of login status change
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <Box mt={100} >
            <HStack ml={1100}>
                <Button variant="solid" colorScheme="green" onClick={handleGoogleLogin}>
                    {data ? "Login" : "Logout"}
                </Button>

                {!data && (
                    <Text fontSize="xl" fontWeight="bold" color="blue.500" ml={4}>
                        {gData}
                    </Text>
                )}
            </HStack>

        </Box>
    );
};

export default Auth;
