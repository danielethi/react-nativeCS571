const Users = require("../models/users");

exports.getAllUsers = async (req, res) => {
  const users = await Users.getAllUsers();
  res.send(users);
};

exports.addUsers = async (req, res) => {
  const {firstName,lastName } = req.body;

  let result = await Users.Create(firstName,lastName);
  res.send(result);
};

exports.getUserById = async(req,res)=>{
       const id=req.body.id
       const ret =await  Users.getById(id)
       res.send(ret)
}
exports.update=async (req,res)=>{
    const id=req.params.id 
    const {firstName,lastName}=req.body
    const user = await Users.update(firstName,lastName)
    res.send(user)
}
exports.delete=async (req,res)=>{
    const id=req.params.id 
    const user = await Users.delete(id)
    res.send(user)
}