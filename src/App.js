import React from 'react';
import Expenses from './components/Expenses';
import Form from './components/Form';
import {ToastContainer} from 'react-toastify';
import './App.css';

function App() {
  return (
    <div className="App" style={{ width: '70%', margin: 'auto', marginTop: '20px' }}>
      <ToastContainer />
      <h3>Monthly Expenses</h3>
      <Form />
      <hr />
      <Expenses />
    </div>
  );
}

export default App;
