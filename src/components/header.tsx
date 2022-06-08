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
  padding: 1em 5em 1em 5em;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: baseline;
  gap: 20px;
  background-color: #AAAAAA;

  &.right-just {
    justify-content: right;
    padding-right: 15px;
  }

  &.left-just {
    justify-content: left;
    padding-left: 15px;
  }

  &.sticky {
    position: sticky;
    left: 0;
    top: 0;
  }

  &.bottom-margin {
    margin-bottom: 1em;
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
