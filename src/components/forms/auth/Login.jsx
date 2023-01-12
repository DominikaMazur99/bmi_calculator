import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

import InputField from "../../fieldsUI/InputField.jsx";
import SimpleButton from "../../buttons/SimpleButton.jsx";

function Login() {
    return (
        <>
            <Container>
                <Form>
                    <InputField
                        fieldId="email"
                        fieldLabel="Email adress"
                        fieldType="email"
                        placeholder="Your e-mail adress"
                    />

                    <InputField
                        fieldId="password"
                        fieldLabel="Password"
                        fieldType="password"
                        placeholder="Password"
                    />
                    <Row>
                        <Col>
                            <SimpleButton
                                variant="primary"
                                type="submit"
                                text="Submit"
                            />
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
}

export default Login;
