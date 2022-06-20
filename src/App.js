import React, {useState, useEffect} from 'react';
import './App.css';
import Cover from './components/cover/Cover';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Slider from './components/Slider/Slider';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  function handleScroll(){
    const position = window.pageYOffset
    setScrollHeight(position)
  }

  useEffect(()=> {
    window.addEventListener("scroll",handleScroll);
  },[scrollHeight])

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight}/>
      <Cover/>
      <About/>
      <Slider/>
    </div>
  );
}

export default App;
