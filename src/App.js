import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Login from "./components/forms/auth/Login";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
