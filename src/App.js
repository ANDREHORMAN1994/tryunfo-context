import React from 'react';
import Form from './components/Form';
import './app.css';

function App() {
  return (
    <div className='tryunfo-container'>
      <h1>Revisão Context</h1>
      <Form />
      <div className='cards-container'>
        {/* lista de cards aqui */}
      </div>
    </div>
  );
}

export default App;
