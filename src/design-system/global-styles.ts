import styled from 'styled-components/native';

interface Props {
    gap: string;
}

export const GapBox = styled.View`
    gap: ${({gap}: Props) => gap}
`;

