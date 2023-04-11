import React from 'react';
import './App.css';
import TypeGenius from './TypeGenius';
import logo from './images/logo.png';


function App() {
  return (
    <>
     <header className="type-genius__header">
        <div className="row">
            <div className="column column-10">
                <img src={logo} alt="" width="120px"/>
            </div>
            <div className="column column-offset-75">
                <button>Sign Up</button>
            </div>
        </div>
      </header>
      <TypeGenius />
    </>
  );
}

export default App;
