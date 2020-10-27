import React, { useState } from 'react';
import Post from './components/Post';
import './App.css';
import Switch from '@material-ui/core/Switch';
import classNames from 'classnames';

function App() {
  const [lightMode, setLightMode] = useState(false);

  const posts = [
      {
          "title": "React vs Angular vs Vue in 2020",
          "subtitle": "by Ram Ramkumar",
          "summary": "Compare and contrast the three big frameworks! Our co-worker Ram will detail the pros and cons of each framework."
      },
      {
          "title": "Static Site Generators",
          "subtitle": "by Keith Denning",
          "summary": "Learn all about the most popular static site generators! From Gatsby to Next.js, we'll cover every framework out there."
      },
      {
          "title": "React Series Labs",
          "subtitle": "by Collin Makohon",
          "summary": "Learn all about hooks in React!"
      }
  ];

  return (
    <div className={classNames("App", {"light": lightMode})}>
      <header>
        <h1>CapTech Blog</h1>
        <br />
        <Switch 
          checked={lightMode}
          onChange={() => setLightMode(!lightMode)}
          name="light-mode"
          color="primary"
        />
      </header>
      <div className="posts">
        {posts.map(post => 
          <Post key={post.title} lightMode={lightMode} title={post.title} subtitle={post.subtitle} summary={post.summary} />
        )}
      </div>
    </div>
  );
}

export default App;
