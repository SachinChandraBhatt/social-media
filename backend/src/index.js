import {app} from "./app.js"

import dotenv from "dotenv"

import connectdb from "./db/index.js"

dotenv.config()
const PORT = 8000

app.get("/" , (req , res)=>{
    return res.status(201).json({
        hi:"starting completed"
    })
})

connectdb()

app.listen(PORT , ()=>{
    console.log(`server is running at ${PORT}`);
})
