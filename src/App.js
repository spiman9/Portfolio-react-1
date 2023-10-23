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

      <SocialLinks />
    </>
  );
}

export default App;
