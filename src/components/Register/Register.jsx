 import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import 'firebase/compat/auth';
import { Link, Navigate } from "react-router-dom";
import './Register.css'
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



const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isAuth, setIsAuth ] = useState(false)
  const handleSignUp = () => {
    createUserWithEmailAndPassword( auth, email, password)
          .then(() => {
              alert("Succes Register")
              setIsAuth(true)
          })
          .catch(() => {
            console.log("Error");
          });
        };

  return (
    <div className="logo">
      <img className="img" src={droplogo} alt="dropbox"/>
      <h2>Register</h2>
      <div class="user">
      <Input id="input" type="text" placeholder="Your Username"  value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input id="input" type="text" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input id="input" type="password" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit" onClick={handleSignUp}>Register</Button>
      <Typography>Already have an account? <Link to="/login">Login</Link></Typography>
      {isAuth && <Navigate to="/home"/>}
      </div>
    </div>
    
  );
}

export default Register
