import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    _id: { type: String, required: true, unique: true },
    name: { type: String },
    number: { type: String  },
    startDate: Date,
    endDate: Date,
    image: { type: String, default: "reactjs.jpg"},  
  },
  { collection: "courses" });
export default courseSchema;