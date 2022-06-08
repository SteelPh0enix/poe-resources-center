import React from 'react'
import Header from '../components/header'
import styled from 'styled-components'
import '@fontsource/lato'
import Sidebar from '../components/sidebar'
import LoremIpsum from 'react-lorem-ipsum'
import SearchBar from '../components/searchbar'

const PageContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: start;
`

const PageWrapper = styled.div`
  background-color: #696969;
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
      <Header><HeaderText>This is the site header</HeaderText></Header>
      <Header justify='left' sticky addMargin><SearchBar/>Hello, world! This is a subheader.</Header>
      <PageContainer>
        <Sidebar>
          <p>This is sidebar</p>
          <LoremIpsum p={2} />
        </Sidebar>
        <PageMain>
          {children}
        </PageMain>
      </PageContainer>
    </PageWrapper>
  )
}
