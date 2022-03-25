import React, { useState, useEffect } from "react";
import { createUser, login } from "../utils";
import { Navigate } from "react-router-dom";
import { tokenLogin } from "../utils";

export const Login = ({ user, setUser }) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [bool, setBool] = useState(false);

    useEffect(() => {
        if (localStorage.key("myToken")) {
            tokenLogin(setUser);
        }
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        setUser({ username, email, password });
        if (bool) {
            login(username, password, setUser);
        } else if (email && email.includes("@")) {
            createUser(username, email, password, setUser);
        }
    };

    return (
        <div className="Login">
            {user && <Navigate to="/home" />}
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="username"
                    onChange={(event) => setUsername(event.target.value)}
                />
                {!bool && (
                    <input
                        type="email"
                        placeholder="email"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                )}
                <input
                    type="password"
                    placeholder="password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">{!bool ? "Sign Up" : "Log In"}</button>
            </form>
            <button onClick={() => setBool(!bool)}>
                {!bool
                    ? "Already have an account? Click here"
                    : "Don't have an account? Click here"}
            </button>
        </div>
    );
};
