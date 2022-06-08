import styled from 'styled-components'
import { SidebarLinkComponent } from './sidebarLink'

export const SidebarItem = styled.div`
  white-space: normal;
  border: 2px solid #b15500b2;
  padding: 4px;
  margin: 4px;
  background-color: #8b8b8bb1;

  &:hover {
    background-color: #adadadba;
    border-color: #ff7b00b1;

    ${SidebarLinkComponent} {
      color: #c54800;
    }
  }

`
