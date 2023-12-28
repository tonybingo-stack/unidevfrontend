import React, { useState, useEffect } from 'react';
import AnimateHeight from 'react-animate-height';
import { SERVER_URL } from '../constants';
import Card from "./analyzecard";

interface FinanceCardData {
  percent: number;
  shortText: string;
  longDesc: string;
}

const FinanceCard: React.FC<{ isVisible: boolean }> = (props) => {
  const [data, setData] = useState<FinanceCardData[]>([]);
  const [dataArrived, setDataArrived] = useState<boolean>(false);
  const [bgColors, setBgColors] = useState<string[]>([]);

  useEffect(() => {
    let textStream: string = '';
    const f = async () => {
      const eventSource = new EventSource(`${SERVER_URL}/stream-text`);

      eventSource.onmessage = (event) => {
        const message = event.data;
        textStream += message;
      };

      eventSource.onerror = (error) => {
        console.error('EventSource failed:', error);
        eventSource.close();
      };

      await sleep(3000);
      try {
        const jsonData = JSON.parse(textStream);
        setData(jsonData);
        setDataArrived(props.isVisible);
        setBgColors([
          `bg-gradient-to-tr from-custompink to-custompurple`,
          `bg-gradient-to-tr from-customcyan to-customsky`,
          `bg-gradient-to-tr from-customredlight to-customred`,
          `bg-gradient-to-tr from-custompurple to-customgreenlight`,
        ]);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };

    f();
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

