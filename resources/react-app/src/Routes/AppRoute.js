import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";

function AppRoute() {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
}

export default AppRoute;
