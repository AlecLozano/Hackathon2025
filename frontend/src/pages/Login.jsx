import React, { useState } from "react";
import { Input, Box, VStack, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

function Login() {
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
              initialValues={{username: "", password: "" }}
              validate={(values) => {
                  const errors = {};
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
                          <Text>Login</Text>
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

                          <Text>Don't have an account?</Text>
                          <Button
                              colorScheme="teal"
                              variant="link"
                              onClick={() => {
                                  navigate("/register");
                              }}
                          >
                              Register
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

export default Login;
