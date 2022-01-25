import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Messages from './components/Messages';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Reports from './components/Reports';
import Support from './components/Support';
import Teams from './components/Teams';

function App() {
  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")
  const [text, setText] = useState("Linear-Gradient(to right, #5e1aff, #d400ff)")
  
  const getInputValue1 =(e)=>{
    setInput1(e.target.value)
    setText(`Linear-Gradient(to right, ${input1}, #d400ff)`)
  }
  const getInputValue2 =(e)=>{
    setInput2(e.target.value)
    setText(`Linear-Gradient(to right, ${input1}, ${input2})`)
  }

  const backgroundStyle ={
    background: `linear-gradient(to right, ${input1}, ${input2})`
  }


  return (
    <Router>
        <div className="App" style={backgroundStyle}>
          <Navbar />
          <Routes>
            <Route path="/"  element={<Home getInputValue1={getInputValue1} getInputValue2={getInputValue2} input1={input1} input2={input2} text={text} />} />
            <Route path="/reports"  element={<Reports />} />
            <Route path="/products"  element={<Products />} />
            <Route path="/teams"  element={<Teams />} />
            <Route path="/messages"  element={<Messages />} />
            <Route path="/support"  element={<Support />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
