import styled from 'styled-components';

interface HighlightProps {
  i?: boolean;
  b?: boolean;
  size?: string;
  underline?: boolean;
  color?: string;
}

export default styled.span<HighlightProps>`
  color: ${({ color }) => color || '#902e2d'};
  font-style: ${(props) => (props.i ? 'italic' : 'normal')};
  font-weight: ${(props) => (props.b ? 'bold' : 'normal')};
  font-size: ${(props) => (props.size ? props.size + 'rem' : 'inherit')};
  ${({ underline }) => underline && 'text-decoration: underline;'}
`;
