import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const findCourseById = async (req, res) => {
    const { id } = req.params;
    const course = await dao.findCourseById(id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  }
  const updateCourse = async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    await dao.updateCourse(id, course);
    res.sendStatus(204);
  }
  const deleteCourse = async (req, res) => {
    const { id } = req.params;
    await dao.deleteCourse(id);
    res.sendStatus(204);
  }
  const createCourse = async (req, res) => {
    const course = req.body;
    await dao.createCourse(course);
    res.send(course);
  }
  const courses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.send(courses);
  }
  app.get("/api/courses/:id", findCourseById);
  app.put("/api/courses/:id", updateCourse);
  app.delete("/api/courses/:id", deleteCourse);
  app.post("/api/courses", createCourse);
  app.get("/api/courses", courses);
}
