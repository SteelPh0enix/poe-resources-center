import * as React from 'react'
import styled from 'styled-components'
import { SidebarItem } from './sidebarItem'

interface SidebarLinkProps {
  href: string,
  children: React.ReactNode
}

export const SidebarExternalLinkComponent = styled.a`
  margin: 0px 5px 0px 5px;
  color: ${props => props.theme.sidebarLinkColor} !important;
  width: 100%;
  height: 100%;
  display: block;

  &:hover, &:active {
    color: ${props => props.theme.sidebarLinkActiveColor} !important;
  };
`

export default function SidebarExternalLink (props: SidebarLinkProps): React.ReactElement {
  return (
    <SidebarItem><SidebarExternalLinkComponent href={props.href} >{props.children}</SidebarExternalLinkComponent></SidebarItem>
  )
}
