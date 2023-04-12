import React from 'react';
import './App.css';
import TypeGenius from './TypeGenius';
import logo from './images/logo2.svg';


function App() {
  return (
    <>
     <header className="type-genius__header">
        <div className="row">
            <div className="column column-20">
                <img src={logo} alt=""/>
            </div>
            <div className="column column-offset-60 align-right">
                <button>Sign Up</button>
            </div>
        </div>
      </header>
      <TypeGenius />
    </>
  );
}

export default App;
