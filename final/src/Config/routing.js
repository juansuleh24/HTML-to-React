import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Pricing from "../components/Pricing";
import Header from "../components/Header";

export default function Config() {
    return(
        <Router>
            <Routes>
                <Route path="/"element={<Home />}/>
                <Route path="/Features"element={<Features />}/>
                <Route path="/Pricing"element={<Pricing />}/>
                <Route path="/Showcase"element={<Showcase />}/>
            </Routes>
        </Router>
    );
}