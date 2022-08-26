import styled from '@emotion/styled';

export const Field = styled.input`
  height: 28px;
  font-size: 14px;
  color: rgb(94, 94, 155);
  border: 2px solid rgb(118, 148, 9);

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: box-shadow 250ms linear;
  }
`;
