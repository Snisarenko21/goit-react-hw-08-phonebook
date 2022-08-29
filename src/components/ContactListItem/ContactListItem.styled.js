import styled from 'styled-components';

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  color: rgba(0, 0, 0, 0.87);
  font-size: 20px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Link = styled.a`
  margin-right: 15px;
  color: inherit;
  text-decoration: none;
`;
