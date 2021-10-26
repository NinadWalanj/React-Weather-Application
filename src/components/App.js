//imports
import React from "react";
import Navigation from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Search from "./Search/Search";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
