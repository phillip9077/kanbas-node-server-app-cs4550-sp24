import mongoose from "mongoose";
const lessonSchema = new mongoose.Schema({
    _id: { type: String, required: true, unique: true },
    name: { type: String },
    description: { type: String },
    module: { type: String },
});

const modulesSchema = new mongoose.Schema({
    _id: { type: String, required: true, unique: true },
    name: { type: String },
    description: { type: String},
    course: { type: String },
    lessons: [ lessonSchema ],
  },
  { collection: "modules" });
export default modulesSchema;