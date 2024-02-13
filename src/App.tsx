import { Cart } from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import { Product } from "./views/products";

function App() {
  return (
    <CartProvider>
      <Cart />
      <Product />
    </CartProvider>
  );
}

export default App;
