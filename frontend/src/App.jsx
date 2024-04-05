import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import HomePage from "./pages/HomePage"

function App() {

  return (
    <>
      <GlobalStyles />
        <BrowserRouter>
        <Routes>
          {/* Homepage */}
          <Route index path="/" element={<HomePage />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
