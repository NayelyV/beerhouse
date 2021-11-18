import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"

//Components
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
          <div className="App">
            <NavBar />
            <Route path="/" exact component={ItemListContainer}/>
            <Route path="/category/:id" component={ItemListContainer}/>
            <Route path="/item/:id" component={ItemDetailContainer}/>
            <Route path="/cart" component={Checkout}/>
          </div>
      </Router>
    </CartProvider>


  );
}

export default App;
