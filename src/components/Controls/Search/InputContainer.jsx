import styled from "styled-components";

export const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;

    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 1.5rem;

    @media(min-width: 760px) {
        width: 280px;
        margin-bottom: 0;
    }
`;