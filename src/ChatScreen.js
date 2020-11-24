import React,{useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

const ChatScreen = () => {
    const [input,setInput] = useState('');
    const [messages,setMessages] = useState([
        {
            name: 'Yến Phương',
            message: 'Tớ đi được nha cậu',
            image: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-0/p526x296/118344444_2744763992478549_7870695747139056362_o.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_ohc=nQsoNnJXdxgAX8rAAQo&_nc_ht=scontent.fhan2-3.fna&tp=6&oh=e03e0b49d286b9075bb468a8f97183c3&oe=5F758B18'
        },
        {
            name: 'Yến Phương',
            message: 'Bọn mình hẹn ở đâu vậy?',
            image: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-0/p526x296/118344444_2744763992478549_7870695747139056362_o.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_ohc=nQsoNnJXdxgAX8rAAQo&_nc_ht=scontent.fhan2-3.fna&tp=6&oh=e03e0b49d286b9075bb468a8f97183c3&oe=5F758B18'
        },
        {
            message: 'Tớ qua nhà c đón nhé!'
        }
    ])
    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages,{message:input}]);
        setInput('');
    }
    return (
        <div className='chatscreen'>
            <p className='chatscreen_time'>YOU MATCHED WITH YẾN PHƯƠNG ON 02/09/20</p>
            {
                messages.map(message => (
                    message.name ? (
                        <div className='chatscreen_message'>
                            <Avatar className='chatscreen_image' alt={message.name} src={message.image}></Avatar>
                            <p className="chatscreen_text">{message.message}</p>
                        </div>
                    ) : (
                        <div className='chatscreen_message'>
                            <p className="chatscreen_textuser">{message.message}</p>
                        </div>
                    )
                ))
            }
            <div >
                <form className='chatscreen_input'>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className='chatscreen_inputField' type='text' placeholder='Type a message' />
                    <button onClick={handleSend} className='chatscreen_sendbutton'>SEND</button>
                </form>
            </div>
        </div>
    );
}

export default ChatScreen;