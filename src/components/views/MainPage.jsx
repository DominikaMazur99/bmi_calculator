import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();
    useEffect(() => {
        let login = sessionStorage.getItem("login");
        if (login === "" || login === null) {
            navigate("/login");
        }
    }, []);

    return (
        <>
            <div>Main Page</div>;<Link to="/login">Logout</Link>
        </>
    );
}
export default MainPage;
