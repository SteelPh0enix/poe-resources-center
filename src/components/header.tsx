import * as React from 'react'
import styled from 'styled-components'

const HeaderComponent = styled.div`
  margin: 0 0 1em 0;
  padding: 1em 5em 1em 5em;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: baseline;
  gap: 20px;
  background-color: #AAAAAA;
`

export default function Header ({ children }: {children: React.ReactNode}): React.ReactElement {
  return (
    <HeaderComponent>{children}</HeaderComponent>
  )
}
