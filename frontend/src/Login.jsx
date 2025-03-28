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
        <>
            <p className="title">Login Form</p>
            {message && <p style={{ color: message.includes("successfully") ? "green" : "red" }}>{message}</p>}
            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email", { required: true })} placeholder="Email" />
                {errors.email && <span style={{ color: "red" }}>*Email* is mandatory</span>}
                <input type="password" {...register("password", { required: true })} placeholder="Password" />
                <input type="submit" value="Login" style={{ backgroundColor: "#a1eafb" }} />
            </form>
        </>
    );
}
export default Login;
