import "./Auth.css";

//components
import {Link} from 'react-router-dom';
import Message from "../../components/Message";

//hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//redux
import {login, reset} from '../../slices/authSlice';


const Login = () => {
  
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  const {loading, error} = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(login(user));
  };

  //clean all auth states
  useEffect(() => {
    dispatch(reset())
  }, [dispatch]);

  return (
    <div id="login">
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form  className="login-form" onSubmit={handleSubmit}>
            <h2>Gtgram</h2>
            <p className="subtitle">Faça o login para ver o que há de novo!</p>

            <div className="wrap-input">
              <p className="title">Digite seu email <span>*</span></p>
              <input className="input" type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email || ""}/>
              <span className="focus-input"></span>
            </div>

            <div className="wrap-input">
              <p>Digite sua senha <span>*</span></p>
              <input className="input" type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password || ""} />
              <span className="focus-input"></span>
            </div>


            {!loading && <input type="submit" value="Entrar"/>}
            {loading && <input type="submit" value="Aguarde..." disabled />}
            {error && <Message msg={error} type="error" />}
        </form>
        <p className="call-register">Ainda não tem conta? <Link to="/register">Clique aqui</Link> para criar uma.</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Login