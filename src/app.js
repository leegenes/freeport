import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Menu from './components/Menu';

var fakeThings = [
  {
    name: "Employees"
  },
  {
    name: "Reporting"
  }
]

var windowStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%"
}

ReactDOM.render(
  <div style={windowStyle}>
    <Header />
    <Menu menuItems={fakeThings} />
  </div>,
  document.getElementById("app")
);
