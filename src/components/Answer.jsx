import React, { useState, useEffect } from 'react';

const Answer = ({ initialRandomNumber, level, title }) => {

    const [randomNumber, setRandomNumber] = useState(initialRandomNumber);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleShowAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    useEffect(() => {
        setRandomNumber(initialRandomNumber);
    }, []);

    return (
        <div className="h-[20vh] w-full flex justify-between select-none" >
            <div>
                <p className='text-white text-2xl font-semibold underline'>Level {level} - {title} </p>
            </div>
            <div className="relative flex flex-col card text-white cursor-pointer w-[150px] h-[150px] justify-center items-center rounded-full" onClick={handleShowAnswer}>
                {!showAnswer && <p className='text-center text-xl font-semibold'>Answer 🫢</p>}
                <p className={`absolute ${!showAnswer && 'hidden'} z-0 text-xl font-semibold`}>{randomNumber}</p>
            </div>
        </div>
    );
};

export default Answer;
