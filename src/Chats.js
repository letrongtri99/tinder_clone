import './Chats.css';
import Chat from './Chat';
import React from 'react';

const Chats = () => {
    return (
        <div className="chats">
            <Chat
                name="Yến Phương"
                message = "Cậu đi chơi ko?"
                timestamp="5 phút trước"
                profilePic="https://instagram.fhan2-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/116911055_372259877510142_7604043623657976863_n.jpg?_nc_ht=instagram.fhan2-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=v7p_BBZuFI8AX9kbC2Z&oh=99fd4a8abccb4887928176dbc3385fdf&oe=5F75ADC5"
            >
            </Chat>
        </div>
    );
}

export default Chats;