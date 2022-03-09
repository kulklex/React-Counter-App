import styled from 'styled-components';


export const button1 = styled.button`
width: 50px;
height: 50px;
margin-right: 40px;
background-color: ${(props)=> props.backgroundColor};

&:hover {
    background-color: red;
}
`;


export const button2 = styled.button`
width: 50px;
height: 50px;
background-color: ${(props)=> props.backgroundColor};

&:hover {
    background-color: red;
}
`;