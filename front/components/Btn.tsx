const styled = require('styled-components').default

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// We're extending Button with some extra styles
export const TomatoButton = Button.extend`
  color: tomato;
  border-color: tomato;
`;
