import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>CapTech Blog</h1>
      </header>
      <div className="posts">
        <div className="posts--item">
          <h3 className="posts--heading">React vs Angular vs Vue in 2020</h3>
          <h5 className="posts--subtitle">by Ram Ramkumar</h5>
          <p className="posts--summary">Compare and contrast the three big frameworks! Our co-worker Ram will detail the pros and cons of each framework.</p>
        </div>
        <div className="posts--item">
          <h3 className="posts--heading">Static Site Generators</h3>
          <h5 className="posts--subtitle">by Keith Denning</h5>
          <p className="posts--summary">Learn all about the most popular static site generators! From Gatsby to Next.js, we'll cover every framework out there.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
