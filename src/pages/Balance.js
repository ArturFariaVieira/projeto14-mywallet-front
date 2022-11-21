import Styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { userContext } from "../contexts/userContext"
import axios from "axios";
import { Constantes } from "../constants/constants"
import { Link, useNavigate } from "react-router-dom";
import  logouticon  from "../assets/images/logouticon.svg";
import Registros from "../components/Registros.js"
import Footer from "../components/Footer.js"





export default function Balance() {

    const { name, token, setLoading, setEmail, setName, setToken, setSenha } = useContext(userContext)
    const { URLbalance } = Constantes;
    const [balanco, setBalanco] = useState([]);
    const [total, setTotal] = useState("");
    const [atualizar, setAtualizar] = useState(false)
    const Navigate = useNavigate();
    let config = {
        headers: {Authorization: `Bearer ${token}`}
    }
    useEffect(() => {
        

        const promise = axios.get(URLbalance, config);
        promise.then((res) => {
            
            setBalanco(res.data.registros)
            setTotal(res.data.total)
            setAtualizar(false)
            
            
        }).catch((err) => {
            if(err.response.status == 401 ){
                alert("Você não está mais logado, favor fazer login");
                setLoading(false)

            }
            Navigate("/")
        })

    }, [atualizar]);

    let logout = function fazerlogout(){
        window.confirm("Tem certeza que deseja sair?")
        setToken("");
        setName("");
        setEmail("");
        setSenha("")
        Navigate("/")
    }
   let deletar =  function deleteRegistro(id){
        window.confirm("Tem certeza que deseja apagar esse registro?");
        let URL = `http://localhost:5000/registros/${id}`;
        let promise = axios.delete(URL, config);
        promise.then(() => {
            alert("Registro excluído com sucesso");
            setAtualizar(true)
            Navigate("/balance");

        }).catch((err) => {
            alert("Nao foi possível excluir o registro");
            Navigate("/balance")
        })
    }




    return (

        <Pagina>
            <Header>
                <h1>Olá, {name} </h1>
                <h2 onClick={logout}> <img src = {logouticon}/> </h2>

            </Header>
            <Caixabalanco tamanho = {balanco.length}>
                {balanco.length === 0? "Não há registros de entrada ou saída" : balanco.map((registro) => <Registros deletar = {deletar}  id = {registro._id} date = {registro.date} text = {registro.text} value= {registro.value} type= {registro.type}/>) } 
                <Caixaregistro>
                     <h1> SALDO </h1>
                     <H2 total = {total}> {total} </H2>
                </Caixaregistro>
            </Caixabalanco>
            
            
            <Caixafooter>
                <Footer/>
            </Caixafooter>
            
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
    
}
h2 {
    color: #FFFFFF;
    height: 23px
}
h2:hover{
    cursor: pointer;
}`;

const Caixabalanco = Styled.div`
height: 446px;
width: 326px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: ${(props) => props.tamanho === 0? "center": ""};
position: relative;
background-color: #FFFFFF;
border-radius: 10px;
`; 
const Caixafooter = Styled.div`
height: 114px;
width: 326px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px;
box-sizing: border-box;

`;
const Caixaregistro = Styled.div`
width: 300px;
height: 30px;
display: flex;
justify-content: space-between;
padding: 5px;
box-sizing: border-box;
margin-top: 5px;
position: absolute;
bottom: 5px;
h1{
    width: 57px;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
    color: #000000;
    
}`

const H2 = Styled.text`

    width: auto;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    color: ${(props) => props.total>0? "#03AC00": "#C70000" };
`