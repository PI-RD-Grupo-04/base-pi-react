import { Switch, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
<<<<<<< HEAD
import Favorites from "./pages/favorites/Favorites"
=======
import Favorites from "./pages/favorites/Favorites";
>>>>>>> 45bd80bc84e70b5211256ad30676d836a8a1aa5d

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/favorites" component={Favorites} />
        </Switch>
    )
}