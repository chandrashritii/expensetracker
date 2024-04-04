import React from 'react';
import Expenses from './components/Expenses';
import Form from './components/Form';

function App() {
  return (
    <div style={{width: '60%', margin: 'auto'}}>
      <h3> New expense</h3>
      <Form />
      <h3>Expenses</h3>
     <Expenses />
    </div>
  );
}

export default App;
