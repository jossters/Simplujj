import styled from 'styled-components'

export const EverythingButtNav = styled.div`
filter: ${({ isOpen }) => isOpen ? 'blur(5px)' : 'blur(0px)'};

`