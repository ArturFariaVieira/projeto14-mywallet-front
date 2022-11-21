import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import { ResetCss } from "./resetcss.js"
import { userContext } from "./contexts/userContext.js"
import Signin from "./pages/Signin.js"


function App() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  return (
    <BrowserRouter>
      <ResetCss />
      <userContext.Provider value={{name, setName, email, setEmail, senha, setSenha, loading, setLoading, token, setToken }}>
        <Routes>
          <Route path="/" element={<Signin />} />


        </Routes>
      </userContext.Provider>



    </BrowserRouter>

  )
}

export default App;
