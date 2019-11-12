import React from 'react';
import './App.css'
import Rodape from './components/Rodape'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Home</h1>
      <Rodape />
    </div>
  );
}

export default App;