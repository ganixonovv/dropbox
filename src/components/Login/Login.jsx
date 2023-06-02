import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './Login.css'
import { Link, Navigate } from "react-router-dom";
import { Input, Button, Typography } from "@mui/material";
import { droplogo } from "../../constant/icons";

const firebaseConfig = {
  apiKey: "AIzaSyBAiSQ2B-yXc8SoWDNlmTAwCksrMpgBFmw",
  authDomain: "rozimurod-dropbox.firebaseapp.com",
  projectId: "rozimurod-dropbox",
  storageBucket: "rozimurod-dropbox.appspot.com",
  messagingSenderId: "1062054634643",
  appId: "1:1062054634643:web:a30c5f13fe7b43ec559966",
  measurementId: "G-SC006Q5PBD"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAuth, setIsAuth ] = useState(false)
    const handleSignIn = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Succes Login")
          setIsAuth(true)
        })
        .catch(() => {
          console.log("Error");
        });
    };
    return (
      <div className="logo">
        <img className="img" src={droplogo} alt="dropbox"/>
        <h2>Login</h2>
        <div className="inputs-reg">
          <Input id="input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input id="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button type="submit" onClick={handleSignIn}>Login</Button>    
        <Typography>Already have an account? <Link to="/">Register</Link></Typography>
        {isAuth && <Navigate to="/home"/>}

      </div>
       
  );
  }

  export default Login
