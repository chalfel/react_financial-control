import React from 'react';

const Input = ({ placeHolder, value, setValue }) => {

  const handleOnChange = (e) => {
    setValue(e.target.value);
  }
  return(
    <input placeholder={placeHolder} value={value} onChange={handleOnChange}/>
  )
}

export default Input;