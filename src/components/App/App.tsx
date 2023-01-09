import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import InputSwitcher from '@kit/InputSwitcher';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.module.scss';

const App = () => {
    const [value, setValue] = useState<number>(0);
    const inputHandler = (value) => setValue(value);

    return (
        <Container>
            <Row className='mt-3'>
                <Col>
                    <InputSwitcher onHandler={inputHandler} />
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>{`Введённое значение: ${value}`}</Col>
            </Row>
        </Container>
    );
};

export default App;
