import styled from 'styled-components'

export const PageWrapper = styled.div`
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.fontColor};
  font-family: 'Lato';
  scroll-behavior: ${props => props.theme.smoothScrollingEnabled ? 'smooth' : 'auto'};

  a {
    color: ${props => props.theme.fontLinkColor};
    font-weight: ${props => props.theme.fontLinkIsBold ? 'bold' : 'normal'};
    text-decoration: ${props => props.theme.fontLinkHasUnderscore ? 'underline' : 'none'};
    transition: ${props => (props.theme.animationsEnabled && props.theme.fontAnimationsEnabled) ? 'all' : 'none'};
    transition-duration: ${props => props.theme.fontAnimationsDuration};

    :active, :hover, :focus {
      color: ${props => props.theme.fontLinkActiveColor};
    }
  }

  // add an arrow to indicate the link is external
  a[href]:not(:where(
    [href^='#'],
    [href^='/']:not([href^='//']),
  )):after {
    content: ' ' url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAVklEQVR4Xn3PgQkAMQhDUXfqTu7kTtkpd5RA8AInfArtQ2iRXFWT2QedAfttj2FsPIOE1eCOlEuoWWjgzYaB/IkeGOrxXhqB+uA9Bfcm0lAZuh+YIeAD+cAqSz4kCMUAAAAASUVORK5CYII=) ' ';
  }

  button {
    color: ${props => props.theme.buttonFontColor};
    background-color: ${props => props.theme.buttonColor};
    border: ${props => props.theme.buttonHasBorder ? 'solid' : 'none'};
    border-color: ${props => props.theme.buttonBorderColor};
    animation-duration: 200ms;

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
