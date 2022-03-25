import "./App.css";
import { useState } from "react";
import { Login } from "./pages/Login.jsx";
import { Home } from "./pages/Home.jsx";
import { UserSettings } from "./pages/UserSettings.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [user, setUser] = useState();

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Login user={user} setUser={setUser} />}
                />
                <Route
                    path="/home"
                    element={<Home user={user} setUser={setUser} />}
                />
                <Route
                    path="/user"
                    element={<UserSettings user={user} setUser={setUser} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
