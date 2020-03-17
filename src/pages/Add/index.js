import React from 'react';

const Add = () => {
  return(
    <>
      <form>
        <span>Descrição</span>
        <input />
        <span>Valor</span>
        <input />
        <span>Tipo</span>
        <select>
          <option>Entrada</option>
          <option>Saída</option>
        </select>
        <button type="submit">Adicionar</button>
      </form>
    </>
  )
}

export default Add;