import styled from 'styled-components';
// export const SpannedText = styled.span`
//   background-color: grey;
// `;

// export const Text = styled.p`
//   color: red;
//   font-size: 24px;
//   &:hover {
//     color: green;
//   }
//   &:hover ${SpannedText} {
//     background-color: tomato;
//   }
// `;

export const Text = styled.p`
  color: red;
  font-size: 24px;
  &:hover {
    color: green;
  }
`;

export const SpannedText = styled.span`
  background-color: grey;
  color: ${({ isRed }) => (isRed ? 'red' : 'blue')};
  ${Text}:hover & {
    background-color: tomato;
  }
`;
