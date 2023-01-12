import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

function InputField({ fieldId, fieldLabel, fieldType, placeholder, text }) {
    return (
        <Row>
            <Col>
                <Form.Group className="mb-3" controlId={fieldId}>
                    <Form.Label>{fieldLabel}</Form.Label>
                    <Form.Control type={fieldType} placeholder={placeholder} />
                    {{ text } ? (
                        <Form.Text className="text-muted">{text}</Form.Text>
                    ) : null}
                </Form.Group>
            </Col>
        </Row>
    );
}

export default InputField;
