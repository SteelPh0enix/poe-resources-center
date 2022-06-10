import * as React from 'react'
import styled from 'styled-components'

const SearchBarComponent = styled.input`
  background-color: white;
  color: black;

  transition: ${props => (props.theme.animationsEnabled && props.theme.searchBarAnimationEnabled) ? 'all' : 'none'} ${props => props.theme.searchBarAnimationDuration};

  &.hidden {
    display: none;
  }

  &:active, &:focus {
    flex: 1 1 15%;
  }
`

export default function SearchBar (): React.ReactElement {
  return (
    <SearchBarComponent type='text' placeholder='Search'/>
  )
}
