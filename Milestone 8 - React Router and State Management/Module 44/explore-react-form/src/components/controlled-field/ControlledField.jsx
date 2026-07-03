import React, { useState } from 'react';

const ControlledField = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('secret');
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, pass)

        if (pass.length < 6) {
            setError('Password must be 6 character or longer needed')
        } else {
            setError('');
        }
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handlePasswordOnChange = (e) => {
        console.log(e.target.value);
        setPass(e.target.value);

        if(pass.length < 6) {
            setError('Password must be 6 character or longer')
        } else {
            setError('');
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input onChange={handleNameChange} defaultValue={name} type="text" name="name" id="" placeholder='Name' />
                <input onChange={handleEmailChange} defaultValue={email} type="email" name="email" id="" placeholder='Email' required /> <br />
                <input onChange={handlePasswordOnChange} type="password" name="pass" id="" placeholder='Password' required defaultValue={pass} /> <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color: 'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ControlledField;