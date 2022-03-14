import "./App.css";
import { useState } from "react";
import { Login } from "./components/Login.jsx";

function App() {
    const [user, setUser] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [bool, setBool] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        setUser({ username: username, email: email, password: password });
    };

    return (
        <div className="App">
            {user ? (
                <h1>{user.username}</h1>
            ) : (
                <h1>Please enter your username</h1>
            )}
            <Login
                handler={submitHandler}
                nameSetter={setUsername}
                emailSetter={setEmail}
                passwordSetter={setPassword}
                boolSetter={setBool}
                bool={bool}
            />
        </div>
    );
}

export default App;
