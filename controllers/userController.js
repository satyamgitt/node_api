import { User } from "../models/userModel.js";


export const getAllUser = async (req, res) => {
    console.log("all" , req.query);
    const users = await User.find({})


    res.json({
        succcess: true,
        users,
    })
}


export const register =  async (req, res) => {


    const { name, email, password } = req.body

    const users = await User.create({
        name,
        email,
        password
    })

    res.status(201).cookie("satyam", "lawada ka darkar").send({
        succcess: true,
        message: "Register Successfully"
    })
}


export const getByid = async(req, res) => {


    
    // const { id } = req.body
    // const { id } = req.query
    // ! in case of dynamic routing
    const { id } = req.params
    console.log("fdgb" , id);
     const user = await User.findById(id)
// console.log("usernnnnn" , user);
     res.json({
        succcess:true,
        user,
     })
}