import React from "react";

export const Login = ({
    handler,
    nameSetter,
    emailSetter,
    passwordSetter,
    boolSetter,
    bool,
}) => {
    return (
        <div className="Login">
            <form onSubmit={handler}>
                <input
                    type="text"
                    placeholder="username"
                    onChange={(event) => nameSetter(event.target.value)}
                />
                {!bool && (
                    <input
                        type="text"
                        placeholder="email"
                        onChange={(event) => emailSetter(event.target.value)}
                    />
                )}
                <input
                    type="text"
                    placeholder="password"
                    onChange={(event) => passwordSetter(event.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <button onClick={() => boolSetter(!bool)}>Log in or sign up</button>
        </div>
    );
};

export default Login;
