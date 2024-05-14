import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    wor-break: break-all;

    svg{
        width: 18px;
        height: 18px;
    }



`;