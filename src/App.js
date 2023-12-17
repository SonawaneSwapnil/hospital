import About from "./components/About";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Booking/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
