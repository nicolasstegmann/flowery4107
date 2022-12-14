import './styles//App.scss';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";
import {UserLayout} from './components/UserLayout';

import { Home } from './pages/Home';
import { AllProducts } from './pages/AllProducts';
import { CategoryProducts } from './pages/CategoryProducts';
import { ProductDetail } from './pages/ProductDetail';
import { ShoppingCart } from './pages/ShoppingCart';
import { Checkout } from './pages/Checkout';

import { CartProvider } from './context/CartContext'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<UserLayout />}
    >
      <Route
        index
        element={<Home /> }
      />
      <Route
        id="allProducts"
        path="/store"
        element={<AllProducts title = 'Todos nuestros productos' />}
      />
      <Route
        id="categoryProducts"
        path="/category/:categoryId"
        element={<CategoryProducts title = 'Nuestros productos por categoría' />}
      />
      <Route
        id="productDetail"
        path="/product/:productId"
        element={<ProductDetail title = 'Comprá nuestro producto'/>}
      />
      <Route
        id="shoppingCart"
        path="/shoppingcart"
        element={<ShoppingCart title = 'Tu carrito de compras'/>}
      />
      <Route
        id="checkout"
        path="/checkout"
        element={<Checkout title = 'Checkout ¡Estás a un paso de finalizar tu compra!'/>}
      />
    </Route>
  )
);

function App() {
  //const shoppingCart = useContext(CartContext)
  return (
    <div className="App">
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>        
    </div>
  );
}

export default App;
