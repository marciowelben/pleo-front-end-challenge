import styled from 'styled-components'
import { Col } from 'react-bootstrap'

export const CommentWrapper = styled(Col)`
  padding: 30px 0 !important;
  position: relative;
`

export const CommentContent = styled.div`
  font-size: 0.8rem;
  color: rgba(150, 163, 170, 1);
`
export const CommentTitle = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
`

export const CommentAction = styled.div`
  position: absolute;
  top: 30px;
  left: -70px;
  flex-direction: column;
  display: flex;
`

export const VerticalSpacing = styled.div`
  height: 10px;
`

export const InputComment = styled.textarea`
  width: 100%;
  border-radius: 9px;
  background: rgba(11, 51, 73, 1);
  position: relative;
  border: 1px solid transparent;
  z-index: 1;
  outline: none;
  padding: 10px 20px;
  color: white;
  font-size: 0.8rem;
  &:focus {
    border-color: white;
  }
  ::placeholder {
    color: white;
    opacity: 0.5;
  }
`
