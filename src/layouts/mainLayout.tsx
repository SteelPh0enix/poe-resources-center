import React from "react"
import Header from "../components/header"
import styled from "styled-components"
import "@fontsource/lato"
import Sidebar from "../components/sidebar"

const PageContainer = styled.div`

`

const PageWrapper = styled.div`
  background-color: #454545;
  font-family: "Lato";
`

const PageMain = styled.main`
  
`

const HeaderText = styled.h1`
    margin: 0;
`

export default function MainLayout({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <PageWrapper>
      <Header><HeaderText>This is the site header</HeaderText></Header>
      <PageContainer>
        <Sidebar></Sidebar>
        <PageMain>
          {children}
        </PageMain>
      </PageContainer>
    </PageWrapper>
  )
}