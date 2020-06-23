const express = require('express');
const bodyParser =require("body-parser");
const app=express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended:true}));



var task=[];
var complete=["complete query"];
2
app.post('/addtask',function(req,res){
    var newTask=req.body.newtask;
    task.push(newTask);
   res.redirect("/");
});
app.post("removetask",function(req,res){
    var completeTask=req.body.check;
    if(typeof completeTask ==="string"){
        complete.push(completeTask);
        task.splice(task.indexOf(completeTask),1);
    }
    else if(typeof completeTask==="object"){
        for(var i=0;i<completeTask.length;i++){
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]),1);
        }
        
    }
    res.redirect("/");
    
})


//render the ejs and display added task, task(index.ejs) = task(array)
app.get("/", function(req, res) {    
  res.render("index", { task: task, complete:complete });
});


const port =process.env.PORT ||3000;
app.listen(3000,()=>console.log(`Listening on port ${port}`));
