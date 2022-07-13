import React, { useContext } from 'react';
import Form from './components/Form';
import './app.css';
import context from './context/myContext';
import Card from './components/Card';

const levels = ['todos', 'baixo', 'médio', 'alto'];

function App() {
  const { cards, setFilter, filter } = useContext(context);

  return (
    <div className='tryunfo-container'>
      <h1>Revisão Context</h1>
      <Form />
      <select
        name='level'
        id='level'
        // value={form.level}
        onChange={({ target }) => setFilter(target.value)}>
        {levels.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>
      <div className='cards-container'>
        {filter === 'todos'
          ? cards.map((card) => <Card card={card} key={card.name} />)
          : cards
              .filter((card) => card.level === filter)
              .map((card) => <Card card={card} key={card.name} />)}
      </div>
    </div>
  );
}

export default App;
