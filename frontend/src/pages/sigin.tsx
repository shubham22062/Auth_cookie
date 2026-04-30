import { useState } from "react"

export interface UserData{
    email:string;
    password:string;
}

export default function Signin(){

    const [user, setUser] = useState({
        email:"",
        password:"",
    })
    
    return (
        <div>
            <h1>Welcome to signin page</h1>
            <form>
                <div>
                <input
                 type="email"
                 placeholder="enter your eamil"
                />

                <input
                 type="password"
                 placeholder="enter your password..."
                />

                <button>submit</button>
            </div>
            </form>
        </div>
    )
}