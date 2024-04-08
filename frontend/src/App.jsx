import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <GlobalStyles>
        <BrowserRouter>
        <Routes>
          {/* Homepage */}
          <Route index path="/" element={<HomePage />} />
          <Route index path="/product" element={<ProductPage />} />
        </Routes>
        </BrowserRouter>
      </GlobalStyles>
    </>
  )
}

export default App;
