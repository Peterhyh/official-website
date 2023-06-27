import { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                'http://localhost:3001/contact',
                JSON.stringify({
                    email: email.toUpperCase(),
                    name: name.toUpperCase(),
                    message: message.toUpperCase(),
                }),
                { headers: { "Content-Type": "application/json" } }
            )
                .then(res => {
                    console.log(res)
                    if (res.status === 200) {
                        setEmail('');
                        setName('');
                        setMessage('');
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='contact-form-container'>
            <form className='contact-form' onSubmit={handleSubmit}>
                <label htmlFor='email'>
                    E-mail
                </label>
                <input
                    name='email'
                    id='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor='name'>
                    Name
                </label>
                <input
                    name='name'
                    id='name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor='message'>
                    Message
                </label>
                <input
                    name='message'
                    id='message'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;