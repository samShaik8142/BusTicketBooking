import { app } from "../index.js";
import { getConnection } from "./database/db.js";
import bodyParser from "body-parser";

import { getUsers, getData, singnUp, chkUser } from "./database/user.js"


export default function registerAPI() {
    app.use(bodyParser.json());

    app.get("/user/:id",(req,res)=>{
        const id= req.params.id;
        getUsers(id,(user)=>{
            res.send(user);
        })
    })

    
    app.post("/signin", (req, res) => {
        const body = req.body;
        console.log(body);
          getData(body, (result) => {
            res.send(result ? { status: true, message: "Signin Success"} : { status: false, message: "No data found, Please signup." });
          })
        
      })

    app.post('/signup',(req,res)=>{
        const body=req.body;

        getData(body,(result)=>{
            if(!result){
              singnUp(body,(signup)=>{
                res.send(signup ? {message: "registered sucessfully",status: true} : {message: "unsuccessfull",status:false})
              })
            }else{
              res.send({message:"Users Exits ",status:false });
            }
        })
        
    })
}
    
