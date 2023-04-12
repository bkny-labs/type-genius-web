import React from 'react';
import './App.css';
import TypeGenius from './TypeGenius';
import logo from './images/logo2.svg';
import Social from './Social';


function App() {
  return (
    <>
     <header className="type-genius__header">
        <div className="row">
            <div className="column shrink">
                <img width="200px" src={logo} alt=""/>
            </div>
            <div className="column shrink align-right">
                <Social />
            </div>
        </div>
      </header>
      <TypeGenius />
    </>
  );
}

export default App;
