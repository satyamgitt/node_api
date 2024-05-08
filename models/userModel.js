import mongoose from "mongoose"


// schemas
const userSchema = new mongoose.Schema({
    name: String, email: String, password: String
})


export const User = mongoose.model("User", userSchema)
