import React from 'react'
import Header from '../components/header'
import styled, { ThemeProvider } from 'styled-components'
import '@fontsource/lato'
import Sidebar from '../components/sidebar'
import LoremIpsum from 'react-lorem-ipsum'
import SearchBar from '../components/searchbar'
import { SidebarItem } from '../components/sidebar/sidebarItem'
import SidebarLink from '../components/sidebar/sidebarLink'
import { PathOfExileTheme } from '../themes/pathofexile'
import { PageWrapper } from './pageWrapper'
import { Link } from 'gatsby'
import SidebarExternalLink from '../components/sidebar/sidebarExternalLink'

const PageContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: start;
`

const PageMain = styled.main`
  padding: 10px 10px 10px 20px;
`

const HeaderText = styled(props => <Link {...props} />)`
  font-size: 36pt;
  text-decoration: none !important;
  margin: 0;
`

const HeaderPad = styled.div`
  flex: 1 1 35%;

  @media(max-width: 1300px) {
    flex: 0 0 0px;
  }
`

export default function MainLayout ({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <ThemeProvider theme={PathOfExileTheme}>
      <PageWrapper>
        <Header>
          <HeaderText to='/'>Path of Exile Resources Center</HeaderText>
        </Header>
        <Header justify='right' sticky addMargin>
          <HeaderPad/>
          <div>Hello, world! This is a subheader.</div>
          <Link to="/">Go to main page</Link>
          <a href='https://google.com/'>This is an external link</a>
          <SearchBar/>
        </Header>
        <PageContainer>
          <Sidebar>
            <SidebarItem><p>This is sidebar</p></SidebarItem>
            <SidebarLink to="/">Go to main page</SidebarLink>
            <SidebarLink to="/achievementsChart">See achievements chart</SidebarLink>
            <SidebarExternalLink href="https://google.com/">External link</SidebarExternalLink>
            <SidebarItem><LoremIpsum p={10} /></SidebarItem>
          </Sidebar>
          <PageMain>
            {children}
          </PageMain>
        </PageContainer>
      </PageWrapper>
    </ThemeProvider>
  )
}
