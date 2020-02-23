import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { IStyleProps } from './Interfaces'

export const TableRow = styled(Row)`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px;
`

export const RowDescription = styled(Row)<IStyleProps>`
  color: white;
  max-height: ${({ isExpanded }) => (isExpanded ? 'auto' : 0)};
  overflow: hidden;
  transition: 0.3s;
`

export const TableInfo = styled(Col)<IStyleProps>`
  font-size: 0.7rem;
  vertical-align: middle !important;
  color: rgba(150, 163, 170, 1);
  svg {
    transition: 0.3s;
    transform: ${({ isExpanded }) => (isExpanded ? 'rotate(180deg)' : '')};
  }
`

export const UserInfo = styled(Col)`
  font-size: 0.8rem;
  vertical-align: middle !important;
  font-weight: bold;
  color: rgba(100, 162, 196, 1);
  font-size: 1rem;
  span {
    font-weight: 400;
    color: white;
    font-size: 0.7rem;
  }
`

export const LetterAvatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid white;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(100, 162, 196, 1);
`

export const CommentWrapper = styled(Col)`
  padding: 30px 0 !important;
  font-size: 0.8rem;
  color: rgba(150, 163, 170, 1);
`
export const CommentTitle = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
`
