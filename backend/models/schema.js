const mongoose=require('mongoose')


const RegisterSchema=new mongoose.Schema({
    username: String,
    email: String, 
    password:String,
    phone:String,
    address:String,
    city:String,
    state:String,
    country:String
    

})


const RegisterModel=mongoose.model("registers",RegisterSchema)

const LoginSchema=new mongoose.Schema({
    username: String, 
    password:String

})


const LoginModel=mongoose.model("logins",LoginSchema)

const AdoptSchema=new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    state: String,
    city: String


})


const AdoptModel=mongoose.model("adopts",AdoptSchema)



module.exports={
    RegisterModel:RegisterModel,LoginModel:LoginModel,AdoptModel:AdoptModel

};