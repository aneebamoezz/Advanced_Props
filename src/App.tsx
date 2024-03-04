import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Status status='loading' />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name='Aneeba' isLoggedIn={false} />
    </div>
  );
}

export default App;
