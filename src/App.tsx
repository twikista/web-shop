import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Contact } from "./pages/Contact/Contact";
import { Product } from "./pages/Product/Product";
import { GlobalStyle } from "./theme/GlobalStyles";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/products/:activeCategory" element={<Products />} />
          <Route
            path="/products/:activeCategory/:productId"
            element={<Product />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
