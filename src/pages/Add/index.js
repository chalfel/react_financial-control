import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Title, Container, Form, SubmitButton } from './styles';

import Input from '../../components/Input'

const Add = () => {
  const [ type, setType ]  = useState('');
  const [ desc, setDesc ] = useState('');
  const [ value, setValue ] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    setType('');
    setDesc('');
    setValue('');
  }

  return(
    <Container>
      <Title> Novo Registro </Title>
      <Form onSubmit={ handleOnSubmit }>
        <Input 
          placeHolder="Descrição"
          setValue={setDesc}
          value={desc}
          />
        <Input 
          placeHolder="Valor"
          setValue={setValue}
          value={value}
          />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="nenhum">Escolha o Tipo</option>
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
        <SubmitButton type="submit">
          <FaPlus color="#FFF" size={14}></FaPlus>
        </SubmitButton>
      </Form>
    </Container>
  )
}

export default Add;