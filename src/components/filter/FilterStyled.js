import styled from 'styled-components';

export const FilterContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.accentText};
`;

export const FilterInput = styled.input`
  width: 300px;
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal};
  :hover,
  :focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  }
`;