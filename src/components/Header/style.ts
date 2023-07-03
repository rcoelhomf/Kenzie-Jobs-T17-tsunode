import styled from "styled-components"

interface StyledImgProps {
    width?: string;
    height?: string;
}

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 10px;

    width: 100%;
`

export const StyledImg = styled.img<StyledImgProps>`
    width: ${(props) => props.width || "69px"};
    height: ${(props) => props.height || "30px"};
`;