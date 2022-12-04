import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Contact } from "./pages/Contact/Contact";
import { Product } from "./pages/Product/Product";
import { GlobalStyle } from "./theme/GlobalStyles";
import { Footer } from "./components/Footer/Footer";
import { Cart } from "./pages/Cart/Cart";
import { useGlobalContext } from "./state/context/GlobalContext";
import { useEffect } from "react";
import { toggleCart } from "./state/reducers/actionCreators";
import { setPrevPath } from "./utils/setPreviouspath";

function App() {
  const { pathname } = useLocation();
  const {
    state: { cartIsOpen, previousPath },
    dispatch,
  } = useGlobalContext();
  useEffect(() => {
    if (cartIsOpen === true && pathname !== previousPath) {
      dispatch(toggleCart(setPrevPath(cartIsOpen, pathname)));
    }
  });
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:activeCategory" element={<Products />} />
          <Route
            path="/products/:activeCategory/:productId"
            element={<Product />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
