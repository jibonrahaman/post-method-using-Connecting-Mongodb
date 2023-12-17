const express=require("express")
const user=express();
const cors=require('cors');
user.use(cors());
user.use(express.json())
const mongoose =require('mongoose')
mongoose.connect('mongodb+srv://shahriarfardous:jibon123;@cluster0.itrcu6u.mongodb.net/test?retryWrites=true&w=majority').then(()=>{
  console.log("connected");
})
const UserList=require("./Model/userSchema")
// get method 
// const users=[
  //     {id:"1",name:"shahriar"},
  //     {id:"2",name:"fardous"},
  //     {id:"3",name:"aljim"},
  // ]
  //   user.get("/users", (req,res)=>{
    //     res.send(users)
    //   })
    //   user.post("/users", (req,res)=>{
      //     console.log(req.body);
      //     const newUser=req.body;
      //     users.push(newUser);
      //     res.send(newUser)
      //   })
      // get method 
      

      // data post mongodb 
      user.post("/users", (req,res)=>{
        const {firstname,lastname,email}=req.body;
        if(!firstname){
          return res.send("send firstname")
        }
        if(!lastname){
          return res.send("send lastname")
        }
        if(!email){
          return res.send("send email")
        }
        const users=new UserList({
          firstname:firstname,
          lastname:lastname,
          email:email
        })
        users.save();
        res.send(req.body)
      })
      // data post mongodb 
      
 
      //  data get
        // user.get("/users", (req,res)=>{
    //   db.collection.find({})
    // })
    // user.get("/users" , (req,res)=>{
      //   UserList.find((err,val)=>{
        //     if(err){
          //       console.log(err);
          //     }
          //     else{
            //       res.json(val)
            //     }
            //   })
            // })

            // user.get("/users", (req,res)=>{
            //   const data =await UserList.find({})
            // })

            user.get("/users", async function(req,res){
              // const data =await.axios UserList.find()
              const data=await UserList.find({});
              res.send(data)
            })
            //  data get





module.exports=user