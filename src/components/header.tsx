import * as React from 'react'
import styled from 'styled-components'

interface HeaderProps {
  children?: React.ReactNode
  justify?: string
  sticky?: boolean
  addMargin?: boolean
}

const HeaderComponent = styled.div`
  margin: 0;
  padding: 0.5em 3em 0.5em 3em;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: baseline;
  gap: 20px;
  
  color: ${props => props.theme.headerFontColor};
  background-color: ${props => props.theme.headerColor};
  
  a {
    color: ${props => props.theme.headerLinkColor};
    
    :active :hover :focus {
      color: ${props => props.theme.headerLinkActiveColor};
    }
  }

  &.right-just {
    justify-content: right;
    padding-right: 15px;
  }

  &.left-just {
    justify-content: left;
    padding-left: 15px;
  }

  &.sticky {
    @media(min-width: 1000px) {
      position: sticky;
      left: 0;
      top: 0;
    }
  }

  &.bottom-margin {
    margin-bottom: 0.5em;
  }

  @media(max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    padding: 10px 10px 10px 10px;
  }
`

export default function Header (props: HeaderProps): React.ReactElement {
  let headerClasses = ''

  if (props.justify === 'left') {
    headerClasses += 'left-just '
  } else if (props.justify === 'right') {
    headerClasses += 'right-just '
  }

  if (props.sticky) {
    headerClasses += 'sticky '
  }

  if (props.addMargin) {
    headerClasses += 'bottom-margin '
  }

  return (
    <HeaderComponent className={headerClasses}>{props.children}</HeaderComponent>
  )
}
