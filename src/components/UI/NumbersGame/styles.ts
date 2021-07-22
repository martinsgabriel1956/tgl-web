import styled from 'styled-components';

export const Container = styled.button`
    background: ${props => props.color};
    color: white;
    width: 50px;
    height: 50px;
    
    border-radius: 50%;
    font-weight: bold;
    margin: 6px;
    font-size: 20px;

    cursor: pointer;
    border: none;

    @media (max-width: 767px) {
        width: 42px;
        height: 42px;

        font-size: 18px;
    }
`;
