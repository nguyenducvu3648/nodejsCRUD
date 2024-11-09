import express from "express";
import morgan from "morgan";
import { connectDB } from "./config/connectDB.mjs";  // Giữ nguyên phương thức kết nối DB từ file config
import rootRouter from "./routes/root.mjs";
import userRouter from "./routes/user.mjs";
import bodyParser from "body-parser";

// Kết nối MongoDB qua connectDB (nếu connectDB mjs thực hiện kết nối MongoDB)
connectDB(); // Gọi phương thức kết nối DB từ config

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
// parse application/json
app.use(bodyParser.json());

app.use(morgan("combined"));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", rootRouter);
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server Started!!!");
});
