import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Settings from '../settings'
import Sequence from '../sequence'
import './index.scss';


const Home = () => {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [count, setCount] = useState(0);
    
    const updateSettings = (firstNumber, secondNumber, count) => {
        setFirstNumber(parseInt(firstNumber))
        setSecondNumber(parseInt(secondNumber))
        setCount(parseInt(count) - 1)
    }

    return (
        <div id={'home'}>
            <Settings updateSettings={updateSettings} />
            <Sequence 
                firstNumber={firstNumber} 
                secondNumber={secondNumber} 
                count={count} 
            />
       </div>
    )
}

export default Home;
