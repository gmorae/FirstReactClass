import React from 'react';
import './App.css'
import Rodape from './components/Rodape'
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <h1>Home</h1>
        <Rodape />
      </div>
    </div>
  );
}

export default App;