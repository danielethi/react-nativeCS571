const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const UserModel = mongoose.model("user", userSchema);

class UserCollection{
  static async  Create(firstName,lastName) {
    const document = new UserModel({firstName,lastName});
    await document.save();
    return document
  }

  static async getAllUsers() {
    const document = await UserModel.find({});
    return document;
  }
  static async getById(userId){
         const document = await UserModel.find({_id:userId})
         return document
  }
  static async update(firstName,lastName,userId){
      const users = await UserModel.updateOne({_id:userId},{firstName,lastName})
      return users
  }
  static async delete(userId){
      const ret = UserModel.findByIdAndDelete({_id:userId})
      return ret
  }
}
module.exports = UserCollection;
