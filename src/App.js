import React from 'react';
import './App.css';
import Menu from './componentes/menu';

function App() {
  return (
    <div className="App">
      <Menu 
      item1='Item 1'
      item2='Item 2'
      item3='Item 3'
      item4='Item 4'
      />
    </div>
  );
}

export default App;
