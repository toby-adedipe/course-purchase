import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CourseSales from './CourseSales';

class App extends Component {
  render() {
    const courses = [
      {
        name: 'Complete ios10 dev course',
        price: 199
      },
      {
        name: 'Complete pentesting course',
        price: 159
      },
      {
        name: 'Complete frontend dev course',
        price: 180
      },
      {
        name: 'Complete fullstack  dev course',
        price: 400
      }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to course purchase page</h2>
        </header>
        <CourseSales items={courses}/>

      </div>
    );
  }
}

export default App;
