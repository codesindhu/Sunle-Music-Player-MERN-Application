import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import HeadPhone from '../assets/img/headphones.svg';
import './css/Login.scss';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleLogin = () => {
        // Perform authentication here
        // Assuming authentication is successful, set the user's name and redirect to home page
        const userName = "John Doe"; // Replace with actual user's name
        history.push("/home", { userName: userName });
    };


    return (
        <section id="main">
            <div className="nav-item">
                <a className="navbar-brand" href="/">Sunle</a>
            </div>
            <div className="main-row">
                <div className="main-row-img">
                    <img className="head-phone-img" src={HeadPhone} alt=""/>
                </div>
                <div className="main-row-text">
                    <h1>Hear me out</h1>
                    <p>Without music, life would be a mistake</p>
                    <br />
                    <form>UserName
                        <input 
                            type="text" 
                            placeholder="username" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <br />Password:
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <br />
                        <button type="button" className="btn" onClick={handleLogin}>
                            Signup
                        </button>
                    </form>
                    <Link to={"/home"} className="btns">
                        Start Listening without music
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Login;
