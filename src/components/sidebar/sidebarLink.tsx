import * as React from 'react'
import styled from 'styled-components'
import { SidebarItem } from './sidebarItem'
import { Link } from 'gatsby'

interface SidebarLinkProps {
  href: string,
  children: React.ReactNode
}

export const SidebarLinkComponent = styled(props => <Link {...props} />)`
  margin: 0px 5px 0px 5px;
  color: ${props => props.theme.sidebarLinkColor} !important;
  width: 100%;
  height: 100%;
  display: block;

  &:hover, &:active {
    color: ${props => props.theme.sidebarLinkActiveColor} !important;
  };
`

export default function SidebarLink (props: SidebarLinkProps): React.ReactElement {
  return (
    <SidebarItem><SidebarLinkComponent to={props.href} >{props.children}</SidebarLinkComponent></SidebarItem>
  )
}
