import styled from 'styled-components';

export default styled.span`
  color: ${({ color }) => color || '#902e2d'};
  font-style: ${(props) => (props.i ? 'italic' : 'normal')};
  font-weight: ${(props) => (props.b ? 'bold' : 'normal')};
  font-size: ${(props) => (props.size ? props.size + 'rem' : 'inherit')};
  ${({ underline }) => underline && 'text-decoration: underline;'}
`;
