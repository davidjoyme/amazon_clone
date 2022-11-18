//First API

//IMPORTS FROM PACKAGES
const express=require("express");
const mongoose =require("mongoose");
const adminRouter = require("./routes/admin");
//IMPORTS FROM OTHER FILES
//INIT
const PORT=3000;

const app =express();

const DB ="mongodb+srv://david:david123@cluster0.6xq1e7c.mongodb.net/?retryWrites=true&w=majority";
const authRouter=require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
//middleware
//CLIENT -> middleware->SERVER ->CLIENT
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

mongoose.connect(DB).then(()=>{
    console.log('Connection Successful');
}).catch((e)=>{
    console.log(e);
});

//connections
app.listen(PORT,"0.0.0.0",()=>{
  console.log(`connected at Port ${PORT}`);
});

