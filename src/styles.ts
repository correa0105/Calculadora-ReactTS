import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerContent = styled.div`
    background-color: #464646;
    width: 35rem;
    border-radius: 2rem;
    overflow: hidden;

    display: flex;
    flex-direction: column;

    -webkit-box-shadow: 10px 10px 14px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 14px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 14px 0px rgba(0,0,0,0.75);
`
export const ContainerDisplay = styled.div`
    background-color: #464646;
    height: 9rem;
    width: 100%;
    display: flex;
    align-items: flex-end;
`

export const ContainerTeclado = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1px;

    button:nth-child(17) {
        grid-area: 5 / 1 / 5 / 3;
    }
`

