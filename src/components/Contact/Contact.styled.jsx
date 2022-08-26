import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 18px;
  color: rgb(118, 148, 9);

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: box-shadow 250ms linear;
  }
`;
export const ContactNumber = styled.h2`
  padding-left: 5px;
`;
export const ContactButton = styled.button`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  width: max-content;
  padding: 5px;
  background-color: rgb(228, 228, 216);
  color: rgb(118, 148, 9);
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
