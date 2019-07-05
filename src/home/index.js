import React, { useState } from 'react';

import Settings from '../settings'
import Sequence from '../sequence'
import './index.scss';


const Home = () => {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [count, setCount] = useState(0);
    const [fibNum, setFibNum] = useState([firstNumber, secondNumber]);
 
    let fibNumList = [firstNumber, secondNumber]
    const calcFibNum = (n) => {
        if (n >= fibNumList.length) {
            fibNumList[n] = calcFibNum(n - 2) + calcFibNum(n - 1)
        }

        return fibNumList[n]
    }
 
    const updateSettings = (firstNumber, secondNumber, count) => {
        setFirstNumber(parseInt(firstNumber))
        setSecondNumber(parseInt(secondNumber))

        const newCount = parseInt(count) - 1
        setCount(newCount)

        calcFibNum(newCount)
        setFibNum(fibNumList)
    }

    return (
        <div id={'home'}>
            <Settings updateSettings={updateSettings} />
            <Sequence fibNum={fibNum} />
        </div>
    )
}

export default Home;
