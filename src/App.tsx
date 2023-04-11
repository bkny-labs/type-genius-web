import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TypeGenius
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>The base type is 1.6rem (16px) over 1.6 line height (24px)</p>
<a>Anchor</a>
<em>Emphasis</em>
<small>Small</small>
<strong>Strong</strong>
<u>Underline</u>
<h1>Heading</h1>
<h2>Heading</h2>
<h3>Heading</h3>
<h4>Heading</h4>
<h5>Heading</h5>
<h6>Heading</h6>

  <form>
    <fieldset>
      <label htmlFor="nameField">Name</label>
      <input type="text" placeholder="CJ Patoilo" id="nameField" />
      <label htmlFor="ageRangeField">Age Range</label>
      <select id="ageRangeField">
        <option value="0-13">0-13</option>
        <option value="14-17">14-17</option>
        <option value="18-23">18-23</option>
        <option value="24+">24+</option>
      </select>
      <label htmlFor="commentField">Comment</label>
      <textarea placeholder="Hi CJ …" id="commentField"></textarea>
      <div className="float-right">
        <input type="checkbox" id="confirmField" />
        <label className="label-inline" htmlFor="confirmField">Send a copy to yourself</label>
      </div>
      <input className="button-primary" type="submit" value="Send" />
    </fieldset>
  </form>


  <span className="pln">
</span><div className="container"><span className="pln">

  </span><div className="row"><span className="pln">
    </span><div className="column"><span className="pln">.column</span></div><span className="pln">
    </span><div className="column"><span className="pln">.column</span></div><span className="pln">
    </span><div className="column"><span className="pln">.column</span></div><span className="pln">
    </span><div className="column"><span className="pln">.column</span></div><span className="pln">
  </span></div><span className="pln">

  </span><div className="row"><span className="pln">
    </span><div className="column"><span className="pln">.column</span></div><span className="pln">
    </span><div className="column column-50 column-offset-25"><span className="pln">.column column-50 column-offset-25</span></div><span className="pln">
  </span></div><span className="pln">

</span></div><span className="pln">

</span>
    </div>
  );
}

export default App;
