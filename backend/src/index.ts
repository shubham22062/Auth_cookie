import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt, {type JwtPayload} from "jsonwebtoken"
import path from "path"

const JWT_SECRET = "lskdjflkwejsd";


const app = express();

app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}))


app.post("/signin", (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const token = jwt.sign({
        id:1
    }, JWT_SECRET)

    res.cookie("token", token);
    res.send("logged in")
})

app.get("/user", (req,res)=>{
    const token = req.cookies.token;
    const decoded = jwt.verify(token , JWT_SECRET) as JwtPayload

    res.send({
        userId: decoded.id
    })
})

app.post("/logout" , (req,res)=>{
    res.cookie("token","ads");
    res.json({
        message:"Logged out"
    })
})

app.listen(3000);