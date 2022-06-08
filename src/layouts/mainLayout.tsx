import React from 'react'
import Header from '../components/header'
import styled from 'styled-components'
import '@fontsource/lato'
import Sidebar from '../components/sidebar'
import LoremIpsum from 'react-lorem-ipsum'
import SearchBar from '../components/searchbar'
import { SidebarItem } from '../components/sidebar/sidebarItem'
import SidebarLink from '../components/sidebar/sidebarLink'

const PageContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: start;
`

const PageWrapper = styled.div`
  background-color: #000000;
  color: #A38D6D;
  font-family: 'Lato';
`

const PageMain = styled.main`
  padding: 10px 10px 10px 20px;
`

const HeaderText = styled.h1`
  margin: 0;
`

export default function MainLayout ({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <PageWrapper>
      <Header><HeaderText>Path of Exile Resources Center</HeaderText></Header>
      <Header justify='left' sticky addMargin><SearchBar/>Hello, world! This is a subheader.</Header>
      <PageContainer>
        <Sidebar>
          <SidebarItem><p>This is sidebar</p></SidebarItem>
          <SidebarLink href="/">Go to main page</SidebarLink>
          <SidebarItem><LoremIpsum p={10} /></SidebarItem>
        </Sidebar>
        <PageMain>
          {children}
        </PageMain>
      </PageContainer>
    </PageWrapper>
  )
}
