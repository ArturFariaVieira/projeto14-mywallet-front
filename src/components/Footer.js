import Styled from "styled-components";
import { Link } from "react-router-dom";
import circleicon from "../assets/images/circleicon.svg"
import plusicon from "..//assets/images/plusicon.svg"
import minusicon from "../assets/images/minusicon.svg"

export default function Footer() {
    return (
        <Caixafooter>
            <Link to= "/newentry">
            <Caixaentrada>
                <h1> <img src= {circleicon}/> </h1>
                <h2> <img src= {plusicon}/>  </h2>
                <h3> Nova entrada </h3>
            </Caixaentrada>
            </Link>
            <Link to= "/newexit">
            <Caixasaida>
                <h1> <img src = {circleicon}/> </h1>
                <h2> <img src= { minusicon}/>  </h2>
                <h3> Nova saída </h3>

            </Caixasaida>
            </Link>



        </Caixafooter>

    )
}

const Caixafooter = Styled.div`
height: 114px;
width: 326 px;
position: absolute;
margin-top: 10px;
margin-left: 10px;
padding: 10px;
box-sizing: border-box;
display:flex;
a{
    text-decoration: none;
}
`
const Caixaentrada = Styled.div`
height: 114px;
width: 155px;
display:flex;
margin-right: 15px;
position: relative;
background-color: #A328D6;
border-radius: 10px;
h2  {
    height: 22px;
    color: #FFFFFF;
    position: absolute;
    top: 12px;
    left: 16px;
}
h1  {
    height: 22px;
    color: #FFFFFF;
    position: absolute;
    top: 9px;
    left: 10px;
}
h3{
    width: 80px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 17px;
    text-align: left;
    display:flex;
    position: absolute;
    bottom: 9px;
    left: 10px;
    color: #FFFFFF;
}`
const Caixasaida = Styled.div`
height: 114px;
width: 155px;
display:flex;
margin-right: 15px;
position: relative;
border-radius: 10px;
background-color: #A328D6;
h2  {
    height: 22px;
    color: #FFFFFF;
    position: absolute;
    top: 8px;
    left: 16px;
    
}
h1  {
    height: 22px;
    color: #FFFFFF;
    position: absolute;
    top: 9px;
    left: 10px;
}
h3{
    width: 80px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 17px;
    text-align: left;
    display:flex;
    position: absolute;
    bottom: 9px;
    left: 10px;
    color: #FFFFFF;
}`