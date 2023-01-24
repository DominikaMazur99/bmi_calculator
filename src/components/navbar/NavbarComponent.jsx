import { useEffect } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import navbarIcon from "../../images/navbarIcon.png";
import "./NavbarComponent.scss";

function NavbarComponent() {
    const navigate = useNavigate();
    useEffect(() => {
        let login = sessionStorage.getItem("login");
        if (login === "" || login === null) {
            navigate("/login");
        }
    }, []);

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    {" "}
                    <img
                        src={navbarIcon}
                        alt="navbar icon"
                        className="navbar__icon"
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link>Profile</Nav.Link>
                </Nav>

                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="/login">Logout</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
