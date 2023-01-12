const express = require("express");
const app = express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
app.set('view engine','ejs');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
mongoose.connect("mongodb+srv://tododb123:todo123@cluster0.dg6mloo.mongodb.net/todolist");

const itemsSchema = {
    name:String,
    
    date:String,
    time:String
    

}
const impitemsSchema = {
    name:String,
    
    date:String,
    time:String
    

}
const cmplSchema = {
    name:String,
    date:String
    

}
const Item=mongoose.model("item",itemsSchema);
const impItem=mongoose.model("impitem",impitemsSchema);
const cmplItem=mongoose.model("cmplitem",cmplSchema);
 
app.get("/",function(request,response){ 

  
   let dt=new Date();
    let d=(dt.getDate()).toString().padStart(2,0);
    let m= (dt.getMonth()+01).toString().padStart(2,0);
    let y=dt.getFullYear().toString();
    let x=y+"-"+m+"-"+d;
    
    impItem.find({date:x},function(err,mitems){ 
              
               
        Item.find({date:x},function(err,founditems){ 
              
          
            response.render('index',{newlistitems:founditems,importentitems:mitems});
          
          
         

        })

   })
       
       
   
    

 
  
})
app.get("/all",function(request,response){ 
    
    impItem.find({},function(err,mitems){ 
              
               
        Item.find({},function(err,aitems){ 
                                     
            response.render('all',{allitems:aitems,alimportentitems:mitems});
        })

   })

   
          
})
app.get("/impl",function(request,response){ 

    impItem.find({},function(err,aitems){ 
                                     
        response.render('imp',{importentitems:aitems});
    })
          
})
 app.get("/cmplt",function(request,response){ 

    cmplItem.find({},function(err,items){ 
                                     
        response.render('cmplt',{completeditems:items});
    })
          
 })
 app.post("/imp",function(req,res){
    const impitem2=req.body.imp;
    Item.findOne({id:impitem2},function(err,iitem){ 
        
        if(err){
            console.log(err);
        }
        else{ 
            const impitem=new impItem({
                name:iitem.name,
                date:iitem.date,
                time:iitem.time
                
            })
           impitem.save();
        }
       
    
    })
    Item.findByIdAndRemove(impitem2,function(err){
        if(err){
            console.log(err);
        }
        else{
            
        }
       
    })
    
    res.redirect("/");
 })
 app.post("/alimp",function(req,res){
    const impitem=req.body.imp;
    Item.findOne({id:impitem},function(err,iitem){ 
        
        if(err){
            console.log(err);
        }
        else{ 
            const impitem=new impItem({
                name:iitem.name,
                date:iitem.date,
                time:iitem.time
                
            })
           impitem.save();
        }
       
    
    })
    Item.findByIdAndRemove(impitem,function(err){
        if(err){
            console.log(err);
        }
        else{
            
        }
       
    })
    
    res.redirect("/all");
 })
 app.post("/delimp",function(req,res){
    const delimpitem=req.body.delimp;
    impItem.findOne({id:delimpitem},function(err,iitem){ 
        
        if(err){
            console.log(err);
        }
        else{ 
            const item=new Item({
                name:iitem.name,
                date:iitem.date,
                time:iitem.time
                
            })
           item.save();
        }
       
    
    })
    impItem.findByIdAndRemove(delimpitem,function(err){
        if(err){
            console.log(err);
        }
        else{
            
        }
       
    })
 
  res.redirect("/");

})
app.post("/delimp2",function(req,res){
    const delimpitem=req.body.delimp;
    impItem.findOne({id:delimpitem},function(err,iitem){ 
        
        if(err){
            console.log(err);
        }
        else{ 
            const item=new Item({
                name:iitem.name,
                date:iitem.date,
                time:iitem.time
                
            })
           item.save();
        }
       
    
    })
    impItem.findByIdAndRemove(delimpitem,function(err){
        if(err){
            console.log(err);
        }
        else{
            
        }
       
    })
 
  res.redirect("/impl");

})
app.post("/aldelimp",function(req,res){
    const delimpitem=req.body.delimp;
    impItem.findOne({id:delimpitem},function(err,iitem){ 
        
        if(err){
            console.log(err);
        }
        else{ 
            const item=new Item({
                name:iitem.name,
                date:iitem.date,
                time:iitem.time
                
            })
           item.save();
        }
       
    
    })
    impItem.findByIdAndRemove(delimpitem,function(err){
        if(err){
            console.log(err);
        }
        else{
            
        }
       
    })
 
  res.redirect("/all");

})

