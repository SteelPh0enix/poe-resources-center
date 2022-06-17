import styled from 'styled-components'

export const PageWrapper = styled.div`
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.fontColor};

  font-family: ${props => props.theme.fontName};
  font-size: ${props => `${props.theme.fontSize}pt`};

  scroll-behavior: ${props => props.theme.smoothScrollingEnabled ? 'smooth' : 'auto'};

  scrollbar-color: ${props => props.theme.scrollbarColor} ${props => props.theme.scrollbarBackgroundColor};
  scrollbar-width: 12px;

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.scrollbarColor};
  }
   
  &::-webkit-scrollbar-track {
    background: ${props => props.theme.scrollbarBackgroundColor};
  }

  @media(max-width: 1000px) {
    font-size: ${props => `${props.theme.fontSize}pt`};
  }

  a {
    color: ${props => props.theme.fontLinkColor};
    font-weight: ${props => props.theme.fontLinkIsBold ? 'bold' : 'normal'};
    text-decoration: ${props => props.theme.fontLinkHasUnderscore ? 'underline' : 'none'};

    transition: ${props => (props.theme.animationsEnabled && props.theme.fontAnimationsEnabled) ? 'all' : 'none'};
    transition-duration: ${props => props.theme.fontAnimationsDuration};

    &:hover, &:active {
      color: ${props => props.theme.fontLinkActiveColor};
    }
  }

  // add an arrow to indicate that the link is external
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

    transition: ${props => (props.theme.animationsEnabled && props.theme.buttonAnimationsEnabled) ? 'all' : 'none'};
    transition-duration: ${props => props.theme.buttonAnimationsDuration};

    &:hover {
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

    transition: ${props => (props.theme.animationsEnabled && props.theme.inputAnimationsEnabled) ? 'all' : 'none'};
    transition-duration: ${props => props.theme.inputAnimationsDuration};

    &::placeholder {
      color: ${props => props.theme.inputPlaceholderFontColor};
    }

    &:active, &:focus {
      color: ${props => props.theme.inputActiveFontColor};
      border-color: ${props => props.theme.inputActiveBorderColor};
      background-color: ${props => props.theme.inputActiveBackgroundColor};
    }
  }

  table {
    table-layout: auto;
    color: ${props => props.theme.tableFontColor};
    border-collapse: collapse;
    border: 3px solid ${props => props.theme.tableBorderColor};
    

    caption {
      font-size: larger;
    }

    thead {
      background-color: ${props => props.theme.tableHeaderBackgroundColor};
      tr {
        th {
          padding: 10px;
          font-size: large;
        }

        border-bottom: 3px solid ${props => props.theme.tableHeaderSeparatorColor};
      }
    }

    tbody {
      tr {
        td {
          padding: 5px;
        }
      }

      tr:nth-child(odd) {
        background-color: ${props => props.theme.tableOddRowsBackgroundColor};
      }

      tr:nth-child(even) {
        background-color: ${props => props.theme.tableEvenRowsBackgroundColor};
      }
    }

    td + td, th + th {
      border-left: ${props => props.theme.tableColumnLineEnabled ? '2px solid' + props.theme.tableColumnLineColor : 'none'};
    }

    tr + tr {
      border-top: ${props => props.theme.tableRowLineEnabled ? '1px dashed' + props.theme.tableRowLineColor : 'none'};
    }
  }
`
