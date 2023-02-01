import styled from "@emotion/styled";

export const AppDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
    // padding-bottom: 24px;

    text-align:center;
    color: darkolivegreen;
    background-color: lightgray;
    
    div:first-of-type {
        justify-content: center;
    }

    footer {
        height: 72px;
        background-color: darkolivegreen;
    }
`;