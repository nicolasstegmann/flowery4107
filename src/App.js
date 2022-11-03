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
import { getProducts } from './api/products';

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
        //loader= {getProducts} //no funciona.
      />
      <Route
        id="categoryProducts"
        path="/category/:categoryId"
        element={<CategoryProducts title = 'Nuestros productos por categoría' />}
        //loader={({ params: { pokemonName } }) => getPokemon(pokemonName)}
      />
      <Route
        id="productDetail"
        path="/product/:productId"
        element={<ProductDetail title = 'Comprá nuestro producto'/>}
      />
      <Route
        id="shoppingCart"
        path="/shoppingcart"
        element={<div>Shopping Cart</div>}
      />
      <Route
        id="checkout"
        path="/checkout"
        element={<div>Checkout</div>}
      />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
