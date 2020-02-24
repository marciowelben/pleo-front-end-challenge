import styled from 'styled-components'

export const Wrapper = styled.div`
  background: linear-gradient(180deg, rgba(11, 51, 73, 1) 0%, rgba(0, 0, 0, 1) 100%);
  min-height: 100vh;
  padding-bottom: 50px;
`

export const Header = styled.div`
  padding: 50px 0;
`

export const Button = styled.button<{ isSelected: boolean }>`
  border: none;
  background: ${({ isSelected }) => (isSelected ? 'rgba(11, 51, 73, 1)' : 'white')};
  color: ${({ isSelected }) => (!isSelected ? 'rgba(11, 51, 73, 1)' : 'white')};
  font-size: 12px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  outline: 0 !important;
  margin: 10px;
`
