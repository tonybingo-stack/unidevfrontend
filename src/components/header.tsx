import React, { useState, useEffect } from 'react';
import AudioPlayer from './audioplayer';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to change the visibility after the component has mounted
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
  }, []);


  return (
    <>
      <div className={isVisible ? 'fade-in' : 'fade-out'}>
        <div className="py-8">
          <div className="flex items-end">
            <div className="flex-shrink-0">
              <p className="font-medium font-sans text-5xl">Org, Inc.</p>
            </div>
            <div className="flex-grow text-center">
              <p className="text-lg font-semibold text-zinc-500 text-base">Thursday, September 19, 2023</p>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-b-2 flex items-center py-6 text-lg">
          <p className="mr-4 text-fuchsia-600">Summary</p>
          <p>Finance</p>
          <p className="flex w-full justify-end"></p>
          <div className="">
            <div className="flex justify-between">
              {/* <input
                type="text"
                placeholder="Ask me anything..."
                className="bg-transparent outline-none text-base text-16"
              ></input> */}
              <AudioPlayer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

