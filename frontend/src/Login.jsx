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
        <div className="login-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        {...register("password", { required: "Password is required" })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>

                <button type="submit">Log In</button>
            </form>

            {/* Display the login message */}
            {message && <p>{message}</p>}
        </div>
    );
}

export default Login;
