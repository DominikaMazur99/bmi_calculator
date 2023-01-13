import Form from "react-bootstrap/Form";

function InputField({ fieldId, fieldLabel, fieldType, placeholder, text }) {
    return (
        <Form.Group className="mb-3" controlId={fieldId}>
            <Form.Label>{fieldLabel}</Form.Label>
            <Form.Control type={fieldType} placeholder={placeholder} />
            {{ text } ? (
                <Form.Text className="text-muted">{text}</Form.Text>
            ) : null}
        </Form.Group>
    );
}

export default InputField;
