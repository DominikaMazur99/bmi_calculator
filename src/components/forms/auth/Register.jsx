import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

import InputField from "../../fieldsUI/InputField.jsx";
import SimpleButton from "../../buttons/SimpleButton.jsx";

import loginIcon from "../../../images/loginIcon.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

function Register() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const [formRegisterValues, setFormRegisterValues] = useState({
    //     name: "",
    //     surname: "",
    //     email: "",
    //     password: "",
    // });

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormRegisterValues((prevState) => {
    //         return {
    //             ...prevState,
    //             [name]: value,
    //         };
    //     });
    // };

    // const { name, surname, email, password } = formRegisterValues;
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        fetch("http://localhost:3001/users", {
            method: "POST",
            body: JSON.stringify({
                id: id,
                name: name,
                email: email,
                password: password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then(() => {
                toast.success("Registered successfully.");
                navigate("/login");
            })
            .catch(() => {
                toast.error("Registered failed.");
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
                                name="id"
                                fieldId="id"
                                fieldLabel="Login"
                                fieldType="text"
                                placeholder="Your Login"
                                onChange={(e) => setId(e.target.value)}
                                value={id}
                            />
                        </Col>
                        <Col>
                            <InputField
                                name="name"
                                fieldId="name"
                                fieldLabel="Name"
                                fieldType="text"
                                placeholder="Your name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </Col>

                        <Col>
                            <InputField
                                name="email"
                                fieldId="email"
                                fieldLabel="Email adress"
                                fieldType="email"
                                placeholder="Your e-mail adress"
                                onChange={(e) => setEmail(e.target.value)}
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
                                onChange={(e) => setPassword(e.target.value)}
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
