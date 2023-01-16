import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

import InputField from "../../fieldsUI/InputField.jsx";
import SimpleButton from "../../buttons/SimpleButton.jsx";

import loginIcon from "../../../images/loginIcon.png";

import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Login() {
    const [data, setData] = useState([]);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    // const [formLoginValues, setFormLoginValues] = useState({
    //     email: "",
    //     password: "",
    // });
    // const { email, password } = formLoginValues;

    const navigate = useNavigate();

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormLoginValues((prevState) => {
    //         return {
    //             ...prevState,
    //             [name]: value,
    //         };
    //     });
    // };
    // console.log(formLoginValues);
    // useEffect(() => {
    //     getDatafromApi();
    // }, []);

    // async function getDatafromApi() {
    //     const response = await fetch("http://localhost:3001/users");
    //     const data = await response.json();
    //     setData(data.map((el) => el.formRegisterValues));
    // }

    const LoginToApp = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation
            // console.log('proceed');
            fetch("http://localhost:3001/users/" + login)
                .then((res) => {
                    console.log(res);
                    return res.json();
                })
                .then((resp) => {
                    //console.log(resp)
                    if (Object.keys(resp).length === 0) {
                        console.log("Please Enter valid login");
                    } else {
                        if (resp.password === password) {
                            console.log("Success");
                            // sessionStorage.setItem('username',username);
                            navigate("/");
                        } else {
                            console.log("Please Enter valid credentials");
                        }
                    }
                })
                .catch((err) => {
                    console.log("Login Failed due to :" + err.message);
                });
        }
    };

    const validate = () => {
        let result = true;
        if (login === "" || login === null) {
            result = false;
            console.log("enter login");
            toast.warning("Please enter your login.");
        }
        return result;
    };

    return (
        <Container>
            <Row xs={2} md={8} className="login-box">
                <Form onSubmit={LoginToApp}>
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
                            fieldId="login"
                            fieldLabel="Login"
                            fieldType="login"
                            placeholder="Your login"
                            onChange={(e) => setLogin(e.target.value)}
                            value={login}
                            name="login"
                        />
                    </Col>
                    <Col>
                        <InputField
                            fieldId="password"
                            fieldLabel="Password"
                            fieldType="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            name="password"
                        />
                    </Col>

                    <Col>
                        <div className="text-center">
                            <SimpleButton
                                variant="outline-dark"
                                type="submit"
                                text="Login"
                                onClick={LoginToApp}
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
