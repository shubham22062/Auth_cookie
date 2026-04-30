import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from axios

export interface UserData{
    email:string;
    password:string;
}

export default function Signin(){

  const [email, setEmail] = useState("");
  const [password , setPassword] = useState("");



   

    return (
        <div>
            <h1>Welcome to signin page</h1>
            <form >
                <div>
                <input onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                 type="email"
                 placeholder="enter your eamil"
                />

                <input onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                 type="password"
                 placeholder="enter your password..."
                />

                <button onClick={async()=>{
                    await axios.post("http://localhost:3000/signin",{
                        email,
                        password
                    },{
                        withCredentails:true
                    });
                    alert("logged In")
                }}>submit</button>
            </div>
            </form>
        </div>
    )
}