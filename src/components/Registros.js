import Styled from "styled-components";

export default function Registro({id, date, type, text, value, deletar}) {
    return (
    <Caixaregistro>
        <h1> {date }</h1>
        <h2> {text} </h2>
        <H3 type = {type}> {Number(value).toFixed(2)} </H3>
        <h4 onClick={() => deletar(id)}> X </h4>

    </Caixaregistro>
)}


const Caixaregistro = Styled.div`
width: 300px;
height: 30px;
display: flex;
justify-content: space-between;
padding: 5px;
box-sizing: border-box;
margin-top: 5px;
h1{
    width: 30px;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-size: 15px;
    font-weight: 400;
    line-height: 19px;
    color: #C6C6C6;
    
}
h2 {
    width: 110px;
    margin-left: 10px;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-size: 15px;
    font-weight: 400;
    line-height: 19px;
    color: #000000;
}
h4 {
    width: auto;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-size: 15px;
    font-weight: 400;
    line-height: 19px;
    color: #C6C6C6;
}
h4:hover{
    cursor: pointer;
}`
const H3 = Styled.text`

    width: 62px;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-size: 15px;
    font-weight: 400;
    line-height: 19px;
    color: ${(props) => props.type == "E"? "#03AC00": "#C70000" };
`
