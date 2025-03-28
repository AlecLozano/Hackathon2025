import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [message, setMessage] = useState(""); // State for login messages

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) {
            if (userData.password === data.password) {
                setMessage(`${userData.name}, you are successfully logged in!`);
            } else {
                setMessage("Email or Password is incorrect.");
            }
        } else {
            setMessage("Email or Password is incorrect.");
        }
    };

    return (
        <text>hi!</text>
    );
}

export default Login;
