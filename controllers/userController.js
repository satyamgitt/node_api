import { User } from "../models/userModel.js";


export const getAllUser = async (req, res) => {
    console.log(req.query);
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


export const getByid = async (req, res) => {


    // const { id } = req.body
    const { id } = req.query
    // const { id } = req.params
    console.log("fdgb" , req.query);
     const user = await User.findById(id)

     res.json({
        succcess:true,
        user,
     })
}