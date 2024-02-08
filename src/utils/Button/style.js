import styled from 'styled-components'

export const ButtonDefault = styled.button`
  background-color: var(--mars);
  color: var(--text-4);
  width: 264px;
  height: 52px;
  border: none;
  border-radius: 6px;
  color: var(--text);
  font: var(--text-4);
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    background-color: var(--mars-dark);
    color: var(--gray-01);
  }
`
