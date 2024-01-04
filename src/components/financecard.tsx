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

const FinanceCard = () => {
  const [data, setData] = useState<FinanceCardData[]>([]);
  const [dataArrived, setDataArrived] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);
  const bgColors: string[] = [
    `bg-gradient-to-tr from-custompink to-custompurple`,
    `bg-gradient-to-tr from-customcyan to-customsky`,
    `bg-gradient-to-tr from-customredlight to-customred`,
    `bg-gradient-to-tr from-custompurple to-customgreenlight`,
  ];

  useEffect(() => {
    const socket = io(SERVER_URL);

    // Connection established
    socket.on('connect', () => {
      console.log('Connected to server');
      setIsShow(true);
    });
    socket.emit('message', 'data-for-finance-card');
    // Receive messages from the server
    socket.on('message', (value) => {
      console.log(`Received message from server: ${value}`);
      const jsonData = JSON.parse(value);
      setData(jsonData);
      setDataArrived(true);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <AnimateHeight
        duration={500}
        height={isShow ? 'auto' : 0}
      >
        <div className={`flex gap-2`}>
          <Card isDataExist={dataArrived} backgroundcolor={bgColors[0]} percentage={dataArrived ? data[0].percent: 0} shortText={dataArrived ? data[0].shortText : ''} longDesc={dataArrived ? data[0].longDesc : ''} />
          <Card isDataExist={dataArrived} backgroundcolor={bgColors[1]} percentage={dataArrived ? data[1].percent: 0} shortText={dataArrived ? data[1].shortText : ''} longDesc={dataArrived ? data[1].longDesc : ''} />
          <Card isDataExist={dataArrived} backgroundcolor={bgColors[2]} percentage={dataArrived ? data[2].percent: 0} shortText={dataArrived ? data[2].shortText : ''} longDesc={dataArrived ? data[2].longDesc : ''} />
          <Card isDataExist={dataArrived} backgroundcolor={bgColors[3]} percentage={dataArrived ? data[3].percent: 0} shortText={dataArrived ? data[3].shortText : ''} longDesc={dataArrived ? data[3].longDesc : ''} />
        </div>
      </AnimateHeight>
    </>
  );
};

export default FinanceCard;

