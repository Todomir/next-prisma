import styled from 'styled-components'

export const Main = styled.main`
  width: 50vw;

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      text-align: right;
    }
  }
`
export const Iframe = styled.iframe`
  margin-bottom: 3.2ch;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.primary};
`
export const Button = styled.button`
  padding: 1.2ch 1.5ch;
  border: none;
  background-color: ${props => props.theme.colors.primary};
  font: 700 16px Roboto, sans-serif;
  cursor: pointer;
  transition: 0.4s;

  & ::before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f060';
    padding-right: 1ch;
    transition: 0.25s;
  }

  & :hover {
    padding: 1.25ch 1.55ch;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);

    & ::before {
      padding-right: 1.5ch;
    }
  }
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin-bottom: 2ch;
  cursor: pointer;
  transition: 0.2s;

  h2 {
    color: ${props => props.theme.colors.primary};
  }

  img {
    width: 10ch;
    height: 10ch;
    margin-right: 3ch;
    border-radius: 10%;
    transition: 0.4s;
  }

  & :hover {
    padding: 1.25ch;
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);

    img {
      border-radius: 15%;
    }
  }
`
