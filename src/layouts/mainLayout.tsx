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

const PageContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: start;
`

const PageWrapper = styled.div`
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.fontColor};
  font-family: 'Lato';

  a {
    color: ${props => props.theme.fontLinkColor};
    font-weight: ${props => props.theme.fontLinkIsBold ? 'bold' : 'normal'};
    text-decoration: ${props => props.theme.fontLinkHasUnderscore ? 'underline' : 'none'};

    :active, :hover, :focus {
      color: ${props => props.theme.fontLinkActiveColor};
    }
  }

  // add an arrow to indicate the link is external
  a[href]:not(:where(
    [href^='#'],
    [href^='/']:not([href^='//']),
  )):after {
    content: " " url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAVklEQVR4Xn3PgQkAMQhDUXfqTu7kTtkpd5RA8AInfArtQ2iRXFWT2QedAfttj2FsPIOE1eCOlEuoWWjgzYaB/IkeGOrxXhqB+uA9Bfcm0lAZuh+YIeAD+cAqSz4kCMUAAAAASUVORK5CYII=);    
  }

  button {
    color: ${props => props.theme.buttonFontColor};
    background-color: ${props => props.theme.buttonColor};
    border: ${props => props.theme.buttonHasBorder ? 'solid' : 'none'};
    border-color: ${props => props.theme.buttonBorderColor};

    :hover {
      color: ${props => props.theme.buttonFontActiveColor};
      background-color: ${props => props.theme.buttonActiveColor};
      border-color: ${props => props.theme.buttonBorderActiveColor};
    }
  }
  
  input[type=text] {
    outline: none;
    color: ${props => props.theme.inputFontColor};
    background-color: ${props => props.theme.inputBackgroundColor};

    border: ${props => props.theme.inputHasBorder ? 'solid' : 'none'};
    border-color: ${props => props.theme.inputBorderColor};
    border-radius: 1px;

    :active, :focus {
      color: ${props => props.theme.inputActiveFontColor};
      border-color: ${props => props.theme.inputActiveBorderColor};
      background-color: ${props => props.theme.inputActiveBackgroundColor};

      ::placeholder {
        color: ${props => props.theme.inputPlaceholderFontColor};
      }
    }
  }
`

const PageMain = styled.main`
  padding: 10px 10px 10px 20px;
`

const HeaderText = styled.h1`
  margin: 0;
`

export default function MainLayout ({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <ThemeProvider theme={PathOfExileTheme}>
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
    </ThemeProvider>
  )
}
