const express = require('express');
const app = express();

// app.use(express.static("public"));
// app.set("view engine","ejs");
// app.set("views","./views");
app.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'dhdhdhd'
    })
})

module.exports = app