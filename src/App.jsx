import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./components/header";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <>
      <Header />
      <Outlet context={{ products, setProducts }} />
    </>
  );
}

export default App;
