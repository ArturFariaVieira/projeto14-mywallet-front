import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import { ResetCss } from "./resetcss.js"
import { userContext } from "./contexts/userContext.js"
import Signin from "./pages/Signin.js"
import Signup from "./pages/Singup.js"
import Balance from "./pages/Balance.js"
import Newentry from "./pages/Newentry.js"
import Newexit from "./pages/Newexit.js"


function App() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [confirm_password, setConfirm_password] = useState("")
  return (
    <BrowserRouter>
      <ResetCss />
      <userContext.Provider value={{confirm_password, setConfirm_password, name, setName, email, setEmail, senha, setSenha, loading, setLoading, token, setToken }}>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/sign-up" element = { <Signup />}/>
          <Route path="/balance" element = {<Balance/>}/>
          <Route path= "/newentry" element = { <Newentry/>}/>
          <Route path= "/newexit" element = { <Newexit/> }/>
        </Routes>
      </userContext.Provider>



    </BrowserRouter>

  )
}

export default App;
