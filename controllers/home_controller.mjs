import City from "../models/city.mjs";

class HomeController {
  static async index(req, res) {
    try {
      // Lấy tất cả dữ liệu từ MongoDB
      let data = await City.find({});

      // Lấy giá trị city từ query string, mặc định là '0' nếu không có city
      let city = req.query.city ? req.query.city : '0';

      // Kiểm tra xem city có phải là số hợp lệ hay không
      city = parseInt(city);
      
      // Nếu city không hợp lệ, trả về thông báo lỗi
      if (isNaN(city) || city < 0 || city >= data.length) {
        return res.status(400).send('Invalid city index.');
      }

      // Lấy thông tin plate_no dựa trên city đã chọn
      let plate_no = data[city].plate_no;

      // Render trang với dữ liệu
      res.render("index", { title: "Home Page", data, plate_no });
    } catch (err) {
      // Xử lý lỗi nếu có
      console.error(err);
      res.status(500).send("Error fetching data from database.");
    }
  }
}

export default HomeController;
