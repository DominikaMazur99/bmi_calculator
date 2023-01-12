import { Button } from "react-bootstrap";

function SimpleButton({ variant, type, text }) {
    return (
        <Button variant={variant} type={type}>
            {text}
        </Button>
    );
}

export default SimpleButton;
