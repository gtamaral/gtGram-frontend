//css
import "./Auth.css";

//components
import {Link} from 'react-router-dom';
import Message from "../../components/Message";

//hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//redux
import { register, reset } from "../../slices/authSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const dispatch = useDispatch()

  const {loading, error} = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    }

    console.log(user)

    dispatch(register(user))
  };

  //clean all of states
  useEffect(() => {

    dispatch(reset());
  }, [dispatch]);

  return (
    <div id="register">
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form" onSubmit={handleSubmit}>
            <h2>Gtgram</h2>
            <p className="subtitle">Cadastre para se conectar!</p>

            <div className="wrap-input">

              <p>Digite seu nome <span>*</span></p>
              <input className="input" type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} value={name}/>
              <span className="focus-input"></span>

            </div>
            
            <div className="wrap-input">
              <p>Digite seu melhor email <span>*</span></p>
              <input className="input" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
              <span className="focus-input"></span>
            </div>
            
            <div className="wrap-input">
              <p>Digite sua senha <span>*</span></p>
              <input className="input"  type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password}  />
              <span className="focus-input"></span>
            </div>

            <div className="wrap-input">
              <p>Confirme sua senha <span>*</span></p>
              <input className="input"  type="password" placeholder="senha" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
              <span className="focus-input"></span>
            </div>

          {!loading && <input type="submit" value="Cadastrar"/>}
          {loading && <input type="submit" value="Aguarde..." disabled />}
          {error && <Message msg={error} type="error" />}
          </form>

          <p className="call-register">
            Já tem conta? <Link to="/login">Clique aqui</Link> para logar na sua conta.
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register