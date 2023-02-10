import Navbar from './component/Navbar'
import './App.css';
import Home from './component/Home';
import Products from './component/Products';
import {Switch, Route} from 'react-router-dom';
import Product from './component/Product';
import Cart from './component/Cart';


function App() {
  return (
    <> 
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
