import { useState } from 'react';
import context from './myContext';
import data from '../dataCard';

const characters = data;

function Provider({ children }) {
  const [cards, setCards] = useState(characters);
  const [filter, setFilter] = useState('todos');

  const contextValue = {
    cards,
    setCards,
    filter,
    setFilter,
  }

  return (
    <context.Provider value={contextValue}>
      { children }
    </context.Provider>
  )
}

export default Provider;
