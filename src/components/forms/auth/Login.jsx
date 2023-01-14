import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

import InputField from "../../fieldsUI/InputField.jsx";
import SimpleButton from "../../buttons/SimpleButton.jsx";

import loginIcon from "../../../images/loginIcon.png";

import "./Login.scss";
import { Link } from "react-router-dom";

function Login() {
    return (
        <Container>
            <Row xs={2} md={8} className="login-box">
                <Form>
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
                            fieldId="email"
                            fieldLabel="Email adress"
                            fieldType="email"
                            placeholder="Your e-mail adress"
                        />
                    </Col>
                    <Col>
                        <InputField
                            fieldId="password"
                            fieldLabel="Password"
                            fieldType="password"
                            placeholder="Password"
                        />
                    </Col>

                    <Col>
                        <div className="text-center">
                            <SimpleButton
                                variant="outline-dark"
                                type="submit"
                                text="Login"
                            />
                        </div>
                        <Form.Text className="text-muted">
                            <Link to="/register">
                                If you don't have account, click and register.
                            </Link>
                        </Form.Text>
                    </Col>
                </Form>
            </Row>
        </Container>
    );
}

export default Login;
