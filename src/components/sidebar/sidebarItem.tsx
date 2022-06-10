import styled from 'styled-components'

export const SidebarItem = styled.div`
  white-space: normal;
  border-width: 3px;
  border-style: ${props => props.theme.sidebarItemHasBorder ? 'solid' : 'none'};
  border-color: ${props => props.theme.sidebarItemBorderColor};
  padding: 4px;
  margin: 4px;
  background-color: ${props => props.theme.sidebarItemColor};

  transition: ${props => (props.theme.animationsEnabled && props.theme.sidebarAnimationsEnabled) ? 'all' : 'none'};
  transition-duration: ${props => props.theme.sidebarAnimationsDuration};

  &:hover, &:active {
    background-color: ${props => props.theme.sidebarItemActiveColor};
    border-color: ${props => props.theme.sidebarItemBorderActiveColor};
  }

`
