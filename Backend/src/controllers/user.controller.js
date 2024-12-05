const UserModel = require('../models/user.mode');

export async function CreateUser(req,res) {
 const { Name, email, password }=req.body;
 const CheckUserPresent = await UserModel.findone({
    email: email,
 });

 if(CheckUserPresent){
    return res.send('User Already exists');
 }
const newUser = new UserModel({
    Name: Name,
    email: email,
    password: password,
 });

 await newUser.save();

 return res.send('User Created Successfully');
}