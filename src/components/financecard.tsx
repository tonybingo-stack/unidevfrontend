import React, { useState, useEffect } from 'react';
import AnimateHeight from 'react-animate-height';
import { SERVER_URL } from '../constants';
import Card from "./analyzecard";
import io from 'socket.io-client';
interface FinanceCardData {
  percent: number;
  shortText: string;
  longDesc: string;
}

const FinanceCard: React.FC<{ isVisible: boolean }> = (props) => {
  const [data, setData] = useState<FinanceCardData[]>([]);
  const [dataArrived, setDataArrived] = useState<boolean>(false);
  const [bgColors, setBgColors] = useState<string[]>([
    `bg-gradient-to-tr from-custompink to-custompurple`,
    `bg-gradient-to-tr from-customcyan to-customsky`,
    `bg-gradient-to-tr from-customredlight to-customred`,
    `bg-gradient-to-tr from-custompurple to-customgreenlight`,
  ]);

  useEffect(() => {
    const socket = io(SERVER_URL);

    // Connection established
    socket.on('connect', () => {
      console.log('Connected to server');
    });
    socket.emit('message', 'data for finance card');
    // Receive messages from the server
    socket.on('message', (value) => {
      console.log(`Received message from server: ${value}`);
      const jsonData = JSON.parse(value);
      setData(jsonData);
    });

    const f = async () => {
      await sleep(2500);
      setDataArrived(props.isVisible);
    };

    f();

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, [props.isVisible]);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  return (
    <>
      <AnimateHeight
        duration={500}
        height={props.isVisible ? 'auto' : 0}
      >
        <div className={`flex gap-2`}>
          {
            data.map((card, index) => (
              <Card
                key={index}
                isDataExist={dataArrived}
                backgroundcolor={bgColors[index]}
                percentage={card.percent}
                shortText={card.shortText}
                longDesc={card.longDesc}
              />
            ))
          }
        </div>
      </AnimateHeight>
    </>
  );
};

export default FinanceCard;

