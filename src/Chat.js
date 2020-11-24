import React from 'react';
import './Chat.css';
import {Link , useHistory} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

const Chat = ({name, message, timestamp, profilePic}) => {
    return (
        <Link to={`/chat/${name}`}>
             <div className='chat'>
                <Avatar className="chat_image" alt={name} src={profilePic} ></Avatar>
                <div className="chat_details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className="chat_time">{timestamp}</p>
            </div>
        </Link>
    );
}

export default Chat;