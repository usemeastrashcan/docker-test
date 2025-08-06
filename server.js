const express =  require("express")

const app = express()

app.get(('/'), (req, res)=>
    {   
        res.send("Inside The App. Docker File is set. CI set")
    })  

app.listen(3000, ()=>
{
    console.log("App is listening.")
})