import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './index.scss';

const Sequence = ({firstNumber, secondNumber, count}) => {
    let fibNum = [firstNumber, secondNumber]

    const calcFibNum = (n) => {
        if (n >= fibNum.length) {
            fibNum[n] = calcFibNum(n - 2) + calcFibNum(n - 1)
        }

        return fibNum[n]
    }
 
    calcFibNum(count)

    const items = fibNum.map((num, n) => <li key={n} className={'num'}>{num}</li>)

    return (
        <div id={'sequence'}>
            <h4 id={'numTableHeading'}>First {count + 1} Fibonacci numbers</h4>

            <div id='numTable'>
                <ul id={'numList'}>
                    {items}
                </ul>
            </div>
        </div>
    )
}

export default Sequence;
