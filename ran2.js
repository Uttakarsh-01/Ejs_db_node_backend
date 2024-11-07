// const express = require("express");
// const users = require("./ran.json");
// const app = express();
// const PORT = 8000;
// const fs = require("fs");

// //middleware basically it is a plugin which is used for encoding
// app.use(express.urlencoded({extended:false}));

// app.use((req,res,next)=>{
//     fs.appendFile("log.txt",${req.ip}  ${Date.now()}:${req.method}: ${req.path},(err,data)=>{
//         next();
//     }
// );
// });


// app.use((req,res,next)=>{
//     console.log("hello from middleware 1")
//     // return res.json({mgs:"hello from middle ware 1"})
//     return res.end("hey");
//     next()
// });

// app.use((req,res,next)=>{
//     console.log("hello from middle ware 2")
//     //db query
//     //credit card info
//     req.creditCardNumber = "123"
//     next()
//     // return res.end("hey")
// })
// // Routes
// app.get("/api/users", (req, res) => {
//     res.setHeader("myName","uttakarsh");
//     return res.json(users);
// });

// app.get("/users", (req, res) => {
//     const html = `
//     <ul>
//     ${users.map((user) => <li>${user.first_name}</li>).join('')}
//     </ul>`;
//     res.send(html);
// });


// app.get("/api/users/:id",(req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user)=> user.id === id);
//     return res.json(user);
// });

// app.post("/api/users",(req,res)=>{
//     const body = req.body;
//     console.log("body",body)
//     return res.json({status: "pending"});
// });
// app.patch("/api/users",(req,res)=>{
//     //todo:edit the user with id \\
//     return res.json({status: "pending"});
// });
// app.delete("/api/users",(req,res)=>{
//     //todo:delete the user with id 
//     return res.json({status: "pending"});
// });


// app.listen(PORT, () => console.log(Server started at port ${PORT}));