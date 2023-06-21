import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
//import ProductRow from './components/ProductRow';
import './styles.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <article>
          <h1>This is First Frontend React App </h1>
          It was my greate pleasure that, Now I am going to develop my career
          having <br />
          with react & mongodb instance...
        </article>
      </div>
    </div>
  );
}

export default App;
