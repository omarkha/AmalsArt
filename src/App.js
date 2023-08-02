import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <NavBar />
        <HomePage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
