import styled from 'styled-components'

export const TableHead = styled.thead``

export const TableRow = styled.tr`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`

export const TableInfo = styled.td`
  font-size: 0.7rem;
  vertical-align: middle !important;
  color: rgba(150, 163, 170, 1);
`

export const UserInfo = styled.td`
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
