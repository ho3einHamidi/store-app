import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFound from "./pages/NotFound";
import ProductsProvider from "./context/ProductsContext";

function App() {
  return (
    <>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </ProductsProvider>
    </>
  );
}

export default App;
