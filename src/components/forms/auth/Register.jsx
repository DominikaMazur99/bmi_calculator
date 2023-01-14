import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

import InputField from "../../fieldsUI/InputField.jsx";
import SimpleButton from "../../buttons/SimpleButton.jsx";

import loginIcon from "../../../images/loginIcon.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
    const [formRegisterValues, setFormRegisterValues] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormRegisterValues((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };
    const { name, surname, email, password } = formRegisterValues;
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        fetch("http://localhost:3001/users", {
            method: "POST",
            body: JSON.stringify({
                formRegisterValues,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then((res) => {
            console.log(res);
            navigate("/login");
        });
    };
    return (
        <>
            <Container>
                <Row xs={2} md={8} className="login-box">
                    <Form onSubmit={handleRegister}>
                        <Col>
                            <div className="text-center">
                                <img
                                    src={loginIcon}
                                    alt="login icon"
                                    className="login-box__icon "
                                />
                            </div>
                        </Col>
                        <Col>
                            <InputField
                                name="name"
                                fieldId="name"
                                fieldLabel="Name"
                                fieldType="text"
                                placeholder="Your name"
                                onChange={handleChange}
                                value={name}
                            />
                        </Col>
                        <Col>
                            <InputField
                                name="surname"
                                fieldId="surname"
                                fieldLabel="Surname"
                                fieldType="text"
                                placeholder="Your surname"
                                onChange={handleChange}
                                value={surname}
                            />
                        </Col>
                        <Col>
                            <InputField
                                name="email"
                                fieldId="email"
                                fieldLabel="Email adress"
                                fieldType="email"
                                placeholder="Your e-mail adress"
                                onChange={handleChange}
                                value={email}
                            />
                        </Col>
                        <Col>
                            <InputField
                                name="password"
                                fieldId="password"
                                fieldLabel="Password"
                                fieldType="password"
                                placeholder="Password"
                                onChange={handleChange}
                                value={password}
                            />
                        </Col>
                        <Col>
                            <div className="text-center">
                                <SimpleButton
                                    variant="outline-dark"
                                    type="submit"
                                    text="Register"
                                    onClick={handleRegister}
                                />
                            </div>
                        </Col>
                    </Form>
                </Row>
            </Container>
        </>
    );
}

export default Register;
