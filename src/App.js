import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MyFooter from './components/MyFooter/MyFooter';
import ToDo from './components/ToDo/ToDo';

function App() {
  return (
    <div className="App">
      <Header />
      <ToDo />
      <MyFooter />
    </div>
  );
}

export default App;
