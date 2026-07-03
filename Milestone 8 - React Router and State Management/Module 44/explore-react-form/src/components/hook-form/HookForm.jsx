import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [pass, passOnChange] = useInputField('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Submitted!', name, email, pass);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={nameOnChange} defaultValue={name} name="name" id="" placeholder='Name' /> <br />
                <input type="email" onChange={emailOnChange}  name="email" id="" placeholder='Email'/>
                <br />
                <input type="password" onChange={passOnChange} name="pass" id="" placeholder='Password'/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;