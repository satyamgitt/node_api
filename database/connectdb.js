import mongoose from "mongoose";

export const connectdb = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
    dbName: "nodeapi"
}).then(() => console.log("database Connected")).catch((e) => console.log("error :", e))

}