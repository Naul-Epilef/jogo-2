import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Components/Pages/Home";
import Login from "../Components/Pages/Login";
import NotFound from "../Components/Pages/NotFound";
import Register from "../Components/Pages/Register";
import ForgotPassword from "../Components/Pages/ForgotPassword";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" children={Home} />
                <Route exact path="/login" children={Login} />
                <Route exact path="/register" children={<Register />} />
                <Route exact path="/forgot-password" children={ForgotPassword} />
                <Route path="*" children={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;