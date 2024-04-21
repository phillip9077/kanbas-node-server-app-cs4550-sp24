import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  _id: { type: Number, unique: true },
  val: String
});

const questionSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  title: String,
  type: { type: String, default: "Multiple" },
  description: String,
  points: { type: Number, default: 0 },
  mainAnswer: String,
  possibleAnswers: [ answerSchema ]
});

const quizSchema = new mongoose.Schema({
    _id: { type: String, required: true, unique: true },
    title: String,
    course: String,
    description: String,
    publish_status: { type: Boolean, default: false },
    questions: [ questionSchema ],
    quiz_type: { type: String, default: "Graded Quiz" },
    assignment_group: { type: String, default: "QUIZZES" },
    shuffle_answers: { type: Boolean, default: true },
    time_limit: { type: Boolean, default: true },
    time_limit_length: { type: Number, default: 20 },
    multiple_attempts: { type: Boolean, default: false },
    show_correct_answers: { type: String, default: "Immediately" },
    accesscode: { type: String, default: "" },
    one_question_per: { type: Boolean, default: true },
    webcam_required: { type: Boolean, default: false },
    lock_question: { type: Boolean, default: false },
  },
  { collection: "quizzes"});
export default quizSchema;