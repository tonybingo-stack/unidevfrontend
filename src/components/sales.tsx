import React, { useState, useEffect } from 'react';
import { FaBolt } from 'react-icons/fa';
import Card from "./analyzecard";

const Sales: React.FC<{ myClass: string }> = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to change the visibility after the component has mounted
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 1500); // Adjust the delay as needed

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
  }, []);

  return (
    <>
      <div className={isVisible ? 'fade-in' : 'fade-out'}>
        <div className={`flex flex-col items-between py-12 ${props.myClass}`}>
          <div className="font-light w-3/5 text-3xl mb-12">Also, recent company changes show effect, the company is experiencing strong growth...</div>
          <div className="flex justify-between mb-12">
            <div className="basis-1/4 mr-4  flex justify-between flex-col">
              <div className="font-medium mb-20 text-lg">Sales</div>
              <div className="text-2xl font-light mb-12">There is sizable increase in number of clients, and at the same churn has decreased</div>
              <div className="flex items-start">
                <FaBolt className="text-zinc-400 w-4 h-4 mt-1 mr-2" />
                <div className="text-zinc-500 text-xs">From analysis of 10,430 messages</div>
              </div>
            </div>

            <div className="basis-1/2 mr-4 bg-gradient-to-tr from-customcyan to-customblue text-white font-medium w-full p-10">
              <div className="mb-16">
                <div className="justify-items-start">Number of Clients</div>
                <div className="flex justify-end text-5xl">88</div>
              </div>
              <div className="border-t-2 mb-12"></div>
              <div>
                <div className="justify-items-start">Chum</div>
                <div className="flex justify-end text-5xl">8%</div>
              </div>
            </div>

            <div className="basis-1/4 flex flex-col justify-between">
              <div className="flex flex-row mb-4 basis-2/5">
                <div className="basis-2/3 mr-2">
                  <div className="text-base font-light mb-8">AI Helped automate solid part of Salesforce client onboarding</div>
                  <div className="flex items-start">
                    <FaBolt className="text-zinc-300 w-4 h-4 mt-1 mr-1" />
                    <div className="text-zinc-500 text-xs">From analysis of 864 HubSport funnels</div>
                  </div>
                </div>
                <div className="basis-1/3 bg-customblue p-4 text-5xl text-white">
                  <div className="flex items-end justify-center ">
                    <p className="text-5xl font-medium">18</p>
                    <p className="text-3xl">%</p>
                  </div>
                </div>
              </div>
              <div className="border-t-2"></div>
              <div className="flex flex-row basis-2/5">
                <div className="basis-2/3 mr-2 flex items-end">
                  <div className="text-base font-light">Time to close a client decreased significantly from a month before</div>
                </div>
                <div className="basis-1/3 bg-customcyan p-4 text-5xl text-white w-full">
                  <div className="flex items-end justify-center ">
                    <p className="text-3xl font-medium">18.4</p>
                    <p className="text-xl">h</p>
                  </div>
                  <p className="text-xs">Was 22.4h</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Card isDataExist={true} backgroundcolor='bg-gradient-to-tr from-customcyan to-customsky' percentage={30} shortText="Improved RO1 on ad spend" longDesc="Media buying helped with these results, since it's an important way of attracting clients" />
            <Card isDataExist={true} backgroundcolor='bg-gradient-to-tr from-custompink to-custompurple' percentage={50} shortText="More engagement in majority of campains" longDesc="Ads generated significantly more engagement" />
            <Card isDataExist={true} backgroundcolor='bg-gradient-to-tr from-customredlight to-customred' percentage={38} shortText="Surge in Website Traffic" longDesc="As a consequence, website visits skyrocketed, boosted by social media engagement" />
            <Card isDataExist={true} backgroundcolor='bg-gradient-to-tr from-customredlight to-customgreenlight' percentage={42} shortText="Surge in Social Channel Traffic" longDesc="The Surge extended to social media, where engagement almost exactly followed website visits" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;

