import React, { useState } from "react";
import { Input, Box, VStack, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

function Register() {
    const navigate = useNavigate();

    return (
        <VStack>
            <Box className="Box" marginTop="30vh">
                <Box
                    className="In-Box"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Formik
                        initialValues={{ email: "", username: "", password: "" }}
                        validate={(values) => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = "Required";
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = "Invalid email address";
                            }

                            if (!values.password) {
                                errors.password = "Required";
                            }

                            if (!values.username) {
                                errors.username = "Required";
                            }

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log("Form data:", values);
                            setSubmitting(false);
                        }}
                    >
                        {(props) => (
                            <form className="login" onSubmit={props.handleSubmit}>
                                <VStack>
                                    <Text>Register</Text>
                                    <Input
                                        type="text"
                                        name="username"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.username}
                                        placeholder="Username"
                                        marginTop="1vh"
                                        borderColor="#000000"
                                    />
                                    {props.errors.username && (
                                        <Text color="red">{props.errors.username}</Text>
                                    )}
                                    
                                    <Input
                                        type="email"
                                        name="email"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.email}
                                        placeholder="Email"
                                        marginTop="1vh"
                                        borderColor="#000000"
                                    />
                                    {props.errors.email && (
                                        <Text color="red">{props.errors.email}</Text>
                                    )}
                                    
                                    <Input
                                        type="password"
                                        name="password"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.password}
                                        placeholder="Password"
                                        marginTop="1vh"
                                        borderColor="#000000"
                                    />
                                    {props.errors.password && (
                                        <Text color="red">{props.errors.password}</Text>
                                    )}

                                    <Button marginTop="5px" marginBottom="25px" type="submit">
                                        Submit
                                    </Button>

                                    <Text>Have an account?</Text>
                                    <Button
                                        colorScheme="teal"
                                        variant="link"
                                        onClick={() => {
                                            navigate("/");
                                        }}
                                    >
                                        Login
                                    </Button>
                                </VStack>
                            </form>
                        )}
                    </Formik>
                </Box>
            </Box>
        </VStack>
    );
}

export default Register;
