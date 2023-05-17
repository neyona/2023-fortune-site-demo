import React, { Component } from 'react';
import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';
import { getFortunes } from '../datacalls/getFortunes';


const OneFortune = () => {

  const { data, status } = useQuery(
    ['fortunes', 'I fetched'],
    getFortunes,
    { retry: true }
  );
  // status can be 'loading', 'error', or 'success'
  let funFortunes = data;

  if (status === 'loading') {
    return <span className="span-fortune-match">, lemme get that fortune for you . . .</span>;
  } else if (status === 'error') {
    return <span className="span-fortune-match">, your fortune is unfortunately that you are fortunate enough not to need an aggressive fortune from me.</span>;
  } else if (status === 'success' && Array.isArray(funFortunes) == true) {
    const fortuneItems = funFortunes.map((fortune) => (
      <span key={fortune.title}>{fortune.fortune}</span>
    ));
    const randomId = Math.floor(Math.random() * fortuneItems.length);

    return (
      <>
        <span className="span-fortune-match">{fortuneItems[randomId]}</span>
      </>
    );
  } else if (status === 'success' && Array.isArray(funFortunes) == false) {
    return <span className="span-fortune-match">, ummmm, there are an array of fortune issues today. The main one is that I forgot where they are.</span>;
  } else {
    return <span className="span-fortune-match">, I only have an unspecified non-specific fortune for you. ALL YOUR FORTUNE IS MINE NOW!</span>;
  }
};

export default OneFortune;
