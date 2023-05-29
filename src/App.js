import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Proyects from "./components/Proyects/Proyects";
import "./App.css";

function App() {
  return (
    <div>
      <div className="app">
        <NavBar />
      </div>
      <div className="mainContent">
        <AboutMe />
        <Proyects />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
