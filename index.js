const app=require('./userList');
const port=8000;
app.use('/', (req,res)=>{
    res.send("<h1>404 !! Not Found this Page<h1>")
})
app.listen(port, function(){
    console.log(`port is running this host:${port}`)
})