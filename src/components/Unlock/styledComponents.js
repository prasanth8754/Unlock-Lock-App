import styled from 'styled-components'

// import {BgCont, Img, Para, Btn}

export const BgCont = styled.div`
    background-image:linear-gradient(#0b0c1e,#3c2940);
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const Img = styled.img`
    width:100px;
`
export const Para = styled.p`
    color:#e2e8f0;
    font-size:20px;
    text-align:center;
    font-family:"Roboto";
`
export const Btn = styled.button`
    background-color:#06b6d4;
    border:0px;
    outline:none;
    cursor:pointer;
    border-radius:5px;
    color:#ffffff;
    height:35px;
    width:auto;
    padding:0px 15px 0px;
    margin-top:50px;
`
