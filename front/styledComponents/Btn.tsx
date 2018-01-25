const styled = require('styled-components').default;

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  margin: 20px;
`;

export const GreenButton = Button.extend`
    color: #009688;
    border-color: #009688;
`;

export const RedButton = Button.extend`
  color: #EC407A;
  border-color: #EC407A;
`;

export const BlueButton = Button.extend`
  color: #7986CB;
  border-color: #7986CB;
`;
