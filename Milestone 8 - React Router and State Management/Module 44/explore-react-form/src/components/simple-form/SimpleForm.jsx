import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Your Name Here'/>
                <input type="email" name="email" id="" placeholder='Your Email Here'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;