app.post("/",function(req,res){
    const itemname=req.body.newtask;
    
    let dt=new Date();
    let de=req.body.time;
    
    let d=(dt.getDate()).toString().padStart(2,0);
    let m= (dt.getMonth()+01).toString().padStart(2,0);
    let y=dt.getFullYear().toString();
    let x=y+"-"+m+"-"+d;
   
    const item=new Item({
        name:itemname,
        
        date:x,
        
        time:de
        
        
    })
    item.save();
    res.redirect("/");
    
})
app.post("/all",function(req,res){
    const itemname=req.body.newtask;
    const time3=req.body.time;
    
    let de=req.body.date;
    
   
    const item=new Item({
        name:itemname,
        
        date:de,
        time:time3

        
        
        
        
    })
    item.save();
    res.redirect("/all");
    
})
app.post("/delete",function(req,res){
    const delitem=req.body.delete;
    
    Item.findByIdAndRemove(delitem,function(err){
        if(err){
            console.log(err)
        }
        else{
            
        }
       
    })

  res.redirect("/");

})
app.post("/delete2",function(req,res){
    const delitem=req.body.delete;
    
    impItem.findByIdAndRemove(delitem,function(err){
        if(err){
            console.log(err)
        }
        else{
            
        }
       
    })

  res.redirect("/");

})
app.post("/aldelete",function(req,res){
    const delitem=req.body.delete;
    
    Item.findByIdAndRemove(delitem,function(err){
        if(err){
            console.log(err)
        }
        else{
            
        }
       
    })

  res.redirect("/all");

})
app.post("/aldeleteimp",function(req,res){
    const delitem=req.body.delete;
    
    impItem.findByIdAndRemove(delitem,function(err){
        if(err){
            console.log(err)
        }
        else{
            
        }
       
    })

  res.redirect("/all");

})
app.post("/cmpldelete",function(req,res){
    const delitem2=req.body.delete2;
    
    cmplItem.findByIdAndRemove(delitem2,function(err){
        if(err){
            console.log(err)
        }
        else{
            
        }
       
    })

  res.redirect("/cmplt");
})
app.post("/cmpl",function(req,res){
    const cmplitem=req.body.cmp;
    Item.findOne({id:cmplitem},function(err,fitem){ 
        let dt=new Date;
        if(err){
            console.log(err);
        }
        else{ 
            const cmpitem=new cmplItem({
                name:fitem.name,
                date:dt.toLocaleDateString("en-IN")
                
            })
           cmpitem.save();
        }
       
    
    })
    Item.findByIdAndRemove(cmplitem,function(err){
        if(err){
            console.log(err);
        }
        else{
            
        }
       
    })
    
    
    

  res.redirect("/");

})
app.post("/cmpl24",function(req,res){
    const cmplitem=req.body.cmp;
    impItem.findOne({id:cmplitem},function(err,fitem){ 
        let dt=new Date;
        if(err){
            console.log(err);
        }
        else{ 
            const cmpitem=new cmplItem({
                name:fitem.name,
                date:dt.toLocaleDateString("en-IN")
                
            })
           cmpitem.save();
        }
       
    
    })
    impItem.findByIdAndRemove(cmplitem,function(err){
        if(err){
            console.log(err);
        }
        else{
            
        }
       
    })
    
    
    

  res.redirect("/");

})
app.post("/alcmpl",function(req,res){
    const cmplitem=req.body.cmp;
    Item.findOne({id:cmplitem},function(err,fitem){ 
        let dt=new Date;
        if(err){
            console.log(err);
        }
        else{ 
            const cmpitem=new cmplItem({
                name:fitem.name,
                date:dt.toLocaleDateString("en-IN")
                
            })
           cmpitem.save();
        }
       
    
    })
    Item.findByIdAndRemove(cmplitem,function(err){
        if(err){
            console.log(err);
        }
        else{
            
        }
       
    })
    
    
    

  res.redirect("/all");

})

app.listen(3000, function(){
    console.log("304");
    
    
    
})