import * as dao from "./dao.js";
export default function QuizRoutes(app) {
  const getQuizzes = async (req, res) => {
    const { cid } = req.params;
    const quizzes = await dao.findAllQuizzes(cid);
    res.json(quizzes);
  };
  const getQuizById = async (req, res) => {
    const { qid } = req.params;
    const quiz = await dao.findQuizById(qid);
    res.json(quiz);
  };
  const createQuiz = async (req, res) => {
    const quiz = await dao.createQuiz(req.body);
    res.json(quiz);
  };
  const updateQuiz = async (req, res) => {
    const { qid } = req.params;
    const status = await dao.updateQuiz(qid, req.body);
    res.json(status);
  };
  const deleteQuiz = async (req, res) => {
    const status = await dao.deleteQuiz(req.params.qid);
    res.json(status);
  };
  app.put("/api/quizzes/:qid", updateQuiz);
  app.get("/api/quizzes/:qid", getQuizById);
  app.delete("/api/quizzes/:qid", deleteQuiz);
  app.post("/api/courses/:cid/quizzes", createQuiz);
  app.get("/api/courses/:cid/quizzes", getQuizzes);
}
