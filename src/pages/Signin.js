import Styled from "styled-components";
import { useContext } from "react";
import { userContext } from "../contexts/userContext"
import axios from "axios";
import { Constantes } from "../constants/constants"
import { Link, useNavigate } from "react-router-dom";



export default function Signin() {

    const { setName, setEmail, setSenha, email, senha, loading, setLoading, setToken } = useContext(userContext)
    const { URLsignin } = Constantes;
   // const Navigate = useNavigate();



    function Fazerlogin(e) {
        e.preventDefault();
        setLoading(true);
        let body = {
            email: email,
            password: senha
        };
        let promise = axios.post(URLsignin, body);
        promise.then((res) => {

            setToken(res.data.token)
            setName(res.data.name)
            console.log(res.data)
            //Navigate("/balance");
        })

    }


    return (

        <Pagina>
            <Caixalogo>
                <h1>MY WALLET</h1>
            </Caixalogo>
            <Caixaformulario>
                <form onSubmit={Fazerlogin}>
                    <label htmlFor="email" ></label>
                    <input
                        disabled={loading}
                        id="email"
                        placeholder="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        required
                    />
                    <label htmlFor="senha" ></label>
                    <input
                        disabled={loading}
                        id="senha"
                        placeholder="senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        type="password"
                        required
                    />

                    <button type="submit" disabled={loading} >  Entrar </button>

                </form>
            </Caixaformulario>
            <Link to="/signup">
                <Caixalink>
                    <h1> Primeira vez? Cadastre-se!</h1>
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
z-index: 2;
a{
    text-decoration: none;
    color: #52B6FF;
}
`;

const Caixalogo = Styled.div`
height: 50px;
width: auto;
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
height: 170px;
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

