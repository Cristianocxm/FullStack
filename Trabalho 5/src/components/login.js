import React from "react";
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background: #F0F2F5;
`;

const LoginBox = styled.div`
width: 350px;
padding: 40px;
background-color: white;
box-shadow: 0 4px 8px rgba(0,0,0,0.1);
text-align: center;
`;

const Title = styled.h2`
margin-botton: 20px;
color: #333;
`;

const Input = styled.input`
width: 100%;
padding: 10px;
margin: 10px 0;
border: 1px solid #ddd;
font-size: 16px
`;

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: #007bff;
color: white;
border: none;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
&:hover{
    background-color: #0056b3;
}
`;

function Login(){
    return(
        <Container>
            <LoginBox>
                <Title>Login</Title>
                <form>
                    <Input type="nome" placeholder="Nome" required/>
                    <Input type="password" placeholder="Password" required/>
                    <Button type="submit">Login</Button>
                    <Button type="submit">Cadastre-se</Button>
                </form>
            </LoginBox>
        </Container>
    );
}

export default Login;