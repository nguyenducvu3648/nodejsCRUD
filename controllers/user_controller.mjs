import User from "../models/user.mjs";
class UserController {
  static async index(req, res) {
    let q = req.query.q;
    q = `.*${q}.*`;
    var re = new RegExp(q);
    let users = await User.find({ name: re });
    console.log(users);
    res.render("user", { title: "User Management", users });
  }
}

export default UserController;
