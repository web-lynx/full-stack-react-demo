import React, { useState } from "react";
import { updatePass } from "../utils";
import { Navbar } from "../components/Navbar";
import { Navigate } from "react-router-dom";

export const UserSettings = ({ user }) => {
    const [newPass, setNewPass] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        updatePass({ newPass });
    };

    return (
        <>
            {!user && <Navigate to="/" />}
            <Navbar />
            <div id="settings-container">
                <form
                    id="user-settings"
                    onSubmit={(e) => {
                        submitHandler();
                    }}
                >
                    <input
                        type="password"
                        placeholder="password"
                        onChange={(e) => setNewPass(e.target.value)}
                    />
                </form>
            </div>
        </>
    );
};
