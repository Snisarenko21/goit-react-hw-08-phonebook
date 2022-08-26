import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  border: 4px solid rgb(94, 94, 155);
  padding: 15px;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: box-shadow 250ms linear;
  }
`;
export const Label = styled.h2`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: rgb(94, 94, 155);

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: box-shadow 250ms linear;
  }
`;
export const Input = styled.input`
  width: 70%;
  margin-left: 20px;
  height: 28px;
  font-size: 14px;
  color: rgb(94, 94, 155);
  border: 2px solid rgb(118, 148, 9);

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: box-shadow 250ms linear;
  }
`;
export const Button = styled.button`
  margin-top: 44px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  width: max-content;
  padding: 5px;
  color: rgb(118, 148, 9);
  background-color: rgb(228, 228, 216);
  border: 3px solid darkslateblue;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: box-shadow 250ms linear;
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
