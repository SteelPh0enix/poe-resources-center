import * as React from 'react'
import LoremIpsum from 'react-lorem-ipsum'
import styled from 'styled-components'

const SidebarComponent = styled.div`

`

export default function Sidebar(): React.ReactElement {
  return (
    <SidebarComponent>
      <p>This is sidebar</p>
      <LoremIpsum p={2} />
    </SidebarComponent>
  )
}