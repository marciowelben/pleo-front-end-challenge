import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  border-radius: 30px;
  height: 45px;
  background: rgba(11, 51, 73, 1);
  position: relative;
  border: 1px solid transparent;
  z-index: 1;
  outline: none;
  padding-left: 55px;
  color: white;
  font-size: 0.8rem;
  &:focus {
    border-color: rgba(132, 167, 186, 0.2);
  }
  ::placeholder {
    color: white;
    opacity: 0.5;
  }
`

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 30px 0;
  &:before {
    content: ' ';
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;
    border-radius: 30px;
    box-shadow: -8px -8px 18px 0px rgba(132, 167, 186, 0.2);
    position: absolute;
    z-index: 0;
  }
  &:after {
    content: ' ';
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;
    border-radius: 30px;
    box-shadow: 8px 8px 16px 0px rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 0;
  }
`

export const PrefixIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 25px;
  z-index: 2;
`

export const SuffixIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 25px;
  z-index: 1;
`
