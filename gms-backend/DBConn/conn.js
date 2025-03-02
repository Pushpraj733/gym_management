const mongoose=require("mongoose");

mongoose.connect('mongodb+srv://pushprajj77:gM8tfmebQgc0ak8o@cluster0.45rxt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log('DB connection successful!')).catch(err=>{
    console.log(err)
});
