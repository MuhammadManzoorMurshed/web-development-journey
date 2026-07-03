import React, { useRef } from 'react';

const UncontrolledField = () => {
    const emailRef = useRef('');
    const passRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const pass = passRef.current.value;

        console.log(email);
        console.log(pass);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input ref={emailRef} type="email" name="email" id="" placeholder='Email' /> <br />
                <input ref={passRef} type="password" name="pass" id="" /> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;