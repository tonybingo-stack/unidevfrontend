import React, { useState, useEffect } from 'react';
import { FaBolt } from 'react-icons/fa';
import Card from "./analyzecard";

const Finance = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to change the visibility after the component has mounted
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
  }, []);

  return (
    <>
      <div className={isVisible ? 'fade-in' : 'fade-out'}>
        <div className="flex flex-col items-between py-12">
          <div className="font-light w-3/5 text-3xl mb-12">Hello Erica, with a week until end of the month, the company is on a way to book sizable revenue</div>
          <div className="flex justify-between">
            <div className="basis-1/4 mr-4  flex justify-between flex-col">
              <div className="font-medium mb-20 text-lg">Finance</div>
              <div className="text-2xl font-light mb-12">With 4 new clients signed in last 3 weeks, there is a solid chance of reaching this milestone</div>
              <div className="flex items-start">
                <FaBolt className="text-zinc-400 w-4 h-4 mt-1 mr-2" />
                <div className="text-zinc-500 text-xs">From analysis of past financial data and current market conditions</div>
              </div>
            </div>
            <div className="basis-1/2 mr-4 bg-gradient-to-tr from-custompink to-custompurple text-customblue text-5xl items-end flex font-medium p-10">$142, 200</div>
            <Card isDataExist={true} backgroundcolor='bg-gradient-to-tr from-customredlight to-customgreenlight' percentage={31} shortText="Current Profit Margin" longDesc="With a healthy profit margin, that may end up a second best month ever" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Finance;

