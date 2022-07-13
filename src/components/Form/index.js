import React, { useState } from 'react';
import './style.css';

const levels = ['baixo', 'médio', 'alto'];

function Form() {
  const [form, setForm] = useState({
    name: '',
    image: '',
    description: '',
    skill: '',
    level: 'baixo'
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value
    });
  };

  return (
    <form>
      <label htmlFor='name'>
        Escolha um Nome
        <input
          type='text'
          name='name'
          id='name'
          value={form.name}
          placeholder='escreva o nome aqui'
          onChange={handleChange}
        />
      </label>
      <label htmlFor='image'>
        Escolha uma Imagem
        <input
          type='text'
          name='image'
          id='image'
          value={form.image}
          placeholder='coloque uma url aqui'
          onChange={handleChange}
        />
      </label>
      <label htmlFor='description'>
        Escolha uma Descrição
        <textarea
          id='description'
          name='description'
          value={form.description}
          rows='4'
          cols='50'
          maxLength='200'
          placeholder='escreva a descrição aqui'
          onChange={handleChange}
        />
      </label>
      <label htmlFor='skill'>
        Escolha uma Habilidade
        <input
          type='text'
          name='skill'
          id='skill'
          value={form.skill}
          placeholder='escreva uma habilidade aqui'
          onChange={handleChange}
        />
      </label>
      <div className='level-button-container'>
        <label id='label-select' htmlFor='level'>
          Selecione um level
          <select
            name='level'
            id='level'
            value={form.level}
            onChange={handleChange}>
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </label>
        <button type='button'>Criar Card</button>
      </div>
    </form>
  );
}

export default Form;
