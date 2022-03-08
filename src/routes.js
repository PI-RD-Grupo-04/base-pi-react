import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import Faq from './pages/faq/Faq'
import Policy_security from './pages/policy_security/Policy_security'
import HowToBuy from './pages/howToBuy/HowToBuy';
import AboutUs from './pages/aboutUs/AboutUs';
import PlansVed from './pages/plansVed/PlansVed';


export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/faq" component={Faq}/>
            <Route path="/policy_security" component={Policy_security}/>
            <Route path="/howToBuy" component={HowToBuy}/>
            <Route path="/aboutUS" component={AboutUs}/>
            <Route path="/plansVed" component={PlansVed}/>
            
        </Switch>
    )
}