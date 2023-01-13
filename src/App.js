import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Login from "./components/forms/auth/Login";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default App;
