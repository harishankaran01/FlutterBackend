const express=require("express");
const app=express();
const errorHandler=require("./ErrorController/errorHandler");
const dbConnenction=require("./Config/dbConnection");
const cors=require("cors");
dbConnenction();
require("dotenv").config(); 
const PORT=process.env.PORT||3000;
app.use(cors());
app.use(express.json());
app.use("/admin",require("./Routes/adminRoutes"));
app.use(errorHandler);
app.listen(PORT,()=>console.log(`Server is running in ${PORT}`))