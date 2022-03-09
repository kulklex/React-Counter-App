import React from 'react';
import { button1 as Button1} from './components/btn';
import { button2 as Button2} from './components/btn';
import './App.css';
import Counter from './components/counter';
import Form from './components/form';
import Maps from './components/maps';
import Axios from './components/http';

function App() {
  return (
    
    <main className="App">
      <Maps/>
    <Counter />
      <Button1  backgroundColor="green">+</Button1>
      <Button2  backgroundColor="green">-</Button2>
      <Axios/>
      <Form/>
    </main>
  );
}

export default App;
