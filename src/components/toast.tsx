// Toast.js
import React, { useState, useEffect } from 'react'; 
import { AiOutlineExpandAlt } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa";

const Toast = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set a timeout to change the visibility after the component has mounted
        const timeoutId = setTimeout(() => {
        setIsVisible(true);
        }, 2000); // Adjust the delay as needed

        return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
    }, []);

    return (
        <>
            <div className={isVisible ? 'fade-in' : 'fade-out'}>
                <div className='flex flex-col justify-between rounded-xl shadow-2xl fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white h-80 w-1/3'>
                    <div className='flex items-start pr-4'>
                        <div className='bg-no-repeat bg-center bg-[url("./assets/back.svg")] w-full h-24'></div>
                        <div className='rounded-[4px] border border-2 border-gray-400 w-5 h-5 mt-4'>
                            <AiOutlineExpandAlt className='text-gray-500' />
                        </div>
                    </div>
                    <div className='p-10 text-start text-3xl'>What would you like to know related to the revenue estimate?</div>
                    <div className='px-10 flex justify-between'>
                        <div className='flex items-center'>
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
