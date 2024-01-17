import React, { useState, useEffect } from 'react';
import SendIcon from './Icons';
import { Bounce, ToastContainer, toast } from 'react-toastify';

const MainChat = ({ initialRandomNumber }) => {
    const [inputNumber, setInputNumber] = useState('');
    const [messages, setMessages] = useState([]);
    const [bgMusic, setBgMusic] = useState(null);
    const [winningMusic, setWinningMusic] = useState(new Audio('/winning-music2.mp3'));
    const [sendButtonSound, setSendButtonSound] = useState(new Audio('/sendBtn.mp3'));
    const [count, setCount] = useState(0);

    const success = () => toast.success(`🎉 Congratulations! You guessed in ${count + 1} attempts`, {
        position: "top-right",
    });


    useEffect(() => {
        setBgMusic(new Audio('/bg-music.mp3'));
        setSendButtonSound(new Audio('/sendBtn.mp3')); // Load send button sound
    }, []);

    const playBackgroundMusic = () => {
        if (bgMusic) {
            bgMusic.play();
        }
    };

    const playSendButtonSound = () => {
        if (sendButtonSound) {
            sendButtonSound.play();
        }
    };

    const handleSendMessage = () => {
        playBackgroundMusic();
        setCount((prevCount) => prevCount + 1);  // Increase count when a message is sent

        const userGuess = parseInt(inputNumber, 10);

        if (isNaN(userGuess)) {
            setMessages([...messages, { sender: 'system', text: 'Please enter a valid number.' }]);
        } else {
            let newMessages;
            if (userGuess > initialRandomNumber) {
                playSendButtonSound();
                newMessages = [...messages, { sender: 'user', text: `${userGuess}`, align: 'text-end' }, { sender: 'system', text: 'Please enter a smaller number.', align: '' }];
            } else if (userGuess < initialRandomNumber) {
                playSendButtonSound();
                newMessages = [...messages, { sender: 'user', text: `${userGuess}`, align: 'text-end' }, { sender: 'system', text: 'Please enter a larger number.', align: 'left' }];
            } else {
                newMessages = [...messages, { sender: 'user', text: `${userGuess}`, align: 'text-end' }, { sender: 'system', text: `Congratulations! You guessed the correct number.`, align: 'left' }];
                if (bgMusic) {
                    bgMusic.pause();
                    bgMusic.currentTime = 0;
                }
                winningMusic.play();
                success();
            }

            setMessages(newMessages);
            setInputNumber('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
            <div className="h-[65vh] w-full flex justify-start items-center text-white">
                <div className="card shadow-lg relative h-[500px] w-[450px] ml-56 rounded-xl">
                    <div className='mt-3'>
                        <h1 className='text-center text-2xl font-semibold underline capitalize'>Guess The Number</h1>
                    </div>
                    <div className="overflow-y-auto p-4 text-xl h-[400px]">
                        <p>Enter a number:</p>
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.align} `}>
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <div className="input-area flex items-center p-4 absolute bottom-0 w-full">
                        <input
                            type="number"
                            placeholder="Type your message..."
                            value={inputNumber}
                            onChange={(e) => setInputNumber(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="outline-none bg-transparent text-white w-full border border-white py-1 px-2 rounded"
                            max={1000}
                            min={0}
                        />

                        <SendIcon className="w-7 fill-white absolute right-5 cursor-pointer" onClick={() => handleSendMessage()} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainChat;
