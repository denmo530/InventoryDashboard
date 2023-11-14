import Navbar from "./components/Navbar";
import InventoryPage from "./pages/InventoryPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TransactionPage from "./pages/TransactionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<InventoryPage />} />
          <Route path="transactions" element={<TransactionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
