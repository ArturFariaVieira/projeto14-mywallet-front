import Styled from "styled-components";
import { useContext } from "react";
import { userContext } from "../contexts/userContext"
import axios from "axios";
import { Constantes } from "../constants/constants"
import { Link, useNavigate } from "react-router-dom";



export default function Signup() {

    const { confirm_password, setConfirm_password,  name, setName, setEmail, setSenha, email, senha, loading, setLoading, setToken } = useContext(userContext)
    const { URLsignup } = Constantes;
    const Navigate = useNavigate();



    function doSignup(e) {
        e.preventDefault();
        setLoading(true);
        let body = {
            name: name,
            email: email,
            password: senha,
            password_confirmation: confirm_password
        };
        let promise = axios.post(URLsignup, body);
        promise.then((res) => {
            setLoading(false)
            alert("Cadastro efetuado! Faça login.")
            Navigate("/");
        }).catch((err) => {
            console.log(err);
            setLoading(false);
            if(err.response.status == 409){
                alert("Email já cadastrado! Fazer login ou usar cadastrar outro email")
            }
            if(err.response.status == 422){
                alert("Dados inválidos!")
            }
    })

    }


    return (

        <Pagina>
            <Caixalogo>
                <h1>MY WALLET</h1>
            </Caixalogo>
            <Caixaformulario>
                <form onSubmit={doSignup}>
                    <label htmlFor="name" ></label>
                    <input
                        disabled={loading}
                        id="name"
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text"
                        required
                    />
                    <label htmlFor="email" ></label>
                    <input
                        disabled={loading}
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        required
                    />
                    <label htmlFor="senha" ></label>
                    <input
                        disabled={loading}
                        id="senha"
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        type="password"
                        required
                    />
                    <label htmlFor="confirm_password" ></label>
                    <input
                        disabled={loading}
                        id="confirm_password"
                        placeholder="Confirme a senha"
                        value={confirm_password}
                        onChange={e => setConfirm_password(e.target.value)}
                        type="password"
                        required
                    />

                    <button type="submit" disabled={loading} >  Cadastrar </button>

                </form>
            </Caixaformulario>
            <Link to="/">
                <Caixalink>
                    <h1> Já tem uma conta? Entre agora!</h1>
                </Caixalink>
            </Link>
        </Pagina>

    )
}

const Pagina = Styled.div`
height: 667px;
width: 375px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #8C11BE;

a{
    text-decoration: none;
    color: #52B6FF;
}
`;

const Caixalogo = Styled.div`
height: 50px;
width: auto;
margin-top: -60px;
margin-bottom: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1 {
    font-family: 'Saira Stencil One', cursive;
    font-style: normal;
    font-size: 32px;
    font-weight: 400;
    line-height: 50px;
    color: #FFFFFF;
    
}`;

const Caixaformulario = Styled.div`
height: auto;
width: 375px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
form{
    width: 375px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    input{
        width: 326px;
        height: 58px;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        color: black;
        border: solid 1px #D5D5D5;
        margin-bottom: 6px;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 11px;
    }
    button{
    width: 326px;
    height: 46px;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
    background-color: #A328D6; 
    color: #FFFFFF;
    margin-bottom: 25px;
    text-align: center;
    border-radius: 5px;

    }
    
    
    
}
`;
const Caixalink = Styled.div`
height: 17px;
width: 300px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
h1{
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    color: #FFFFFF;
    text-decoration: none;
    
}

`;

