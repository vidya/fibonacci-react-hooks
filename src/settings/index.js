import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './index.scss';

const Settings = ({updateSettings}) => {
    const [firstNumber, setFirstNumber] = useState(1);
    const [secondNumber, setSecondNumber] = useState(1);
    const [count, setCount] = useState(20);

    useEffect(() => updateSettings(firstNumber, secondNumber, count))

    const [labelSize, inputSize] = [5,4]

    return (
        <div id={'settings'}>
            <Form id={'settingsForm'}>
                <Form.Group as={Row} controlId="formHorizontalFirstNumber">
                    <Form.Label column sm={labelSize}>
                        First number
                    </Form.Label>

                    <Col sm={inputSize}>
                        <Form.Control type="number" placeholder="First number" 
                            value={firstNumber} 
                            onChange={event => setFirstNumber(event.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalSecondNumber">
                    <Form.Label column sm={labelSize}>
                        Second number
                    </Form.Label>

                    <Col sm={inputSize}>
                        <Form.Control type="number" placeholder="Second number"  
                            value={secondNumber} 
                            onChange={event => setSecondNumber(event.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalCount">
                    <Form.Label column sm={labelSize}>
                        Count
                    </Form.Label>

                    <Col sm={inputSize}>
                        <Form.Control type="number" placeholder="Count"  
                        value={count}
                        onChange={event => setCount(event.target.value)} 
                    />
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Settings;
