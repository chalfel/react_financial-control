import styled from 'styled-components';

export const Container = styled.div`
  border: 1px;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  padding: 30px;
  border-radius: 4px;
  margin: 80px auto;
`;

export const Title = styled.h1`
  color: #aaae;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  button, select, input {
    margin: 15px;
  }
  
  select, input {
    width: 200px;
    height: 30px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
  border: 0px;
  padding: 15px;
  border-radius: 4px;
  margin-top: 10px;
  display: flex;
  background: #7159c1;
  justify-content: center;
  align-items: center;
`;