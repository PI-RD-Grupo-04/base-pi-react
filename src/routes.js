import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import PasswordRecovery from './pages/passwordRecovery/PasswordRecovery'


export const Routes = () => {
    return (
        <Switch>
            <Route path="/PasswordRecovery" component={PasswordRecovery} exact/>
            <Route path="/" component={Home} exact/>
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} />
        </Switch>
    )
}