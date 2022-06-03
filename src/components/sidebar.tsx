import * as React from 'react'
import styled from 'styled-components'

const SidebarComponent = styled.aside`
  position: sticky;
  top: 0;
  padding: 10px 10px 10px 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 10px;
  background-color: #333333;
  color: white;
  align-self: start;
`

export default function Sidebar ({ children }: {children: React.ReactNode}): React.ReactElement {
  return (
    <SidebarComponent>
      {children}
    </SidebarComponent>
  )
}
