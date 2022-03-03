import { VFC } from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`

const Header: VFC = () => {
  return <HeaderWrapper>yatoi</HeaderWrapper>
}

export default Header