import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import Login from "./Login"; // Import Login Component

function App() {
    const [registered, setRegistered] = useState(false); // State to track registration
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (data) => {
        localStorage.setItem(data.email, JSON.stringify(data)); // Store user details
        console.log("User Registered:", data);
        setRegistered(true); // Switch to Login page

        
    };

    return (
        <>
            {registered ? (
                <Login />
            ) : (
                <>
                    <p className="title">Registration Form</p>
                    <form className="App" onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("name", { required: true })} placeholder="Name" />
                        <input type="email" {...register("email", { required: true })} placeholder="Email" />
                        {errors.email && <span style={{ color: "red" }}>*Email* is mandatory</span>}
                        <input type="password" {...register("password", { required: true })} placeholder="Password" />
                        <input type="submit" value="Register" style={{ backgroundColor: "#a1eafb" }} />
                    </form>
                </>
            )}
        </>
    );
}
export default App;
