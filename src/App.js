import { createContext, useState } from "react";
import { Route, Routes, Outlet, Link } from "react-router-dom";
import Cart from "./Cart";
import Products from "./Products";
import "./styles.css";

export const ShopContext = createContext();

export default function App() {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState({});

  const addToCart = (productId) => {
    console.log(`adding product with id ${productId} to the cart`);
    setCart({
      ...cart,
      [productId]: cart[productId] === undefined ? 1 : cart[productId] + 1
    });
  };

  return (
    <div>
        <ShopContext.Provider value={{ cart, addToCart, products, setProducts }}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Route>
            </Routes>
        </ShopContext.Provider>
    </div>
  );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet />
        </div>
    )
};
