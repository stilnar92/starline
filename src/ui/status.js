import styled from 'styled-components';

export const Status = styled.div`
    width: 10px;
    height:10px;
    background: ${props => props.theme.color.status};
    border-radius: 50%;
`;