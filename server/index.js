import express from "express";
import cors from "cors";
import registerAPI from "./src/api.js";

export const app=express();

app.use(cors())

app.listen("8000",()=>{
    console.log(`booking aapp listening at http://localhost:${8000}`)
});

registerAPI();