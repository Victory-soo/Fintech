import { BrowserRouter, Route, Routes } from "react-router-dom";
import AxiosComponent from "./component/AxiosComponent";
import InputComponent from "./component/InputComponent";
import ListComponent from "./component/ListComponent";
import StyledComponent from "./component/StyledComponent";
import Welcome from "./component/Welcome";
import AuthResult from "./component/pages/AuthResult";
import Newspage from "./component/pages/Newspage";
import Payment from "./component/pages/Payment";

function App() {
    return (
        <BrowserRouter>
            <a href="http://localhost:3000/">3000/</a>
            <br />
            <a href="http://localhost:3000/state">/state</a>
            <br />
            <a href="http://localhost:3000/input">/input</a>
            <br />
            <a href="http://localhost:3000/styled">/styled</a>
            <br />
            <a href="http://localhost:3000/axios">/axios</a>
            <br />
            <a href="http://localhost:3000/newspage">/newspage</a>
            <br />
            <a href="http://localhost:3000/payment">/payment</a>
            <br />
            <a href="http://localhost:3000/authResult">/authResult</a>
            <Routes>
                <Route path="/" element={<Welcome username="정승수" old={27} />} />
                <Route path="/state" element={<InputComponent />} />
                <Route path="/input" element={<ListComponent />} />
                <Route path="/styled" element={<StyledComponent />} />
                <Route path="/axios" element={<AxiosComponent />} />
                <Route path="/newspage" element={<Newspage />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/authResult" element={<AuthResult />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
