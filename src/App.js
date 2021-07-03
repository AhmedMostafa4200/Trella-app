import "./App.css";

import Navbar from "./components/layout/navbar/Navbar";
import Shipment from "./components/shipment/Shipment";
import Search from "./components/search/Search";

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Shipment />
    </>
  );
}

export default App;
