import React, { useState } from "react";
import { updatePass, deleteUser } from "../utils";
import { Navbar } from "../components/Navbar";
import { Navigate } from "react-router-dom";

export const UserSettings = ({ user, setUser }) => {
    const [newPass, setNewPass] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        updatePass(user, newPass);
    };

    return (
        <>
            {!user && <Navigate to="/" />}
            <Navbar />
            <div id="settings-container">
                <h2>Welcome, {user}.</h2>
                <p>Would you like to change your password?</p>
                <form id="user-settings" onSubmit={submitHandler}>
                    <input
                        type="password"
                        placeholder="password"
                        onChange={(e) => setNewPass(e.target.value)}
                    />
                    <button type="submit">Change Password</button>
                </form>
                <div id="settings-delete-account">
                    <h2>Delete My Account</h2>
                    <p>
                        Are you <em>sure</em> you want to delete your account?
                        This action cannot be undone!
                    </p>
                    <button onClick={() => deleteUser(user)}>
                        Yes, I'm sure
                    </button>
                </div>
            </div>
        </>
    );
};
