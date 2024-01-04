// Toast.js
import React, { useState, useEffect } from 'react';
import { AiOutlineExpandAlt } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa";

const Toast: React.FC<{ setFinanceCardVisible: any }> = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const [displayedText, setDisplayedText] = useState<JSX.Element[]>([]);

    const textStream = [
        'What would you like to know related to the revenue estimate?',
        `Certainly, here’s some reasoning: \n\n1. there are 4 new clients that combined could bring additional $20,000 by the end of the year.`,
        `2. There is a good chance of Telus signing the new $40,000 contract, first payment tranche is scheduled at September 25th. \n\n3. There is a good engagement on the last marketing campaign.`,
        `Updating the Dashboard...`,
        `Done. \n\nShutting down...`,
    ];

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const typeText = async () => {
        setIsVisible(true);
        await sleep(1000);

        for (let index = 0; index <= textStream[0].length; index++) {
            const renderedText = textStream[0].slice(0, index).split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ));
            setDisplayedText(renderedText);
            await sleep(20);
        }

        await sleep(2000);
        for (let index = 0; index <= textStream[1].length; index++) {
            const renderedText = textStream[1].slice(0, index).split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ));
            setDisplayedText(renderedText);
            await sleep(20);
        }
        await sleep(2000);

        for (let index = 0; index <= textStream[2].length; index++) {
            const renderedText = textStream[2].slice(0, index).split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ));
            setDisplayedText(renderedText);
            await sleep(20);
        }
        await sleep(2000);

        for (let index = 0; index <= textStream[3].length; index++) {
            const renderedText = textStream[3].slice(0, index).split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ));
            setDisplayedText(renderedText);
            await sleep(20);
        }
        await sleep(2000);
        // here update dashboard
        props.setFinanceCardVisible(true);

        await sleep(1000);
        for (let index = 0; index <= textStream[4].length; index++) {
            const renderedText = textStream[4].slice(0, index).split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ));
            setDisplayedText(renderedText);
            await sleep(20);
        }

        await sleep(500);
        setIsVisible(false);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            typeText();
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <div className={isVisible ? 'fade-in' : 'fade-out'}>
                <div className='fade-up-down-element bg-no-repeat bg-center bg-top bg-[url("./assets/back.svg")] flex flex-col justify-between rounded-xl shadow-2xl fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white h-80 w-1/3'>
                    <div className='flex items-start justify-end pr-4'>
                        <div className='rounded-[4px] border border-2 border-gray-400 w-5 h-5 mt-4'>
                            <AiOutlineExpandAlt className='text-gray-500' />
                        </div>
                    </div>
                    <div className='px-10 text-start text-3xl'>{displayedText}</div>
                    <div className='px-10 flex justify-between'>
                        <div className='flex items-center mb-6'>
                            <FaHistory className='mr-2' />
                            <div>History</div>
                        </div>
                        <div className='flex items-center mb-6'>
                            <div className='mr-2'>I want to type</div>
                            <FaKeyboard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Toast;
