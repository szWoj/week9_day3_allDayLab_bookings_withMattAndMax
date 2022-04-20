import React, {useState} from 'react';

const BookingForm = ({dataPost})=>
{
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');


    const handleName = (event)=>
    {
        setNameInput(event.target.value);
    }

    const handleEmail = (event)=>
    {
        setEmailInput(event.target.value)
    }

    const handleFormSubmit = (event)=>
    {
        event.preventDefault();
        const data = {
            name: nameInput,
            email: emailInput,
            check_in: false
        }
        dataPost(data)
        setNameInput('')
        setEmailInput('')
    }
    


    return (

        <form onSubmit={handleFormSubmit}>
            <label htmlFor='name-input'>Input full name</label>
            <input type='text' id='name-input' value={nameInput} onChange={handleName} required></input>
            <label htmlFor='email-input'>Input email</label>
            <input type='text' id='email-input' value={emailInput} onChange={handleEmail} required></input>
            <button type='submit'>Save</button>
        </form>
    )
}

export default BookingForm ;