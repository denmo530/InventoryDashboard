import Navbar from "./components/Navbar";
import InventoryScreen from "./screens/InventoryScreen";

function App() {
  return (
    <main className="h-screen w-screen flex flex-row">
      <Navbar />
      <InventoryScreen />
    </main>
  );
}

export default App;
