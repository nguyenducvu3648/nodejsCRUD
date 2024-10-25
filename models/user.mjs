import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  role: {
    type: String,
    default: 0,
    enum: {
      values: [0, 1],
      message: "{VALUE} is not supported",
    },
  },
});

const User = mongoose.model("user", userSchema);

export default User;
