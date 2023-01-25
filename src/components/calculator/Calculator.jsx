import { useState } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import bmiIcon from "../../images/bmi.png";

import InputField from "../fieldsUI/InputField.jsx";
import SimpleButton from "../buttons/SimpleButton";

import "./Calculator.scss";

function Calculator() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState("");
    const [message, setMessage] = useState("");

    const Calculate = (e) => {
        e.preventDefault();
        const bmiIndex = (weight / height ** 2).toFixed(2);
        setBmi(bmiIndex);
        if (bmiIndex < 18.5) {
            setMessage("You're in the underweight range.");
        } else if (bmiIndex >= 18.5 && bmiIndex <= 24.9) {
            setMessage("You're in the healthy weight range.");
        } else if (bmiIndex > 24.9 && bmiIndex <= 29.9) {
            setMessage("You're in the overweight range.");
        } else {
            setMessage("You're in the obese range.");
        }
    };

    return (
        <div>
            <Container>
                <Row xs={2} md={8} className="calculator-box">
                    <Form>
                        <Col>
                            <div className="text-center">
                                <img
                                    src={bmiIcon}
                                    alt="bmi icon"
                                    className="calculator-box__icon"
                                />
                            </div>
                            <div className="text-center">
                                Calculate Your BMI Index
                            </div>
                        </Col>
                        <Col>
                            <InputField
                                fieldId="height"
                                fieldType="number"
                                step="0.01"
                                min="0"
                                placeholder="Your height in m"
                                onChange={(e) => setHeight(e.target.value)}
                                value={height}
                                name="height"
                            />
                        </Col>
                        <Col>
                            <InputField
                                fieldId="Weight"
                                fieldType="number"
                                placeholder="Your weight in kg"
                                step="0.1"
                                min="0"
                                onChange={(e) => setWeight(e.target.value)}
                                value={weight}
                                name="weight"
                            />
                        </Col>
                        <Col>
                            <div className="text-center">
                                <SimpleButton
                                    variant="outline-dark"
                                    text="Calculate"
                                    onClick={Calculate}
                                />
                            </div>
                        </Col>
                    </Form>
                </Row>
                <Row>
                    {bmi && message && (
                        <div className="text-center">
                            Your BMI Index is equal {bmi}. {message}{" "}
                        </div>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default Calculator;
