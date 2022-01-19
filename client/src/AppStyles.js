import styled from 'styled-components'

export const EverythingButtNav = styled.div`
filter: ${({ isOpen }) => isOpen ? 'blur(5px)' : 'blur(0px)'};
`
export const App = styled.div`
    background-color: #0a0908;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: white;
`