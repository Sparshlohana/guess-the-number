

import React, { useEffect } from 'react';


const Timer = ({ timer, remainingTime, setRemainingTime, setTimer, setLevel, timerDurationTitle }) => {

    useEffect(() => {
        if (timer && remainingTime > 0) {
            const timerId = setTimeout(() => {
                // Your timer logic here
                const newRemainingTime = remainingTime - 1000; // Subtract 1 second (1000 milliseconds)
                setRemainingTime(newRemainingTime);

                if (newRemainingTime === 0) {
                    console.log('Timer completed!');
                    setTimer(null); // Automatically stop the timer when it reaches 0
                    setLevel((prevLevel) => prevLevel + 1);
                }
            }, 1000); // Update every 1 second (1000 milliseconds)

            return () => {
                clearTimeout(timerId);
                console.log('Timer cleared!');
            };
        }
    }, [timer, remainingTime]);


    return (
        <div className='text-white ml-[300px]'>
            <p className='font-semibold text-xl'>{timerDurationTitle} {remainingTime / 1000} seconds</p>
        </div>
    );
};

export default Timer;
