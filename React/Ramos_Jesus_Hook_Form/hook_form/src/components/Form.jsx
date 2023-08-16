import React, { useState } from "react";

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const createUser = (event) => {
        event.preventDefault();

        const newUser = { firstName, lastName, email, password, confirmPass };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPass("");
    }
    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    }
    const handleLastName = (event) => {
        setLastName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmPass = (event) => {
        setConfirmPass(event.target.value)
    }
    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" value={firstName} onChange={handleFirstName} />
                    {
                        firstName.length < 2 && firstName.length > 0 ?
                            <p>First Name must be at least 2 characters</p> :
                            null
                    }
                </div>

                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" value={lastName} onChange={handleLastName} />
                    {
                        lastName.length < 2 && lastName.length > 0 ?
                            <p>Last Name must be at least 2 characters</p> :
                            null
                    }
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" value={email} onChange={handleEmail} />
                    {
                        email.length < 2 && email.length > 0 ?
                            <p>Email must be at least 2 characters</p> :
                            null
                    }
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" value={password} onChange={handlePassword} />
                    {
                        password.length < 8 && password.length > 0 ?
                            <p>Password must be at least 8 characters</p> :
                            null
                    }
                </div>

                <div>
                    <label htmlFor="confirmPass">Confirm Password:</label>
                    <input type="text" value={confirmPass} onChange={handleConfirmPass} />
                    {
                        confirmPass !== password && confirmPass.length > 0 ?
                            <p>Passwords do not match</p> :
                            null
                    }
                </div>

                <button>Add User</button>
            </form>
            <div>
                <h1>Your Form Data</h1>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPass}</p>
            </div>
        </div>
    )
}

export default Form