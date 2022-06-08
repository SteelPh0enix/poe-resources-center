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
  color: #6d2200;
  width: 100%;
  height: 100%;
  display: block;

  &:hover {
  };
`

export default function SidebarLink (props: SidebarLinkProps): React.ReactElement {
  return (
    <SidebarItem><SidebarLinkComponent href={props.href} >{props.children}</SidebarLinkComponent></SidebarItem>
  )
}
