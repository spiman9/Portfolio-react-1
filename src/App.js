import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <About />
      <PortFolio />
      <Experience/>
      <Contact/>
      <footer className="text-center text-2xl text-white bg-gradient-to-b from-black to-gray-800 p-4">
        <p>©Made with ⚡ by PBG</p>
      </footer>
      <SocialLinks />
    </>
  );
}

export default App;
