// inside src/Login.jsx

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import HomePage from "./HomePage.jsx";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    //const [message, setMessage] = useState(""); // State for login messages
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track successful login

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) { // getItem can return actual value or null
            if (userData.password === data.password) {
                console.log(userData.name + " You Are Successfully Logged In");
                setIsLoggedIn(true);
            } else {
                console.log("Email or Password is not matching with our record");
            }
        } else {
            console.log("Email or Password is not matching with our record");
        }
    };

    if (isLoggedIn) {
        return <HomePage />; // Show Dashboard if logged in
    }

    return (
        <>
            <p className="title">Login Form</p>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                <input type="password" {...register("password")} />
                <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
            </form>
        </>
    );
}
export default Login;
