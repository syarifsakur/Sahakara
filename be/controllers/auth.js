const user = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports={

    register:async(req,res)=>{
        const {username,email,password} = req.body;

        if(!username || !email || !password){
            return res.status(400).json({message:"kolom harus di isi semua"})
        }

        if(password.length < 8){
            return res.status(400).json({message:"password minimal 8 karakter"})
        }
        if(!email.includes("@")){
            return res.status(400).json({message:"harus dengan format @"})
        }

        try {
            const users = await user.findAll()
            if(users.email === email){
                return res.status(400).json({message:"email sudah terdaftar"})
            }

            const hashPassword = await bcrypt.hash(password,10)
            const response = await user.create({
                username:username,
                email:email,
                password:hashPassword
            })
            return res.status(201).json({message:"berhasil registrasi!"})
        } catch (error) {
            return res.status(500).josn({message:"internal server error"})
        }
    },

    login:async(req,res)=>{
        const {email,password} = req.body
        try {
            const users = await user.findOne({
                where:{
                    email:email
                }
            })

            if(!users){
                return res.status(404).json({message:"email tidak terdaftar"})
            }

            const passwords = await bcrypt.compare(password,users.password)
            if(!passwords){
                return res.status(400).json({message:"password salah !"})
            }

            const token = jwt.sign({
                id:users.id
            },
            "matoganteng",
            {expiresIn:"1d"})

            await users.update({token:token})

            res.cookie("token",token,{
                httpOnly:true,
                maxAge : 24 * 60 * 60 * 1000
            })

            return res.status(200).json({message:"login berhasil"})
            
        } catch (error) {
            return res.status(500).json({message:"internal server error",error})
        }
    }

}