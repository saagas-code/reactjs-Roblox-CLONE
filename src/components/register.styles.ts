import styled from "styled-components"

type Props = {
    color: string
}


export const Input = styled.input<{popup?: boolean}>`
    height: 40px;
    width: 100%;
    border: 2px;
    border-radius: 10px;
    background-color: black;
    border: 1px solid red;
    border-color: ${props => props.popup ? 'red' : '#707070'};
    margin-bottom: ${props => props.popup ? '2px' : '20px'};
    margin-top: 8px;
    color: white;
    padding-left: 10px;
    font-size: 20px;
    outline: 0;
`
export const User = styled.input<{popup?: boolean}>`
    border-color: ${props => props.popup ? 'red' : '#707070'};
`


export const Select = styled.select<{popup?: boolean}>`
    border-color: ${props => props.popup ? 'red' : '#707070'};
    margin-bottom: ${props => props.popup ? '2px' : '20px'};
`

export const Button =  styled.button<{popup?: boolean}>`
    border-color: ${props => props.popup ? 'red' : 'transparent'};
`

export const Error = styled.div<{popup?: boolean}>`
    font-size: 13px;
    color: #f14a44;
    margin-bottom: 20px;
    margin-top: 2px;
    display: ${props => props.popup ? 'block' : 'none'};
`

export const Error2 = styled.div<{popup?: boolean}>`
    font-size: 13px;
    color: #f14a44;
    margin-bottom: 20px;
    margin-top: 2px;
    display: ${props => props.popup ? 'block' : 'none'};
`
