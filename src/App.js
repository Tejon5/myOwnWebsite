import React,{useState,useEffect} from "react"
import './App.css';
import About from './componentes/About/About';
import Cover from './componentes/Cover/Cover';
import Info from "./componentes/Info/Info";
import Navbar from "./componentes/Navbar/NavBar";
import Slider from "./componentes/Slider/Slider";
import Footer from "./componentes/Footer/Footer";

function App() {

const [scrollHeigth, setScrollHeight] = useState(0);

const handleScroll = ()=>{
  const position = window.pageYOffset;
  setScrollHeight(position);
}

useEffect(()=>{
  window.addEventListener("scroll", handleScroll)
},[scrollHeigth]);

  return (
    <div className="App">
        <Navbar isScrolling={scrollHeigth}/>
        <Cover/>
        <About/>
        <Slider/>
        <Info/>
        <Footer/>
    </div>
  );
}

export default App;
