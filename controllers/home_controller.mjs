import City from "../models/city.mjs";
import User from "../models/user.mjs";
class HomeController {
  static async index(req, res) {
    let data = await City.find({});
    let users = await User.find({});
    console.log(users);
    let city = parseInt(req.query.city);
    let plate_no = data[city].plate_no;
    console.log(plate_no);
    res.render("index", { title: "Home Page", data, plate_no });
  }
}

export default HomeController;
