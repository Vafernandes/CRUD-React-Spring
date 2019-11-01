import React from 'react';
import './App.css';
import AreaPrincipal from './Components/AreaPrincipal/AreaPrincipal';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AreaPrincipal />
    </div>
  );
}

export default App;
