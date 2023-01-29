import styled from 'styled-components';
export const Container = styled.div`
  padding: 20px;
`;
export const Button = styled.button`
  border: none;
  border-radius: 8px;
  box-shadow: 4px 4px 8px -1px rgba(36, 36, 36, 0.5);
  padding: 8px;
  cursor: pointer;
  font-size: 24px;
  &:not(:last-child) {
    margin-right: 16px;
  }
`;
