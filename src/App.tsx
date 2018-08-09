import * as React from 'react';
import './App.css';
import OffCanvas from 'src/components/OffCanvas';
import Hamburger from 'src/components/OffCanvas/Hamburger';

const list = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Somewhere else',
    url: '/somewhere',
  },
];

const spaceArr = new Array(100).fill('Test');

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <OffCanvas links={list} />
        <header className="App-header">
          <Hamburger />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        {spaceArr.map((val, index) => (
          <p key={index}>{index}</p>
        ))}
      </div>
    );
  }
}

export default App;
