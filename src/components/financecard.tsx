import React, { useState, useEffect } from 'react';
import AnimateHeight from 'react-animate-height';

import Card from "./analyzecard";

const FinanceCard: React.FC<{ isVisible: boolean }> = (props) => {

  return (
    <>
      <AnimateHeight
        duration={500}
        height={props.isVisible ? 'auto' : 0}
      >
        <div className={`flex gap-2`}>
          <Card backgroundcolor='bg-gradient-to-tr from-custom-cyan to-custom-sky' percentage={30} shortText="Improved RO1 on ad spend" longDesc="Media buying helped with these results, since it's an important way of attracting clients" />
          <Card backgroundcolor='bg-gradient-to-tr from-custom-pink to-custom-purple' percentage={50} shortText="More engagement in majority of campains" longDesc="Ads generated significantly more engagement" />
          <Card backgroundcolor='bg-gradient-to-tr from-custom-redlight to-custom-red' percentage={38} shortText="Surge in Website Traffic" longDesc="As a consequence, website visits skyrocketed, boosted by social media engagement" />
          <Card backgroundcolor='bg-gradient-to-tr from-custom-redlight to-custom-greenlight' percentage={42} shortText="Surge in Social Channel Traffic" longDesc="The Surge extended to social media, where engagement almost exactly followed website visits" />
        </div>
      </AnimateHeight>
    </>
  );
};

export default FinanceCard;

