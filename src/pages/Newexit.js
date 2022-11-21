import Styled from "styled-components";
import { useContext, useState } from "react";
import { userContext } from "../contexts/userContext"
import axios from "axios";
import { Constantes } from "../constants/constants"
import { Link, useNavigate } from "react-router-dom";



export default function Newexit() {

    const { token, loading, setLoading } = useContext(userContext)
    const { URLnewexit } = Constantes;
    const [ valor, setValor] = useState("")
    const [ text, setText] = useState("")
    const Navigate = useNavigate();



    function novasaida(e) {
        e.preventDefault();
        setLoading(true);
        let body = {
            value: valor,
            text: text,
            type: "S"
        };
        let config = {
            headers: {Authorization: `Bearer ${token}`}
        }
        let promise = axios.post(URLnewexit, body, config);
        promise.then((res) => {
            setLoading(false)
            alert("Saída adicionada com sucesso")
            Navigate("/balance");
        }).catch((err) => {
            console.log(err.response.status)
            if(err.response.status == 401 ){
                alert("Você não está mais logado, favor fazer login");
                setLoading(false)
            }
            Navigate("/")

        })

    }


    return (

        <Pagina>
            <Header>
                <h1>Nova Saída </h1>
            </Header>
            <Caixaformulario>
                <form onSubmit={novasaida}>
                    <label htmlFor="valor" ></label>
                    <input
                        disabled={loading}
                        id="valor"
                        placeholder="Valor"
                        value={valor}
                        onChange={e => setValor(e.target.value)}
                        type="number" min="0.00"  step="0.01"
                        required
                    />
                    <label htmlFor="text" ></label>
                    <input
                        disabled={loading}
                        id="text"
                        placeholder="Descrição"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        type="text"
                        required
                    />

                    <button type="submit" disabled={loading} >  Salvar saída </button>

                </form>
            </Caixaformulario>
            
        </Pagina>

    )
}

const Pagina = Styled.div`
height: 667px;
width: 375px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #8C11BE;
a{
    text-decoration: none;
    color: #52B6FF;
}
`;
const Header = Styled.div`
height: 70px;
width: 326px;
display: flex;
justify-content: space-between;
align-items: center;

h1 {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    color: #FFFFFF;
    
}`;

const Caixaformulario = Styled.div`
height: 170px;
width: 375px;
margin-top 50px;
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


