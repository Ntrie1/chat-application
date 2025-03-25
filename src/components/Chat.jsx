import React, { useEffect, useState } from 'react'
import { addDoc, collection, serverTimestamp, onSnapshot, query, where } from 'firebase/firestore'
import { auth, db } from '../firebase-config';
import '../styles/Chat.css';

export default function Chat(props) {
    const { room } = props;
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const messagesRef = collection(db, 'messages');
    

    useEffect(() => {
        const queryMessages = query(messagesRef, where("room", "==", room));
        
        onSnapshot(queryMessages, (snapshot) => {
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id});

            });
            setMessages(messages);
        });
    }, [])

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        if (newMessage === '') return;

        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room
        });

        setNewMessage('');

    }

    return (
        <div className='chat-app'>
            <div>{messages.map((message) => <h1>{message.text}</h1> )}</div>
            <form className='new-message-form' onSubmit={handleSubmitForm}>
                <input
                    className='new-message-input'
                    placeholder='Type your message here...'
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                />
                <button type='submit' className='send-button'>
                    Send
                </button>
            </form>
        </div>
    )
}
